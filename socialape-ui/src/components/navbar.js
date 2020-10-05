import React,{Component} from 'react';
import {Link} from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'



const Navbar = (props) => {

  return (
    <div>
    <AppBar position="fixed" >

        <Toolbar className="nav-container">
            <Button color="inherit" component={Link} to="/">Home</Button> 
            <Button color="inherit" component={Link} to="/login">Login</Button>
            <Button color="inherit" component={Link} to="/signup">SignUp</Button>
           
        </Toolbar>
    </AppBar>


    </div>
  )
}

export default Navbar;