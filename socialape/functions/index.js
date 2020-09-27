const functions = require('firebase-functions');

const admin=require('firebase-admin')


const serviceAccount = require("/Users/rishabhtripathii/Downloads/socialape-e3733-firebase-adminsdk-zef08-cc12d629de.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://socialape-e3733.firebaseio.com"
});

const express=require('express')

const app=express()

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

const db=admin.firestore()

app.get('/screams',(request,response)=>{

	db
	.collection('screams')
	.orderBy('createdAt','desc')
	.get()
	.then(data=>{
		let screams=[]

		data.forEach((doc)=>{

			screams.push({

				    screamId:doc.id,
					scream:doc.data().scream,
					userHandle:doc.data().userHandle,
					createdAt:new Date().toISOString()

			})

		})

		return response.json(screams);

	}).catch(err=>console.error(err))
})

const FBAuth=(request,response,next)=>{

	let idToken;

	if(request.headers.authorization && request.headers.authorization.startsWith('Bearer ')){

		idToken=request.headers.authorization.split('Bearer ')[1]

	}else{

		console.error('No token created')

		return response.status(403).json({error:'Unauthorized'})

	}

	admin.auth().verifyIdToken(idToken)
	.then( decodedToken =>{

		request.user=decodedToken

		console.log(decodedToken)

		return db.collection('users').where('userId','==',request.user.uid).limit(1).get()

	}).then(data=>{


		request.user.handle=data.docs[0].data().handle;


		return next()
	
	}).catch(err=>{

		console.error('Error While Verifying token',err)

		return response.status(403).json(err)


	})
}



app.post('/screams',FBAuth,(request,response)=>{

	if(request.body.scream.trim()===''){
		return response.status(400).json({body:'Body Must Not be Empty'})
	}


	const newScream={

		scream:request.body.scream,
		userHandle:request.user.handle,
		createdAt:admin.firestore.Timestamp.fromDate(new Date())
	}

	db.collection('screams')
	.add(newScream)
	.then(doc=>{ response.json({message:` document ${doc.id} created successfully`}) ;})

	.catch(err=>{ response.status(500).json({error:'something went wrong'});

		console.error(err)
	})

})


const isEmpty=(string)=>{

	if(string.trim()==='') return true

	else return false

}

const isEmail=(email)=>{

		const regex="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";

		if(email.match(regex)) return true

		return false	

	}


app.post('/signup',(request,response)=>{

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

	}).


	catch(err=>{
		
		console.error(err)

		if(err.code!=='auth/email-already-in-us'){
			return response.status(400).json({ email:'Email is already in use' })
		}else{

		return response.status(500).json({error:err.code});
        
        }

	})

})


app.post('/login',(request,response)=>{

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


})



// exports.helloWorld = functions.https.onRequest((request, response) => {
//   response.send("Hello from Firebase!");
// });


// exports.getScreams=functions.https.onRequest((request,response)=>{

// 	admin.firestore().collection('screams').get().then(data=>{

// 		let screams=[]

// 		data.forEach(doc=>{
// 			screams.push(doc.data())
// 		})


// 		return response.json(screams)




// 	}).catch(err=>console.err(err))


// })

// exports.createScreams=functions.https.onRequest((request,response)=>{


// 	if(request.method!=='POST'){
// 		return response.status(400).json({method:'Method not allowed'})
// 	}


// 	const newScream={

// 		scream:request.body.scream,
// 		userHandle:request.body.userHandle,
// 		createdAt:admin.firestore.Timestamp.fromDate(new Date())
// 	}


// 	admin.firestore()
// 	.collection('screams')
// 	.add(newScream)
// 	.then(doc=>{ response.json({message:` document ${doc.id} created successfully`}) ;})

// 	.catch(err=>{ response.status(500).json({error:'something went wrong'});

// 		console.error(err)
// 	})

// })

  exports.api=functions.region('asia-south1').https.onRequest(app)




