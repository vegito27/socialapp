import React,{Component,Fragment} from 'react';
import {Link} from 'react-router-dom'
import MyButton from '../util/MyButton'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import AddIcon from '@material-ui/icons/Add'
import HomeIcon from '@material-ui/icons/Home'
import Notifications from '@material-ui/icons/Notifications'
import PostScream from './PostScream'



class Navbar extends React.Component {

    
render(){

    const {authenticated}=this.props;


  return (
 
    <AppBar position="fixed" >

    <Toolbar className="nav-container">
    {authenticated ? 
        (
            <Fragment className="nav-container">

                <PostScream />
 
                <Link to="/">
                    <MyButton tip="Home">
                        <HomeIcon  />
                    </MyButton>
                </Link>

                <MyButton tip="Notifications">
                    <Notifications  />
                </MyButton>

            </Fragment>

        )
    :(
      
        <Fragment>
            <Button color="inherit" component={Link} to="/">Home</Button> 
            <Button color="inherit" component={Link} to="/login">Login</Button>
            <Button color="inherit" component={Link} to="/signup">SignUp</Button>
        </Fragment>
    
        )}

    </Toolbar>

</AppBar>


  )
 }
}


Navbar.propTypes={

    authenticated:PropTypes.bool.isRequired

}




const mapStateToProps=state=>({

    authenticated:state.user.authenticated

})

export default connect(mapStateToProps)(Navbar);


