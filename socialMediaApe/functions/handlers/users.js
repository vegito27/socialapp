const {db,admin}=require('../util/admin')

const firebase =require('firebase')

const config = {
    apiKey: "AIzaSyBRumfgKnEHzLDwCsSc8Wq5u85fTuEs-rw",
    authDomain: "apiproject-272406.firebaseapp.com",
    databaseURL: "https://apiproject-272406.firebaseio.com",
    projectId: "apiproject-272406",
    storageBucket: "apiproject-272406.appspot.com",
    messagingSenderId: "258883845085",
    appId: "1:258883845085:web:f0314c371b891ea3361434"
  };

const isEmpty=(string)=>{

	if(string.trim()==='') return true

	else return false

}

const isEmail=(email)=>{

	const regex="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
	if(email.match(regex)) return true

	return false	
}

exports.signup=(request,response)=>{

	const newUser={
		email:request.body.email,
		password:request.body.password,
		confirmPassword:request.body.confirmPassword,
		handle:request.body.handle
	}

	let errors={}
	
    console.log(isEmail(newUser.email))

	if(isEmpty(newUser.email)){

		errors.email='Email must not be empty'

	}else if(!isEmail(newUser.email)){

		errors.email='Must be a valid email address'

	} 

	if(isEmpty(newUser.password))errors.password="Must not be empty" 

	if(newUser.password !== newUser.confirmPassword) errors.confirmPassword=" Passwords must match"	

	if(isEmpty(newUser.handle)) errors.handle="Must not be empty"
	
	if(Object.keys(errors).length>0) return response.status(400).json(errors)	


	let token,userId;

	db.doc(`/users/${newUser.handle}`)
		.get()
		.then(doc=>{

			if(doc.exists){

				return response.status(400).json({handle:'This handle has already taken'})
			
			}else{

				return firebase.auth().createUserWithEmailAndPassword(newUser.email,newUser.password)
			}
		})
		.then(data=>{
		
			userId=data.user.uid

			return data.user.getIdToken()

		})
		.then(Idtoken=>{

			token=Idtoken;

			const userCredentials={

				handle:newUser.handle,
				email:newUser.email,
				createdAt:new Date().toISOString(),
				imageUrl:`https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/ssj3.jpg?alt=media`,
				userId: userId
			}

		return db.doc(`/users/${newUser.handle}`).set(userCredentials)


		})
		.then((data)=>{

			return response.status(201).json({token})

		})
		.catch(err=>{
		
			console.error(err)

			if(err.code==='auth/email-already-in-use'){
				return response.status(400).json({ email:'Email is already in use' })
			}else{

			return response.status(500).json({general:'Something went wrong,Please try again'} );
	        
	        }

	})
}

exports.login=(request,response)=>{

	const user={
		email:request.body.email,
		password:request.body.password
	}

	let errors={}

	if(isEmpty(user.email)) errors.email="Must not be empty"

	if(isEmpty(user.password)) errors.password="Password must not be empty"


	if(Object.keys(errors).length>0){

		return response.status(400).json(errors)
	}	

	firebase.auth().signInWithEmailAndPassword(user.email,user.password)
	.then(data=>{
		return data.user.getIdToken();
	}).
	then(token=>{

		return response.json({token})
	})
	.catch(err=>{
		if(err)
			return response.status(403).json({general:"Wrong Credentials,Please try again!"})

	})
}


const validateImageType = mimeType => {
  if (mimeType === "image/jpeg" || mimeType === "image/png") {
    return true;
  }
  return false;
};

exports.uploadImage = (req, res) => {

	const BusBoy = require("busboy");
	const path = require("path");
	const os = require("os");
	const fs = require("fs");

	const busboy = new BusBoy({ headers: req.headers });

	let imageFileName;
	let imageToBeUploaded = {};

	busboy.on("file", (field, file, fileName, encoding, mimeType) => {
		if (!validateImageType(mimeType)) {
			return res
			    .status(400)
			    .json({ error: "image file should be jpeg or png" });
		}

	let fileNameParts = fileName.split(".");

	const imageExtension = fileNameParts[fileNameParts.length - 1];

		imageFileName = `${Math.round( Math.random() * 100000000)}.${imageExtension}`;

		const filePath = path.join(os.tmpdir(), imageFileName);
		
		imageToBeUploaded = { filePath, mimeType };
		
		file.pipe(fs.createWriteStream(filePath));
	
	});

	busboy.on("finish", () => {
	
	admin
	    .storage()
	    .bucket(config.storageBucket)
	    .upload(imageToBeUploaded.filePath, {
		    resumable: false,
		    metadata: {
		      metadata: { contentType: imageToBeUploaded.mimeType }
			    }
	  })
	    .then(() => {

		    const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/`+imageFileName+`?alt=media`;

		    return db.doc(`/users/${req.user.handle}`).update({ imageUrl });

	  })
	  .then(() => {

	    return res.json({ message: "image uploaded successfully" });

	  })
	  .catch(error => {

	    console.error("error uploading image", error);

	    res.status(500).json(error);

	  });
	});

	busboy.end(req.rawBody);
};

exports.addUserDetails=(request,response)=>{

	let userDetails=reduceUserDetails(request.body)

	db.doc(`/users/${request.user.handle}`).update(userDetails)
	.then(()=>{

		return response.json({message:"Details Added Successfully"})

	}).catch(err=>{

		return response.status(500).json({error:err.code})


	})

}


reduceUserDetails=data=>{

	let userDetails={}

	if(!isEmpty(data.bio.trim())) userDetails.bio=data.bio

	if(!isEmpty(data.website.trim())){


		if(data.website.trim().substring(0,4)!=='http'){

			userDetails.website=`http://${data.website.trim()}`

		}else{
			userDetails.website=data.website
		}
	}	

	if(!isEmpty(data.location.trim())) userDetails.location=data.location

	return userDetails

}


exports.getAuthenticatedUser=(request,response)=>{

	let responseData={}


	db
	.doc(`/users/${request.user.handle}`)
	.get()
	.then((doc)=>{


		if(doc.exists){

			responseData.credentials=doc.data();

		}

		return db.collection('likes').where('userHandle','==',request.user.handle).get()
        
	})
	.then( data=>{

		responseData.likes=[] 

		data.forEach(doc=>{

			responseData.likes.push(doc.data())

		});

		return db.collection('notifications').where('recipient','==',request.user.handle).orderBy('createdAt','desc').limit(10).get()

	}).then(data=>{

		responseData.notifications=[]


		data.forEach(doc=>{

			responseData.notifications.push({

				recipient:doc.data().recipient,
				
				sender:doc.data().sender,
				
				createdAt:doc.data().createdAt,
				
				screamId:doc.data().screamId,
				
				type:doc.data().type,
				
				read:doc.data().read,

				notificationId:doc.id
				
			})

		})

		return response.json(responseData) 

	}).catch(err=>{

		console.error(err)

		return response.status(500).json({error:err.code})

	})
}



exports.marknotificationsRead=(request,response)=>{

	let batch=db.batch();

	request.body.forEach(notificationId=>{

		const notification=db.doc(`/notifications/${notificationId}`)

		batch.update(notification,{read:true})

	})

	batch.commit()
	.then(()=>{

			return response.json({message:'notifications marked as read'} )


		}).catch(err=>{

			console.error(err)

			 return response.status(500).json({error:err.code})

		})

}












