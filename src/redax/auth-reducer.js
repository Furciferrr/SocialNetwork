import { stopSubmit } from 'redux-form';
import {usersAPI, authAPI, securityAPI} from './../api/api';


const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_LOGIN_USER_ID = 'autn/SET_LOGIN_USER_ID'
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL'


let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaURL: null

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
    case SET_CAPTCHA_URL: 
        return {
          ...state,
          captchaURL: action.captchaURL,
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

export const setCuptchaURL = (captchaURL) => {
  return(
    {type: SET_CAPTCHA_URL, captchaURL}
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
        if (response.data.resultCode === 10) {
          dispatch(getcaptchaURLThunk())
        }
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

export const getcaptchaURLThunk = () =>{ 
      return async (dispatch) => {
      let response = await securityAPI.getCaptchaURL()
        const captchaURL = response.data.url
        dispatch(setCuptchaURL(captchaURL))
       }
      }   

export default authReducer