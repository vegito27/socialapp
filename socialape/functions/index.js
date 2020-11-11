const functions = require('firebase-functions');

const admin=require('firebase-admin')

const serviceAccount = {

  "type": "service_account",
  "project_id": "socialape-e3733",
  "private_key_id": "cc12d629deea0ce7c46ec1e71da5e7cc9989a147",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCLTS4SaxAIfhxg\nYSUS1cmIw10A/SHH29PvN4bJmBAvBch0fZ2lmsUP+0Tqa1tVmuMUWjh8xjID3IxM\nD7tdZKXQ3tBSlMT/SbOBwhz/rw+S9CUys+4h2VM67w9/TFf+eoIc0/P2nghO8WgD\nd95D0vn72U0IVOTZQqCh4p38jpadm8HuAQtWWSf8U9jb75xRm4xiyufpcJHrGrSN\nYj7vKP9JHALR49R2Drazo9Sg9OAJwpPpH/AKB8BQhosu9il/Ix/ePbwUGcKoK4A4\nkST42L5ZIiL400A3JEdwTsrUXsmAI1sV4U6tm140atEiHwDmnGPwag3kkzoqeNST\nhnJAeYABAgMBAAECggEAE2XN8paiBuy4utsMNJE8nSTHQKn/GDuOSZNr24qnRkUB\n4ubTGwpwQod000fb0hHdaSofD5DxygPeLYFLT/gB9xHv5G/+9qWmr3z+WMRh4M7K\nl0Li+CexJVXAzLMu1artj2IcaM0czxFisIjylHM+iEl8Jprbuz1B7QkHgvHAG3Yu\nc/euh2GWhLTiGyrIn9hXDlvsgtC2YNfnKRF0w6nopi2zcAi7Y59sCpD8xVuty+Tr\nGgQuhD6CDCyAn1UhjMb53TCHhk4TENLg7M/OqqmELWOieTC+l7bDgS3HB10gr6f2\nW4yicK6fgsIuaFJscUDxosqvK2GNvNgfGlfnvXghIQKBgQC/gUILgzVS9atgGKep\nIUL5DvMUcQR3dJ70R4YvaaxemKUEDHid4xs0W/yjFhUtIhtKXI5+zsqPSun6xRxC\nyinapxWIWvOLMqyPAtXMHSSrZe2vZwzAJ+J6iqUfk9Zj+2YX9G3rr0Mu7pG8B97r\n6PMpnYxZozXrTXC9gAqLZ/KizQKBgQC6NyncyVGPK0EbPKn38KQ717b7K8ArQA4f\n9UccVnQI+7CRbtiv6nMnZiewYfY4VLLREZwH6c3fw9fJea3kL1IQat+Vi1Ly4BgO\nOVumNjFxEPHqp2Wr+cmXtnGdpJ3wWkA1D/mHwq07aJWrY7j2peBaQQQi1VhW7l8b\nqd55IAGaBQKBgC7nBnjxWrcFykJP54hJyDBdk/VWtMRZALFNbzTficLlWc0DDOuG\netw5B0geGXOjXdG5l4DBPuUXcPTlH8XP465Uq7ZoqCtYbuDbzece4CNGZI9ICtxp\nKFPg7w4r1B9KrDeDuwQ1OZwd+/10ZAmdVSjFGGG/0m3d2pXe7TY1cDylAoGAdxlp\nEOlB3MvRbFY0b3vdzth9E9A7rG3fmtkJjjpNJKG1oI7A0GKnG//eSpWdIRIq/ETD\nAtyq6/8aOKY2bcdGOXHhZoghmW1ydUaCM6Bdpu8riuVdxcyQ/xOVPzpWOa+/eTCq\nbAY7Pc/6ShAR8M7O22rR9mV1hsQW2F6hB99MpvECgYEAhNaMFyu7uyipykxEbpgB\njw3FUBrX1DeEk4pTN++lZnN9l/0pcU8daQDGoDp3OrobLLwrexYC0HvdWQSS56RD\neQKyTU/RjCz5JlAGR8rluvZAe41uMDOvwstyP3D54yH93j7pDNvPOCPD3awuZTdm\nlI4DH56rae5Jjs4mjmZlKKo=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-zef08@socialape-e3733.iam.gserviceaccount.com",
  "client_id": "111407657155923853996",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-zef08%40socialape-e3733.iam.gserviceaccount.com"
}

admin.initializeApp({
 
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://socialape-e3733.firebaseio.com"

});

const cors =require('cors')

const express=require('express')

const app=express()

app.use(cors())

const db=admin.firestore()

const { getAllScreams,postOneScream,getScreams,commentOnScream,likeScream,unlikeScream,deleteScream } = require('./handlers/screams')

const { login,signup,uploadImage,addUserDetails,getAuthenticatedUser,getUserDetails,marknotificationsRead } =require('./handlers/users')

const {isEmpty,isEmail,FBAuth } = require('./handlers/auth')

app.get('/screams',getAllScreams)

app.post('/scream',FBAuth,postOneScream)

app.get('/scream/:screamId',getScreams)

app.get('/scream/:screamId/like',FBAuth,likeScream)

app.get('/scream/:screamId/unlike',FBAuth,unlikeScream)

app.post('/scream/:screamId/comment',FBAuth,commentOnScream)

app.delete('/scream/:screamId/',FBAuth,deleteScream)

app.post('/login',login)

app.post('/signup',signup)

app.post('/user/image',FBAuth,uploadImage)

app.post('/user',FBAuth,addUserDetails)

app.get('/user',FBAuth,getAuthenticatedUser)

app.get('/user/:userHandle',getUserDetails)

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

		console.log("error in like notifications",err)
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

		return db
		.collection('screams')
		.where('userHandle','==',change.before.data().handle)
		.get()
		.then(data=>{

			data.forEach(doc=>{

				const scream=db.doc(`/screams/${doc.id}`)

				batch.update(scream,{userImage:change.after.date().imageUrl})

			})

			return batch.commit();

		})
		.catch(error => {
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

