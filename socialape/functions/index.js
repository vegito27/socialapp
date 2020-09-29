const functions = require('firebase-functions');

const admin=require('firebase-admin')


const serviceAccount = require("/Users/rishabhtripathii/Downloads/socialape-e3733-firebase-adminsdk-zef08-cc12d629de.json");

admin.initializeApp({

  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://socialape-e3733.firebaseio.com"

});

const express=require('express')

const app=express()

const db=admin.firestore()


const { getAllScreams,postOneScream,getScreams,commentOnScream,likeScream,unlikeScream } = require('./handlers/screams')

const { login,signup,ImageUpload,addUserDetails,getAuthenticatedUser } =require('./handlers/users')

const {isEmpty,isEmail,FBAuth } = require('./handlers/auth')



app.get('/screams',getAllScreams)

app.post('/screams',FBAuth,postOneScream)

app.get('/scream/:screamId',getScreams)

app.get('/scream/:screamId/like',FBAuth,likeScream)

app.get('/scream/:screamId/unlike',FBAuth,unlikeScream)

app.post('/scream/:screamId/comment',FBAuth,commentOnScream)

app.post('/login',login)

app.post('/signup',signup)

app.post('/user/image',FBAuth,ImageUpload)

app.post('/user',FBAuth,addUserDetails)

app.get('/user',FBAuth,getAuthenticatedUser)


// app.post('/signup',(request,response)=>{

// 	const newUser={

// 		email:request.body.email,
// 		password:request.body.password,
// 		confirmPassword:request.body.confirmPassword,
// 		handle:request.body.handle

// 	}

// 	let errors={}
	
//     console.log(isEmail(newUser.email))


// 	if(isEmpty(newUser.email)){

// 		errors.email='Email must not be empty'

// 	}else if(!isEmail(newUser.email)){

// 		errors.email='must be a valid email address'

// 	} 

// 	if(isEmpty(newUser.password))errors.password="Must not be empty" 

// 	if(newUser.password !== newUser.confirmPassword) errors.confirmPassword=" Passwords must match"	

// 	if(isEmpty(newUser.handle)) errors.handle="Must not be empty"
	
// 	if(Object.keys(errors).length>0) return response.status(400).json(errors)	

	

// 	let img='4.jpeg'


// 	let token,userId;


// 	db.doc(`/users/${newUser.handle}`).get().then(doc=>{

// 		if(doc.exists){

// 			return response.status(400).json({handle:'this handle has already taken'})
		
// 		}else{

// 			return firebase.auth().createUserWithEmailAndPassword(newUser.email,newUser.password)
// 		}
// 	})
// 	.then(data=>{
// 		// return response.status(201).json({message:`user ${data.user.uid} signed up successfully`})

// 		userId=data.user.uid

// 		return data.user.getIdToken()

// 	}).then(Idtoken=>{

// 		token=Idtoken;

// 		const userCredentials={

// 			handle:newUser.handle,
// 			email:newUser.email,
// 			createdAt:new Date().toISOString(),
// 			imageUrl:`https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${img}?alt=media`,
// 			userId:userId
// 		}

// 		return db.doc(`/users/${newUser.handle}`).set(userCredentials)


// 	}).then((data)=>{

// 		return response.status(201).json({token})

// 	}).


// 	catch(err=>{
		
// 		console.error(err)

// 		if(err.code!=='auth/email-already-in-us'){
// 			return response.status(400).json({ email:'Email is already in use' })
// 		}else{

// 		return response.status(500).json({error:err.code});
        
//         }

// 	})

// })


exports.api=functions.region('asia-south1').https.onRequest(app)




