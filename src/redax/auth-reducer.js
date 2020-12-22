import { stopSubmit } from 'redux-form';
import {usersAPI, authAPI} from './../api/api';


const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_LOGIN_USER_ID = 'autn/SET_LOGIN_USER_ID'



let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,

}

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USER_DATA: 
        return {
          ...state,
          ...action.payload
        } 
    case SET_LOGIN_USER_ID: 
        return {
          ...state,
          userId: action.userId,
        }        
      default:
        return state;    
  }
}
export const setAuthUserData = (userId, email, login, isAuth) => {
  return(
    {type: SET_USER_DATA, payload: {userId, email, login, isAuth}}
  )
} 

export const setLoginUserId = (userId) => {
  return(
    {type: SET_LOGIN_USER_ID, userId}
  )
}

export const authUserDataThunk = () =>{ 
return async (dispatch) => {
   let response = await usersAPI.authUserData()
    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data
      dispatch(setAuthUserData(id, email, login, true))
    }
}
}

export const loginUserThunk = (formData) =>{ 
  return async (dispatch) => {
    let response = await authAPI.loginUser(formData)
      if (response.data.resultCode === 0) {
        dispatch(authUserDataThunk())
      } else {
        const message = response.data.messages.length > 0 ? response.data.messages : 'some error'
        const action = stopSubmit('login', {_error:message})
        dispatch(action)
      }
   }
  }

  export const logoutUserThunk = () =>{ 
    return async (dispatch) => {
    let response = await authAPI.logoutUser()
        if (response.data.resultCode === 0) {
          dispatch(setAuthUserData(null, null, null, false))
        }
     }
    }  


export default authReducer