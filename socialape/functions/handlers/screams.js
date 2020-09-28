
const admin=require('firebase-admin')

const db=admin.firestore()

exports.getAllScreams=(request,response)=>{
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
					createdAt:new Date().toISOString(),
					// commentCount:doc.data().commentCount,
					// likeCount:doc.data().likeCount
			})

		})

		return response.json(screams);

	}).
	catch(err=>{

		console.error(err)
		response.status(500).json({error:err.code})

	})
 }



exports.postOneScream=(request,response)=>{

	if(request.body.scream.trim()===''){

		return response.status(400).json({body:'Body Must Not be Empty'})

	}

	const newScream={

		scream:request.body.scream,
		userHandle:request.user.handle,
		createdAt:admin.firestore.Timestamp.fromDate(new Date()),
		// commentCount:doc.data().commentCount,
		// likeCount:doc.data().likeCount
	}

	db.collection('screams')
	.add(newScream)
	.then(doc=>{ response.json({message:` document ${doc.id} created successfully`}) ;})

	.catch(err=>{ response.status(500).json({error:'something went wrong'});

		console.error(err)
	})

}