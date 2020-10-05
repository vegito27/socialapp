import React,{Fragment} from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import {connect} from 'react-redux'
import MuiLink from '@material-ui/core/Link'
import {Link} from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import LocationOn from '@material-ui/icons/LocationOn'
import LinkIcon from '@material-ui/icons/Link'
import CalendarToday  from '@material-ui/icons/CalendarToday'
import dayjs from 'dayjs'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import Tooltip from '@material-ui/core/Tooltip'
import {logoutUser,uploadImage } from '../redux/actions/userActions'


const styles = {
  paper: {
  	paddingTop:10,
    paddingBottom:0,
    marginLeft:30,
    width:350 
  },
  profile: {
    "& .image-wrapper": {
      textAlign: "center",
      position: "relative",
      "& button": {
        position: "absolute",
        top: "80%",
        left: "70%"
      }
    },
    "& .profile-image": {
      width: 160,
      height: 160,
      objectFit: "cover",
      maxWidth: "90%",
      borderRadius: "50%"
    },
    "& .profile-details": {
      textAlign: "center",
      "& span, svg": {
        verticalAlign: "middle"
      },
      "& a": {
        color: "primary"
      }
    },
    "& hr": {
      border: "none",
      margin: "0 0 10px 0"
    },
    "& svg.button": {
      "&:hover": {
        cursor: "pointer"
      }
    }
  },
  buttons: {
    textAlign: "center",
    "& a": {
      margin: "20px 10px"
    }
  }
};



class Profile extends React.Component {

	constructor(props) {
		super(props);
	}


	handleImageChange=(event)=>{

		const image=event.target.files[0]

		const formData=new FormData()

		 formData.append('image',image,image.name)

		 this.props.uploadImage(formData)

	}

	handleEditPicture=()=>{


		const fileInput=document.getElementById('imageInput')

		fileInput.click()

	}





	render() {
		console.log(this.props)



		const { classes,user:{credentials:{ handle,createdAt,imageUrl,bio,website,location },loading ,authenticated } }=this.props

		let profileMarkup=!loading?(authenticated ? 

			(
			<Paper className={classes.paper} >
			    <div className={classes.profile}>
			        <div className="image-wrapper">
			            <img src={imageUrl} className="profile-image" alt="profile" />
			            <input type="file" id="imageInput" hidden="hidden" onChange={this.handleImageChange}/>

			            <Tooltip title="Edit profile picture" placement="top">

			                <IconButton onClick={this.handleEditPicture} className="button" >
			                    <EditIcon color="primary" />
			                </IconButton>

			            </Tooltip>
			            
			        </div>
			         <hr />
			        <div className="profile-details">
			        <MuiLink component={Link} to={`/users/${handle}`} color="primary" variant="h5">
			            @{handle}
			        </MuiLink>
			        <hr />

			        {bio && <Typography variant="body2" >{bio}</Typography>}

			        <hr />

			        {location &&( 

			        	<Fragment>
			        	
			        	    <LocationOn color="primary" /><span>{location}</span> <hr / >

			        	</Fragment>

			        	)}

			        	{website && (

			        		<Fragment>
			        		<LinkIcon color="primary" />
			        		<a href={website} target="_blank" rel="noopener noreferrer" >
			        		{' '}{website} 

			        		</a>

			        		<hr / >


			        		</Fragment>
			        		)}


			        	<CalendarToday color="primary" />{' '}<span>Joined {dayjs(createdAt).format('MMM YYYY ')  }</span>	

			        </div>


			    </div>


			</Paper>

			):(

			<Paper className={classes.paper}>

			<Typography variant="body2" align="center">No Profile Found,please Login again</Typography>

			<div className={classes.buttons}>

			<Button variant="contained" color="primary" component={Link} to="/login">Login</Button>

			<Button variant="contained" color="secondary" component={Link} to="/signup">SignUp</Button>


			</div>

			</Paper>



			)) :(<p>..Loading</p>)


		return profileMarkup;
	}
}

const mapStateToProps=state=>({

	user:state.user

})

const mapActionsToProps={logoutUser,uploadImage}




Profile.propTypes={
	logoutUser:PropTypes.func.isRequired,
	uploadImage:PropTypes.func.isRequired,
	user:PropTypes.object.isRequired,
	classes:PropTypes.object.isRequired 

}


export default connect(mapStateToProps,mapActionsToProps)(withStyles(styles)(Profile))
