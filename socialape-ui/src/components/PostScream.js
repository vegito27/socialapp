import React,{Component,Fragment} from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit'
import MyButton from '../util/MyButton'
import CircularProgress from '@material-ui/core/CircularProgress'
import {postScream} from '../redux/actions/dataActions'
import AddIcon from '@material-ui/icons/Add'
import CloseIcon from '@material-ui/icons/Close'

import {connect} from 'react-redux'
import { editUserDetails } from '../redux/actions/userActions'

const styles={
textField: {
    marginBottom: "10px"
  },
  submitButton: {
    position: "relative",
    float: "right"
  },
  progress: {
    position: "absolute"
  },
  closeButton: {
    position: "absolute",
    left: "80%",
    top: "6%"
  }
}



class PostScream extends Component{

	constructor(){
		super();

	}

	state={
		open:'',
		scream:'',
		errors:{}
	}

	componentWillReceiveProps(nextProps) {
    //scream posting error like empty body
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
    // scream posted successfuly
    if (!nextProps.UI.errors && !nextProps.UI.loading) {
      this.setState({ scream: "" ,open:false,errors:{}});
      
    }
  }

	handleOpen=()=>{

		this.setState({open:true})
	}

	handleClose=()=>{
		this.setState({open:false,errors:{}})
	}

	handleChange = event => {
	    this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = event => {
	    event.preventDefault()
	    this.props.postScream({ scream: this.state.scream });
	  };

	render(){

		const {errors }=this.state


		const {classes,UI:{loading}}=this.props

		console.log(this.props)

		return (

			<Fragment>
				<MyButton onClick={this.handleOpen} tip="Post a Scream!" >
				
				<AddIcon color="primary" />

				</MyButton>

				<Dialog open={this.state.open} onClose={this.handleClose} maxWidth="lg">

					<MyButton tip="Close" onClick={this.handleClose} tipClassName={classes.closeButton} >
						<CloseIcon />
					</MyButton>

					<DialogTitle>Post a new Scream!</DialogTitle>

					<DialogContent>

						<form onSubmit={this.handleSubmit}>

							 
							<TextField name="scream" type="text" label="add Scream.." multiline rows="2" placeholder="Scream at your fellow apes" className={classes.textField}
								errors={errors.scream ? true:false} helperText={errors.scream} onChange={this.handlechange} fullWidth />

								<Button type="submit" variant="contained" color="primary" className={classes.submitButton} disabled={loading} >
                                
                                    Post { ( loading && <CircularProgress className={classes.progress} size={30} thickness={7} />) }
                                
                                </Button>
						</form>

					</DialogContent>

				</Dialog>

			</Fragment>

		)
	}
}




PostScream.propTypes={

	postScream:PropTypes.func.isRequired,
	UI:PropTypes.object.isRequired

}

const mapStateToProps=(state)=>({

	UI:state.UI

})

export default connect(mapStateToProps,{postScream})(withStyles(styles)(PostScream))

