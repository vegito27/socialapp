import React from 'react';
import MyButton from '../util/MyButton'
import {Link} from 'react-router-dom'
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { connect } from "react-redux";
import { likeScream, UnlikeScream } from "../redux/actions/dataActions";
import PropTypes from 'prop-types'

 class LikeButton extends React.PureComponent {
	
     likedScream=()=>{

		if(this.props.user.likes && this.props.user.likes.find(like=>like.screamId===this.props.screamId)) return true

		else return false	
	}
    
    likeScream=()=>{
    	this.props.likeScream(this.props.screamId)

    }

    unlikeScream=()=>{
    	this.props.UnlikeScream(this.props.screamId)

    }

	render() {

		console.log(this.likedScream())

		const {authenticated}=this.props 

		const likeButton=!authenticated ? 
                       (
                       	<Link to="/login">
				    	<MyButton tip="like">
					    	
						    	<FavoriteBorder color="primary"/>
					    	
				    	</MyButton> 
				    	</Link>):

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
		    
		    return (likeButton);
	}
}


LikeButton.propTypes = {
  user: PropTypes.object.isRequired,
  likeScream: PropTypes.func.isRequired,
  UnlikeScream: PropTypes.func.isRequired,
  screamId: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

const mapActionsToProps = {
  likeScream,
  UnlikeScream
};

export default connect(mapStateToProps,mapActionsToProps)(LikeButton);
