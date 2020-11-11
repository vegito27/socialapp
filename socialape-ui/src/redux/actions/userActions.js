import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI,
	SET_UNAUTHENTICATED,LOADING_USER,MARK_NOTIFICATIONS_READ } from '../types'
import axios from 'axios'


export const loginUser=(userData,history)=>(dispatch)=>{

	    dispatch({ type:LOADING_UI});

 		axios
 		.post("/login",userData)
 		.then(res=>{

 			setAuthorizationHeader(res.data.token)

 			dispatch(getUserData())

 			dispatch({type:CLEAR_ERRORS})

 			history.push('/');

 		}).catch(error=>{

 	
 			dispatch({

 				type:SET_ERRORS,
 				payload:error.response

 			})
 		})
}

export const signupUser = (userData, history) => dispatch => {

	console.log(userData)

  dispatch({ type: LOADING_UI });
  axios
  .post("/signup", userData)
  .then(result => {
  	console.log('hello')
      setAuthorizationHeader(result.data.token);
      dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
      history.push("/");
    })
    .catch(error => {
      dispatch({
        type: SET_ERRORS,
        payload: error.response.data
      });
    });
};


export const getUserData=()=>(dispatch)=>{

	dispatch({type:LOADING_USER})

	axios
	.get('/user')
	.then(res=>{

		dispatch({
			type:SET_USER,
			payload:res.data
		})

	})
	.catch(err=>{

		console.log(err)

	})
}

const setAuthorizationHeader=(token)=>{

	const FBIdToken=`Bearer ${token}`

	localStorage.setItem('FBIdToken',FBIdToken)

	axios.defaults.headers.common['Authorization']=FBIdToken

}


export const logoutUser=()=>(dispatch)=>{

	localStorage.removeItem('FBIdToken')

	delete axios.defaults.headers.common['Authorization']
	
	dispatch({type:SET_UNAUTHENTICATED}) 

}

export const editUserDetails=userDetails=>(dispatch)=>{

	dispatch({type:LOADING_USER})

	axios
	.post('/user',userDetails)
	.then(()=>{

		dispatch(getUserData());
	})
	.catch(err=> console.log(err))

}

export const uploadImage=(formData)=>(dispatch)=>{

	dispatch({type:LOADING_USER})

	axios.post('/user/image',formData)
	.then(()=>{

		dispatch(getUserData())
	})
	.catch(err=>console.log(err))

}

export const markNotificationsRead = notificationsIds => dispatch => {
  axios
    .post("/notifications", notificationsIds)
    .then(res => {
      dispatch({ type: MARK_NOTIFICATIONS_READ });
    })
    .catch(err => console.log(err));
};













