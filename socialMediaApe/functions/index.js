const functions = require('firebase-functions');

var admin = require("firebase-admin");

const firebase =require('firebase')

const serviceAccount={
  "type": "service_account",
  "project_id": "apiproject-272406",
  "private_key_id": "e1f984de8cc72c990a596aab5ec50cd46c1fd452",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDAofWhuLoT+YlX\nSk35vVW5pF/fhYCMdCpDcikJ8Q+P5xWNXzfxJSwAQwaLtV1yMa8RwsbRQUIncwsF\nJRZ4Hcr6+gWmFsvdBsnNV5hvQ1RrixX5r24MzUEjn7qpH1rb2M0gIgzeYIFj7LvD\n2urTY0Q8A0aZ5z+XoECFUkM24BrC5/sQL01IVnlKzMmATbbUbUrw0copOmCZdulN\nx/ofrVM4L4YgmPUB2AOMjLgBuCz/kRxK9mtQdRfU5mNOlIQM4HJqJZXo8vGyg9B1\nqDYUU04EwqRbK4Q/3w1hL0kOV9tAo/JGDQh2J1OYw2UI/An5WC96FfOrzayAq4Rc\n4pv7eUOzAgMBAAECggEAHiS57+vyN6dNazrAvPB4dlZXJ6kXwTgkV5gzp89FuiT/\nuwxIEBTbBSd34hYoC0iPDAkeB3yzbMI/L+I/2TKq+AnL0dOwubjoN0PFIhQNJSRc\nn00TvC5vn7LNCM3+mncbPN4B2YKMfNB8tAc7xocQFGaxfj/biaSVXsd3+8xRzmct\nKxHXOPkqBd4oxqAZ5k2mjql2HQdleqBxWYONSe4b0xBq9OJlAx1qaUk8Hczm/Hei\n9qaTrexlnvyxBDtru9/x945jZL8dcLd7FyhoxVQLBvXlmEorojxGT6hyDcxYIFke\nM6qknaPSVlQ7DX48CNnHGMJEhcRROHyCdf1mhiESkQKBgQDm1CI2wOc2TBw1lzU+\nI8Bi05KMrvJQA1m7vN4o8/r+51Sj9MurOFDMJjAn1wo49MpyGF4TgE2XqSnPZRyi\n7MH7LFrjkdVPIwLxk3sJtyhywg9TrYcMJsWCl2+bWi1pP5RYlOWD0qy89yNhlUuL\nAo0Mbp9j0pHoyZmoW3PhleC/PwKBgQDVo4mgpuC7ycf1wtS59zKeSJ1uAmgWZM5y\nTC1USYzf+jZHiWlKYcXZ45U6ANEUvgI9Z0LUWPKTG56fXyoYwoAj4PBIhTekMhZA\ndGuD2yzPs+hntLASAedJfM/LgMhk34ewq9ubqeiGPEd+rJ87zdwHko9gRNnvsiJH\nHbXXlOKSjQKBgBJScEzMTw3+SJbwY6eFCvZNOOq10EINogfG3BOAGkI1doB1I915\nYOBzf4sKBKO0uoUH7h+6JW6OXOU7b2R3SoZ3ZNd/ceEQNGGchT2mLi29vZ20vm12\nfmL5RkCcjdI2272URAuMo210aHiMcyybjTqZZUl1I2PI7MtyRuZ3ERndAoGAP0Q+\n7aR9yR7oaI9aD/h0tQssE/gCex8/Q/nrMprVbT7b9DNtSunJfc031AWJ5Wqfny+F\nSv1MWORFBU1ZWhu/duCWR+OrpqRukofnjxTJIHlWyd9ohOyrYcfkgY+RyM2pkVhT\noLWgdqBDS/Ay97LvBg8RBqFdKO7H1+ekgkNFFcECgYAvWXOjA98jNNCoEa/gY0Ct\nigVMgz7ycu5Noo0Y1eJQ1KQN6egW8Q9dk7ixINEiOmuBjuuDnQh6ou19G08FKPK1\nnG/AevdT78ireVt9Zz5IT677cvtoRZQFsVYx71iE83703d/aGWHHLxmg5q/zA5SF\nIdfM86S5OvZQnqMqG+FZmg==\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-sum5s@apiproject-272406.iam.gserviceaccount.com",
  "client_id": "108243542118916258296",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "clie nt_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-sum5s%40apiproject-272406.iam.gserviceaccount.com"
}


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://apiproject-272406.firebaseio.com"
});


 var firebaseConfig = {
    apiKey: "AIzaSyBRumfgKnEHzLDwCsSc8Wq5u85fTuEs-rw",
    authDomain: "apiproject-272406.firebaseapp.com",
    databaseURL: "https://apiproject-272406.firebaseio.com",
    projectId: "apiproject-272406",
    storageBucket: "apiproject-272406.appspot.com",
    messagingSenderId: "258883845085",
    appId: "1:258883845085:web:f0314c371b891ea3361434"
  };


	firebase.initializeApp(firebaseConfig)

	const cors =require('cors')

	const express=require('express')

	const app=express()

	app.use(cors())

	const db=admin.firestore()

	const { signup,login,addUserDetails,uploadImage,getAuthenticatedUser,getUserDetails,marknotificationsRead} =require('./handlers/users')
	const { getScreams,postOneScream ,getAllScreams,commentOnScream,likeScream,unlikeScream,deleteScream  } = require('./handlers/screams')
	const {isEmpty,isEmail,FBAuth } = require('./handlers/auth')


	app.post('/signup',signup)

	app.post('/login',login)

	app.get('/screams',getAllScreams)

	app.get('/scream/:screamId',getScreams)

	app.post('/scream',FBAuth,postOneScream)

	app.get('/scream/:screamId/like',FBAuth,likeScream)

	app.get('/scream/:screamId/unlike',FBAuth,unlikeScream)

	app.post('/scream/:screamId/comment',FBAuth,commentOnScream)

	app.delete('/scream/:screamId/',FBAuth,deleteScream)

	app.post('/user/image',FBAuth,uploadImage)

	app.post('/user',FBAuth,addUserDetails)

	app.get('/user',FBAuth,getAuthenticatedUser)

	app.post('/scream/:screamId/comment',FBAuth,commentOnScream)

	app.post('/notifications/',FBAuth,marknotificationsRead)

	exports.api=functions.region('asia-south1').https.onRequest(app)



