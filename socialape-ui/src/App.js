import React ,{Component} from 'react';
import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'


import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'

import Home from './pages/home'
import Login from './pages/login'
import SignUp from './pages/signup'
import Navbar from './components/navbar'



const theme=createMuiTheme({
  palette:{
    primary:{

      light:"#33c9dc",
      main:"#00bcd4",
      dark:"#008394",
      contrastText:"#fff"
    },
    secondary:{
      light:"#ff6333",
      main:"#ff3d00",
      dark:"#b2a00",
      contrastText:"#fff"
      
    }
  },typography:{
    useNextVariants:true

  }
})

class App extends Component{

  render(){

  return (
    <MuiThemeProvider theme={theme}>
    <div className="App">
    <Router>

    <div className="container">
    <Navbar />

    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={SignUp}/>
    </Switch>
    
    </div>
    </Router>
    </div>
    </MuiThemeProvider>
  ); 
 }

}

export default App;
