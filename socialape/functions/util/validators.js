exports.isEmpty=(string)=>{

	if(string.trim()==='') return true

	else return false

}

exports.isEmail=(email)=>{

		const regex="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";

		if(email.match(regex)) return true

		return false	

}

exports.validateSignupData=(data)=>{

	let errors={}

	if(isEmpty(data.email)){

		errors.email='Email must not be empty'

	}else if(!isEmail(data.email)){

		errors.email='must be a valid email address'

	}
 
	if(isEmpty(data.password))errors.password="Must not be empty" 

	if(data.password !== data.confirmPassword) errors.confirmPassword=" Passwords must match"	

	if(isEmpty(data.handle)) errors.handle="Must not be empty"
	

	return {
		errors,
		valid:Object.keys(errors).length === 0 ? true:false
	}	

}


exports.validateLoginData=(data)=>{

	let errors={}

	if(isEmpty(data.email)) errors.email="Must not be empty"

	if(isEmpty(data.password)) errors.password="Password must not be empty"

	return {
		errors,
		valid:Object.keys(errors).length === 0 ? true:false
	}	

}







// module.exports={validateSignupData,isEmail,isEmpty}