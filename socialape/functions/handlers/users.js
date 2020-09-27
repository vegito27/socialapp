

const admin=require('firebase-admin')

const db=admin.firestore()


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






















