import {createStore,combineReducers,applyMiddleware,compose} from 'redux'

import dataReducer from './reducer/dataReducer'
import useReducer from './reducer/useReducer'
import uiReducer from './reducer/uiReducer'

import thunk from 'redux-thunk'
 
 const initialState={}

 const middleware=[thunk]

 const reducers=combineReducers({

 	user:useReducer,
 	data:dataReducer,
 	UI:uiReducer

 })
 
const store=createStore(reducers,initialState, compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())) 

export default store;
 