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

app.post('/screams',(request,response)=>{

	const newScream={

		scream:request.body.scream,
		userHandle:request.body.userHandle,
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



app.post('/signup',(request,response)=>{

	const newUser={
		email:request.body.email,
		password:request.body.password,
		confirmPassword:request.body.confirmPassword,
		handle:request.body.handle

	}

	let errors


	const isEmail=(email)=>{

		const regex='^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9](?:[A-Z0-9-]{0,62}[A-Z0-9])?\.){1,8}[A-Z]{2,63}$'

		if(email.match(regex)) return true

		else return false	

	}


	if(isEmpty(newUser.email)){

		errors.email='Email must not be empty'

	}else if(!isEmail(newUser.email)){

		errors.email='must be a valid email address'

	} 

	if(isEmpty(newUser.password))errors.password="Must not be empty" 

	if(newUser.password !== newUser.confirmPassword) errors.confirmPassword=" Passwords must match"	


	

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




