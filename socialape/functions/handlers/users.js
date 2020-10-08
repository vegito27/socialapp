const {db,admin}=require('../util/admin')

const firebase =require('firebase')

const config = {
    apiKey: "AIzaSyBzXaJywI3W3XhMeTMPv88RUxV5bYW6r5c",
    authDomain: "socialape-e3733.firebaseapp.com",
    databaseURL: "https://socialape-e3733.firebaseio.com",
    projectId: "socialape-e3733",
    storageBucket: "socialape-e3733.appspot.com",
    messagingSenderId: "1093671129591",
    appId: "1:1093671129591:web:912d27184b70c93e5c5ef2",
    measurementId: "G-7LSRD6GFF9"
  };
 
firebase.initializeApp(config);
 

const isEmpty=(string)=>{

	if(string.trim()==='') return true

	else return false

}

const isEmail=(email)=>{


	 const regex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	console.log(regex)

	if(email.match(regex)) return true

	return false	
}

//login api
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


	firebase
	.auth()
	.signInWithEmailAndPassword(user.email,user.password)
	.then(data=>{
		return data.user.getIdToken();
	}).
	then(token=>{

		return response.json({token})
	})
	.catch(err=>{

		if(err){

		     console.error("error login", error);

			return response.status(403).json({general:"Wrong Credentials,Please try again!"})
		}

	})
}

//signup with authentication

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
    let img='4.jpeg'


	db.doc(`/users/${newUser.handle}`).get().then(doc=>{

		if(doc.exists){

			return response.status(400).json({handle:'this handle has already taken'})
		
		}else{

			return firebase.auth().createUserWithEmailAndPassword(newUser.email,newUser.password)
		}
	})
	.then(data=>{
		// return response.status(201).json({message:`user ${data.user.uid} signed up successfully`})

		userId=data.user.uid

		return data.user.getIdToken()

	}).then(Idtoken=>{

		token=Idtoken;

		const userCredentials={

			handle:newUser.handle,
			email:newUser.email,
			createdAt:new Date().toISOString(),
			imageUrl:`https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${img}?alt=media`,
			userId: userId
		}

		return db.doc(`/users/${newUser.handle}`).set(userCredentials)


	}).then((data)=>{

		return response.status(201).json({token})

	}).catch(err=>{
		
		console.log("Error signing up",err)

		if(err.code!=='auth/email-already-in-us'){
			return response.status(400).json({ email:'Email is already in use' })
		}else{

		return response.status(500).json({general:'Something went wrong,Please try again'} );
        
        }

	})
}

//upload the image
exports.ImageUpload=(request,response)=>{

	const BusBoy=require('busboy')
	const path=require('path')
	const os=require('os')
	const fs=require('fs')

	const busboy=new BusBoy({ headers:request.headers })


	let imageFileName;

	let imageToBeUploaded={};


	busboy.on('file',(fieldname,file,filename,encoding,mimetype)=>{

		if(mimetype!== 'image/jpeg' && mimetype!=='image/png'){

			return response.status(400).json({error: 'Wrong File Type Submitted'})

		}

		console.log(filename)
		console.log(fieldname)
		console.log(mimetype)

		const imageExtension=filename.split('.')[filename.split('.').length-1]

		const imageFileName=filename.split('.')[0]

		console.log(imageFileName)

		const filepath=path.join(os.tmpdir(),imageFileName)

		imageToBeUploaded={ filepath, mimetype}

		file.pipe(fs.createWriteStream(filepath))

	})


	busboy.on('finish',()=>{

		admin.storage().bucket(config.storageBucket).upload(

		imageToBeUploaded.filepath,
		{
			resumable:false,

			metadata:{

				metadata:{

				contentType:imageToBeUploaded.mimetype
			}
		}

	})
	.then(()=>{

		const imageUrl=`https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${imageFileName}?alt=media`

		return db.doc(`/users/${request.user.handle}`).update({ imageUrl })


	}).then(()=>{

		return response.json({message:'Image uploaded successfully'})

    }).catch(err=>{

    	console.error(err)

    	return response.status(500).json({error:err.code})

    })

})

	busboy.end(request.rawBody)

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


//add user details
exports.addUserDetails=(request,response)=>{

	let userDetails=reduceUserDetails(request.body)

	db.doc(`/users/${request.user.handle}`).update(userDetails)
	.then(()=>{

		return response.json({message:"Details Added Successfully"})

	}).catch(err=>{

		console.error(err)

		return response.status(500).json({error:err.code})


	})

}

exports.getUserDetails=(request,response)=>{

	let userData={};

	db.doc(`/users/${request.params.handle}`)
	.get()
	.then( doc=>{

		if(doc.exists){

			userData.user=doc.data()

			return db
			       .collection('screams')
			       .where('userHandle','==',request.params.handle)
			       .orderBy('createdAt','desc')
			       .get()
		}else{
			return response.status(404).json({message:"user does not exists"})



		}
	})
	.then(data=>{

		userData.screams=[]

		data.forEach(doc=>{

			userData.screams.push({

				body:doc.data().body,
				createdAt:doc.data().createdAt ,
				userHandle:doc.data().userHandle,
				userImage:doc.data().userImage,
				likeCount:doc.data(). likeCount,
				commentCount:doc.data().commentCount,
				screamId:doc.Id

			})

		})

		return response.json(userData)
	})
	.catch(err=>{

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














