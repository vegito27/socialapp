import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import {Link} from 'react-router-dom'
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux'
import {UnlikeScream,likeScream} from '../redux/actions/dataActions'
import PropTypes from 'prop-types'
import MyButton from '../util/MyButton'
import ChatIcon from '@material-ui/icons/Chat'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import DeleteScream from '../components/DeleteScream'
import ScreamDialog from './ScreamDialog'


const styles={

	card:{
		display:'flex',
		marginBottom:20
	},
	image:{
		minWidth:200,

	},
	content:{
		padding:25,
		objectFit:'cover'
	}

}


class Scream extends  React.Component {

	
	likedScream=()=>{

		if(this.props.user.likes && this.props.user.likes.find(like=>like.screamId===this.props.scream.screamId)) return true

		else return false	
	}
    
    likeScream=()=>{
    	this.props.likeScream(this.props.scream.screamId)

    }

    unlikeScream=()=>{
    	this.props.UnlikeScream(this.props.scream.screamId)

    }

    
	render(){


		dayjs.extend(relativeTime)

		const { classes,scream:{commentCount,createdAt,likeCount,scream,screamId,userHandle,userImage},user:{authenticated,credentials:{handle } } } = this.props;

    	const deleteButton=authenticated && userHandle===handle ?(<DeleteScream screamId={screamId} />):null 

    	const likeButton=!authenticated ? 
                       (
                     
				    	<MyButton tip="like">
				    	  	<Link to="/login">
					    	
						    	<FavoriteBorder color="primary"/>
						    	</Link> 
					    	
				    	</MyButton> 
				    	):

				    ( this.likedScream() ?
				        (
					    	<MyButton tip="Undo like" onClick={this.unlikeScream} >
						    	<FavoriteIcon color="primary" />
					    	</MyButton> ):

    		            (

							<MyButton tip="Like" onClick={this.likeScream} >
						    	<FavoriteBorder color="primary" />
							</MyButton>)

		    	        )

		  return (
		    <div>
			    <Card className={this.props.classes.card}>
			     <CardMedia image={this.props.scream.userImage} title="Profile image" className={this.props.classes.image}/>
			        <CardContent className={this.props.classes.content}> 
			            <Typography variant="h5" component={Link} to={`/users/${this.props.scream.userHandle}`} color="primary">{this.props.scream.userHandle}</Typography>
			            {deleteButton}
			            <Typography variant="body2" color="textSecondary">{dayjs(createdAt).fromNow()} </Typography>
			            <Typography variant="body1">{this.props.scream.scream}</Typography>

			           {likeButton}

			            <span>{likeCount} Likes</span>

			            <MyButton tip="Comments">
				            <ChatIcon color="primary"/>
			            </MyButton>

			            <span>{commentCount}</span>

			            <ScreamDialog screamId={screamId} userHandle={userHandle} />
			           
			        </CardContent>
			    </Card>
		    </div>
		  )

	}
}


Scream.propTypes={

	likeScream:PropTypes.func.isRequired,
	UnlikeScream:PropTypes.func.isRequired,
	scream:PropTypes.object.isRequired,
	classes:PropTypes.object.isRequired,
	user: PropTypes.object.isRequired
}

const mapStateToProps=state=>({

	user:state.user

})


const mapActionsToProps={
	likeScream,
	UnlikeScream
}


export default connect(mapStateToProps,mapActionsToProps)(withStyles(styles)(Scream));



