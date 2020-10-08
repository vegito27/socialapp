const express=require('express')

const router=express.Router()

const modelObj=require('../models/modelObject')

router.get('/',async (request,response)=>{


	try{

		const obj=await modelObj.find()

		response.json(obj)

	}catch(err){

		response.send('Error '+err)
	}

	response.send('Get Request')
 })



router.get('/:id',async (request,response)=>{


	try{

		const obj=await modelObj.findById(request.params.id)

		response.json(obj)

	}catch(err){

		response.send('Error '+err)
	}

	response.send('Get Request')
 })


router.post('/',async (request,response)=>{

	const obj=new modelObj({

		name:request.body.name,
		tech:request.body.tech,
		sub:request.body.sub

	})

	try{

		const o1 = await obj.save()

		response.json(o1)


	}catch(err){

		response.send('Error '+err) 

	}
})


router.patch('/:id',async(request,response)=>{


	try{

		const obj=await modelObj.findById(request.params.id)

		obj.sub=request.body.sub

		const o1 =await obj.save()

		response.json(o1)


	}catch(err){

		response.send()



	}

})











module.exports=router