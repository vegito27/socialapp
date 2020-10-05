import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import icon from '../images/icon.png'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import axios from 'axios'
import {Link} from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'
import {connect} from 'react-redux'
import {loginUser} from '../redux/actions/userActions'
 

const styles={

	form:{
		textAlign:'center',
		width:"40%",
		margin:"auto"
	},

	image:{
		margin:'20px auto 20px auto'
	},
	pageTitle:{

		margin:'10px auto 10px auto'
	}
	,textField:{

		margin:'10px auto 10px auto'
	},
	button:{
		margin:'20px',
		position:'relative'
	},
	customError:{
		color:'red',
		fontSize:'0.8rem',
		marginTop:10
	},
	progress:{
		position:'absolute'
	}


}

 class Login extends React.Component {

 	constructor(){
 		super();

 		this.state={
 			email:'',
 			password:'',
 			errors:{}
 		}

 	}

 	componentWillReceiveProps(nextProps){


 		if(nextProps.UI.errors){

 		    this.setState({errors:nextProps.UI.errors})

        }
 	}


 	handleSubmit=(event)=>{

 		event.preventDefault()


 		const userData={
 			email:this.state.email,
 			password:this.state.password
 		}

 		this.props.loginUser(userData,this.props.history)


 	}


 	handleChange=(event)=>{


 		this.setState({

 			 [event.target.name]:event.target.value
 		})
 	}



	render() {
        
        const {classes,UI:{loading} }=this.props

        const {errors}=this.state


		return (
			<Grid container className={classes.form}>
		
			<Grid item sm>
			    <img src={icon} alt="monkey image" className={classes.image}/>

			    <Typography variant="h4" className={classes.pageTitle}>Login</Typography>
			    
			    <form noValidate onSubmit={this.handleSubmit} >
			        
			        <TextField id="email" name="email" type="email" label="Email" helperText={errors.email} error={errors.email? true :false}
			        
			        className={classes.textField} value={this.state.email} onChange={this.handleChange} fullWidth /> 
			        
			        <TextField id="password" name="password" type="password" label="Password" helperText={errors.password} error={errors.password ? true :false}
			         
			        className={classes.textField} value={this.state.password} onChange={this.handleChange} fullWidth /> 


			        {errors.general && (<Typography variant="body2" className={classes.customError}>{errors.general}</Typography>)}

			        <Button type="submit" variant="contained" value="Submit" disabled={loading} color="primary" className={classes.button}>Login {loading && <CircularProgress size={20} className={classes.progress} />}</Button>
			        <br />

			        <small>Don't Have an account sign up ?<Link to="/signup">here</Link></small>

			    </form>
			
			</Grid>


			</Grid>
		);
	}
}

Login.propTypes={

	classes:PropTypes.object.isRequired,
	loginUser:PropTypes.func.isRequired,
	user:PropTypes.object.isRequired,
	UI:PropTypes.object.isRequired
};


const mapStateToProps=(state)=>({

 	user:state.user,
 	UI:state.UI
 })


const mapActionsToProps={

 	loginUser

}


export default connect(mapStateToProps,mapActionsToProps)(withStyles(styles)(Login));




