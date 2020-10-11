const {db,admin}=require('../util/admin') 


 exports.isEmpty=(string)=>{

	if(string.trim()==='') return true

	else return false

}

exports.isEmail=(email)=>{

	  const regex="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
	 console.log(regex)


		if(email.match(regex)) return true

		return false	

}


exports.FBAuth=(request,response,next)=>{

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

		// console.log(decodedToken)

		return db.collection('users').where('userId','==',request.user.uid).limit(1).get()

	}).then(data=>{


		request.user.handle=data.docs[0].data().handle;

		request.user.imageUrl=data.docs[0].data().imageUrl


		return next()
	
	}).catch(err=>{

		console.error('Error While Verifying token',err)

		return response.status(403).json(err)

	})
}
