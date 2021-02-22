import { ResultCodeEnum, ResultCodeForCaptchaEnum } from './../api/api';
import { BaseThunkType, InferActionsTypes } from './redux-store';
import { stopSubmit } from 'redux-form';
import { authAPI } from '../api/auth-api';
import { securityAPI} from '../api/security-api';
import { LoginFormDataType } from '../Types/types';


const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_LOGIN_USER_ID = 'autn/SET_LOGIN_USER_ID'
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL'

export type initialStateType = {
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean,
  captchaURL: string | null
}

let initialState: initialStateType = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaURL: null

}

const authReducer = (state = initialState, action: ActionTypes): initialStateType => {
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

export const actions = {
  setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return(
      {type: SET_USER_DATA, payload: {userId, email, login, isAuth}} as const
    )
  }, 
  setLoginUserId: (userId: number) => {
    return(
      {type: SET_LOGIN_USER_ID, userId} as const
    )
  },
  setCuptchaURL: (captchaURL: string) => {
    return(
      {type: SET_CAPTCHA_URL, captchaURL} as const
    )
  }
}

type ActionTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionTypes | ReturnType<typeof stopSubmit>>

export const authUserDataThunk = (): ThunkType => async (dispatch) => {
   let meData = await authAPI.authUserData()
    if (meData.resultCode === ResultCodeEnum.Succes) {
      let { id, email, login } = meData.data
      dispatch(actions.setAuthUserData(id, email, login, true))
    }
}

export const loginUserThunk = (formData: LoginFormDataType): ThunkType =>{ 
  return async (dispatch) => {
    let meData = await authAPI.loginUser(formData)
      if (meData.resultCode === ResultCodeEnum.Succes) {
        dispatch(authUserDataThunk())
      } else {
        if (meData.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
          dispatch(getcaptchaURLThunk())
        }
        const message = meData.messages.length > 0 ? meData.messages : 'some error'
        const action = stopSubmit('login', {_error:message})
        dispatch(action)
      }
   }
  }

export const logoutUserThunk = (): ThunkType =>{ 
    return async (dispatch) => {
    let response = await authAPI.logoutUser()
        if (response.data.resultCode === ResultCodeEnum.Succes) {
          dispatch(actions.setAuthUserData(null, null, null, false))
        }
     }
    }  

export const getcaptchaURLThunk = (): ThunkType =>{ 
      return async (dispatch) => {
      let data = await securityAPI.getCaptchaURL()
        const captchaURL = data.url
        dispatch(actions.setCuptchaURL(captchaURL))
       }
      }   

export default authReducer