exports.createNotificationOnLikes=functions
.region('asia-south1')
.firestore
.document('likes/{id}')
.onCreate((snapshot)=>{ 

	db.doc(`/screams/${snapshot.data().screamId}`)
	.get()
	.then(doc=>{
	
			return db.doc(`/notifications/${snapshot.id}`).set({

				createdAt:new Date().toISOString(),
				sender:snapshot.data().userHandle,
				recipient:doc.data().userHandle,
				type:'like',
				read:false,
				screamId:doc.id

			})	
		
	})
	.catch(err=>{

		console.log("error in like notification ",err)
	})
})

exports.createNotificationOnComments=functions
.region('asia-south1')
.firestore
.document('comments/{id}')
.onCreate((snapshot)=>{


	db.doc(`/screams/${snapshot.data().screamId}`)
	.get()
	.then(doc=>{

			return db.doc(`/notifications/${snapshot.id}`).set({

				createdAt:new Date().toISOString(),
				sender:snapshot.data().userHandle,
				recipient:doc.data().userHandle,
				type:'comment',
				read:false,
				screamId:doc.id

			}) 
	})
	.catch(err=>{

		console.error(err)
	})

})


exports.deleteNotificationOnUnlike=functions.region('asia-south1')
	.firestore
	.document('likes/{id}')
	.onDelete(snapshot=>{

		db.doc(`/notifications/${snapshot.id}`)
		.delete()
		
		.catch(err=>{
		
			console.error(err)
		
		})

	})

exports.onUserImageChange=functions
.region('asia-south1')
.firestore
.document('/users/{userId}')
.onUpdate(change=>{


	if(change.before.data().imageUrl !== change.after.data().imageUrl){

		console.log('Image has changed')

		const batch=db.batch();

		return db.collection('screams')
			.where('userHandle','==',change.before.data().handle)
			.get()
			.then(data=>{

				data.forEach(doc=>{

					const scream=db.doc(`/screams/${doc.id}`)

					batch.update(scream,{userImage:change.after.date().imageUrl})

				})

				return batch.commit();

			}).catch(error => {

		          console.error("error in onUserImageTrigger", error);
          
	        });
	} else return true

})

exports.onScreamDelete=
functions
.region('asia-south1')
.firestore
.document('/screams/{screamId}')
.onDelete((snapshot,context)=>{

	const screamId=context.params.screamId

	const batch=db.batch()
	
	return db
	.collection('comments')
	.where('screamId','==',screamId)
	.get()
	.then(data=>{

		data.forEach(doc=>{

			batch.delete(db.doc(`/comments/${doc.id}`))

		})

		return db.collection('likes').where('screamId','==',screamId).get()

	})
	.then(data=>{

		data.forEach(doc=>{

			batch.delete(db.doc(`/likes/${doc.id}`))

		})

		return db.collection('notifications').where('screamId','==',screamId).get()
	})
	.then(data=>{

		data.forEach(doc=>{

			batch.delete(db.doc(`/notifications/${doc.id}`))
		})

		return batch.commit()
	}).
	catch(err=>console.error(err))      

}) 



exports.api=functions.region('asia-south1').https.onRequest(app)








