const {db,admin}=require('../util/admin')



const firebase =require('firebase')


const firebaseConfig = {
    apiKey: "AIzaSyBzXaJywI3W3XhMeTMPv88RUxV5bYW6r5c",
    authDomain: "socialape-e3733.firebaseapp.com",
    databaseURL: "https://socialape-e3733.firebaseio.com",
    projectId: "socialape-e3733",
    storageBucket: "socialape-e3733.appspot.com",
    messagingSenderId: "1093671129591",
    appId: "1:1093671129591:web:912d27184b70c93e5c5ef2",
    measurementId: "G-7LSRD6GFF9"
  };

 
 firebase.initializeApp(firebaseConfig);
 


const isEmpty=(string)=>{

	if(string.trim()==='') return true

	else return false

}

const isEmail=(email)=>{

		const regex="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";

		if(email.match(regex)) return true

		return false	
}



exports.login=(request,response)=>{

	const user={

		email:request.body.email,
		password:request.body.password
	}

	console.log(user)

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
		console.error(err)

		if(err.code==='auth/wrong-password'){
			return response.status(403).json({general:'Wrong credentials,Please try again'})
		}else return response.status(500).json({error:err.code}) 

	})
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

		errors.email='must be a valid email address'

	} 

	if(isEmpty(newUser.password))errors.password="Must not be empty" 

	if(newUser.password !== newUser.confirmPassword) errors.confirmPassword=" Passwords must match"	

	if(isEmpty(newUser.handle)) errors.handle="Must not be empty"
	
	if(Object.keys(errors).length>0) return response.status(400).json(errors)	


	let token,userId;


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
			userId: userId
		}

		return db.doc(`/users/${newUser.handle}`).set(userCredentials)


	}).then((data)=>{

		return response.status(201).json({token})

	}).catch(err=>{
		
		console.error(err)

		if(err.code!=='auth/email-already-in-us'){
			return response.status(400).json({ email:'Email is already in use' })
		}else{

		return response.status(500).json({error:err.code});
        
        }

	})
}


exports.ImageUpload=(request,response)=>{

	const BusBoy=require('busboy')
	const path=require('path')
	const os=require('os')
	const fs=require('fs')

	const busbuy=new BusBoy({ headers:request.headers })


	let imageFileName;

	let imageToBeUploaded={};


	busboy.on('file',(fieldname,file,filename,mimetype)=>{

		console.log(filename)
		console.log(fieldname)
		console.log(mimetype)

		const ImageExtension=filename.split('.')[filename.split('.').length-1]

		const ImageFileName=filename.split('.')[0]

		console.log(ImageFileName)

		const filePath=path.join(os.tmpdir(),ImageFileName)

		imageToBeUploaded={filepath,mimetype}

		file.pipe(fs.createWriteStream(filepath))

	})


	busboy.on('finish',()=>{

		admin.storage().bucket().upload(imageToBeUploaded.filepath,
		{
			resumable:false,

			metadata:{

				metadata:{
				contentType:imageToBeUploaded.mimetype
			}
		}

	}).then(()=>{

		const ImageUrl=`https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${imageFileName}?alt=media`

		return db.doc(`/users/${request.user.handle}`).update({ ImageUrl })

	}).then(()=>{

		return response.json({message:'Image uploaded successfully'})

    }).catch(err=>{

    	console.error(err)

    	return response.status(500).json({error:err.code})

    })


	})
}



















