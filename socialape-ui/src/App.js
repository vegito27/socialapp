import React ,{Component} from 'react';
import './App.css';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/Signup'
import Navbar from './components/Navbar'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import jwtDecode from 'jwt-decode'
import AuthRoute from './util/AuthRoute' 
import {Provider} from 'react-redux'
import store from './redux/store'
import {SET_AUTHENTICATED} from './redux/types'
import {logoutUser,getUserData} from './redux/actions/userActions'
import axios from 'axios'
import user from "./pages/user";


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

  },
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


})

let authenticated;

const token=localStorage.FBIdToken

if(token){

  const decodedToken=jwtDecode(token)


  if(decodedToken.exp*1000 <Date.now()){

    store.dispatch(logoutUser())

     authenticated=false

    window.location.href='/login'

  }else{

    store.dispatch({type:SET_AUTHENTICATED})

    axios.defaults.headers.common['Authorization']=token


    store.dispatch(getUserData() )

  }

  console.log(decodedToken)

}


class App extends Component{

  render(){

  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <div className="App">
          <Router>
            <div className="container">   
              <Navbar />
              <Switch>
                  <Route exact path="/" component={Home} />

                  <AuthRoute exact path="/login" component={Login}  />

                  <AuthRoute exact path="/signup" component={SignUp} />

                  <Route exact path="/users/:handle" component={user} />
                          
                  <Route exact path="/users/:handle/scream/:screamId" component={user} />
                        
              </Switch>
            </div>
          </Router>
        </div>
      </Provider>
    </MuiThemeProvider>
  ); 
 }
}

export default App;
