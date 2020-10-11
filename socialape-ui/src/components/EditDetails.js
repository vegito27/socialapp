import React,{Component,Fragment} from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import {connect} from 'react-redux'
import { editUserDetails } from '../redux/actions/userActions'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit'
import MyButton from '../util/MyButton'



const styles = {
	dialog:{
	textAlign:"center"
	},
  button: {
    float: "left"
  },
  cbutton:{
  	float:"left"
  },
  textField: {
    margin:"auto",
    textAlign:"center"
  }
};

class EditDetails extends Component{

	state={
		bio:'',
		website:'',
		location:'',
		open:false
	}

	mapUserDetailsToState=(credentials)=>{

		this.setState({

			bio:credentials.bio ?  credentials.bio:'',
			website:credentials.website ?  credentials.website:'',
			location:credentials.location ?  credentials.location:''
		})
	}


	handleOpen=()=>{

		this.setState({open:true});

		this.mapUserDetailsToState(this.props.credentials) 
	}

	handleClose=()=>{

		this.setState({open:false});

	}

	componentDidMount(){

		const {credentials }=this.props

		this.mapUserDetailsToState(credentials)

		
	}

	handleChange=(event)=>{

		this.setState({

			[event.target.name]:event.target.value

		})
	}


	handleSubmit=()=>{

		const userDetails={
			bio:this.state.bio,
			website:this.state.website,
			location:this.state.location
		};

		this.props.editUserDetails(userDetails);

		this.handleClose();

	}

	render(){

		const {classes} = this.props;


		return (

			<Fragment>

			<MyButton tip="Edit Details" onClick={this.handleOpen} btnClasssName={classes.button} >
				<EditIcon color="primary" />
			</MyButton>

			<Dialog 
			    open={this.state.open}
			    onClose={this.handleClose}
			    fullWidth
			    maxWidth="sm" >

			    <DialogTitle>Edit your Details</DialogTitle>

			    <DialogContent className={classes.dialog}>

				    <form >
					    <TextField name="bio" label="Bio" 
						    type="text" multiline rows="3"  
						    placeholder="A short bio about yourself" className={classes.textField} 
						    value={this.state.bio}
							onChange={this.handleChange}
					    
				    />

					    <TextField name="website" label="Website" 
							    type="text" multiline rows="3"  
							    placeholder="Your personal or professional website" className={classes.textField} 
							    value={this.state.website}
							    onChange={this.handleChange}
					    
					    />

					     <TextField
							    name="location" label="Location" 
							    type="text" multiline rows="3"  
							    placeholder="Where you live" className={classes.textField} 
							    value={this.state.location}
							    onChange={this.handleChange}
					    
					    />

				    </form>

			    </DialogContent>

			    <DialogActions>

				    <Button onClick={this.handleClose} color="primary" className={classes.cbutton}>Close</Button>

	                <Button onClick={this.handleSubmit} color="primary" className={classes.sbutton}>Save</Button>

			    </DialogActions>


			    </Dialog>


			</Fragment>



			)

	}
}

const mapStateToProps = state => ({
  credentials: state.user.credentials
});
const mapActionsToProps = { editUserDetails };

EditDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  editUserDetails: PropTypes.func.isRequired
};


export default connect(mapStateToProps, {editUserDetails})(withStyles(styles)(EditDetails)); 




