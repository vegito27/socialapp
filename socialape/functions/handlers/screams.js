const {db,admin}=require('../util/admin')


exports.getAllScreams=(request,response)=>{
	db
	.collection('screams')
	.orderBy('createdAt','desc')
	.get()
	.then(data=>{
		let screams=[]

		console.log(data)

		data.forEach((doc)=>{

			screams.push({

				    screamId:doc.id,
					scream:doc.data().scream,
					userHandle:doc.data().userHandle,
					createdAt:new Date().toISOString(),
					userImage:doc.data().userImage, 
					commentCount:doc.data().commentCount,
					likeCount:doc.data().likeCount
			
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

		return response.status(400).json({comment:'Body Must Not be Empty'})

	}

	const newScream={

		scream:request.body.scream,
		userHandle:request.user.handle,
		createdAt:admin.firestore.Timestamp.fromDate(new Date()),
		userImage:request.user.imageUrl,
		commentCount:0,
		likeCount:0
	}

	db
	.collection('screams')
	.add(newScream)
	.then(doc=>{ 

		const resScream=newScream

		resScream.screamId=doc.id;

		return response.json(resScream) 


	;})

	.catch(err=>{ 
		response.status(500).json({error:'something went wrong'});

		console.error(err)
	})

}



exports.getScreams=(request,response)=>{

	let screamData={}

	db.doc(`/screams/${request.params.screamId}`).get()
	.then(doc=>{

		if(!doc.exists){
			return response.status(400).json({error:"scream not found"}) 
		}

		screamData=doc.data()

		screamData.screamId=request.params.screamId


		return db.collection('comments').orderBy('createdAt','desc').where('screamId', '==',request.params.screamId).get()

	})
	.then(data=>{

		screamData.comments=[]

		data.forEach(doc=>{

			screamData.comments.push(doc.data())
		})

		return response.json(screamData)

	})
	.catch(err=>{

		console.error(err)

		return response.status(500).json({error:err.code})
      })
    }


//comments on scream


exports.commentOnScream=(request,response)=>{

	if(request.body.scream.trim()==='') return response.status(400).json({error:'Comment must not be empty'})

		console.log(request.user)


	const newComment={

		scream:request.body.scream,

		createdAt:new Date().toISOString(),

		screamId:request.params.screamId,

		userHandle:request.user.handle,

		userImage:request.user.imageUrl

	}	

	console.log(newComment)

	db.doc(`/screams/${request.params.screamId}`).get()

	.then( doc=>{

		console.log(doc.data())

		if(!doc.exists){

			return response.status(404).json({error:"Scream not found"})
		}

		return doc.ref.update({commentCount:doc.data().commentCount+1})

	})
	.then(()=>{

		 return db.collection('comments').add(newComment)
	})

	.then(()=>{

	    return response.json(newComment)

	}).catch(err=>{

		console.error(err)

		return response.status(500).json({error:"Something went Wrong"})

	})

}

exports.likeScream=(request,response)=>{

	const likeDocument=db
	.collection('likes')
	.where('userHandle','==',request.user.handle)
	.where('screamId','==',request.params.screamId)

	const screamDocument=db.doc(`/screams/${request.params.screamId}`)

	let screamData={};


	screamDocument.get()
	.then((doc)=>{

		if(doc.exists){

			screamData=doc.data()

			screamData.screamId=doc.id

			return likeDocument.get()
		}
		else{

			return response.status(404).json({error:'Scream not found'})

		}
	}).then(data=>{


		if(data.empty){

			return db.collection('likes').add({

				screamId:screamData.screamId,
				userHandle:request.user.handle

			})
			.then(()=>{

				screamData.likeCount++;

				return screamDocument.update({likeCount:screamData.likeCount})

			}).then(()=>{

				return response.json(screamData)

			})

		}
		else{

			return response.status(400).json({error:'Scream already liked'})
		}

	}).catch(err=>{

		console.error(err)

		response.status(500).json({error : err.code})

	})

}


exports.unlikeScream=(request,response)=>{

	const likeDocument=db
	.collection('likes')
	.where('userHandle','==',request.user.handle)
	.where('screamId','==',request.params.screamId)
	.limit(1)

	const screamDocument=db.doc(`/screams/${request.params.screamId}`)

	let screamData;

	screamDocument
	.get()
	.then((doc)=>{

		if(doc.exists){

			screamData=doc.data()
			screamData.screamId=doc.id

			return likeDocument.get();

		}else{

			return response.status(404).json({error:'scream not found'})

		}
	}).then(data=>{

		if(data.empty){

			return response.status(400).json({error:'Scream not liked'})

		}else{

			return db.doc(`/likes/${data.docs[0].id}`)
			.delete()
			.then(()=>{

				screamData.likeCount--;

				return screamDocument.update({ likeCount:screamData.likeCount }) 
			})
			.then(()=>{

			return response.json(screamData)

			})
		}

	}).catch(err=>{

		console.error(err)

		response.status(500).json({error : err.code})

	})
}

exports.deleteScream=(request,response)=>{

	const docs=db.doc(`/screams/${request.params.screamId}`);

	docs
	.get()
	.then(doc=>{

		if(!doc.exists){
			return response.status(404).json({error:"Scream not found"});

		}else if(doc.data().userHandle !== request.user.handle){

			return response.status(403).json({error:"Unauthorized"})
		
		}else{

			return docs.delete()

		}

	})
	.then(()=>{

		return response.json({message:"Scream deleted Successfully"})
	
	})
	.catch(err=>{
		console.error(err)
		return response.status(500).json({error:err.code}) 
	})

}





