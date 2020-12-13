import {usersAPI, authAPI} from './../api/api';


const SET_USER_DATA = 'SET_USER_DATA';
const SET_LOGIN_USER_ID = 'SET_LOGIN_USER_ID'



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
          ...action.data,
          isAuth: true
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
export const setAuthUserData = (userId, email, login) => {
  return(
    {type: SET_USER_DATA, data: {userId, email, login}}
  )
} 

export const setLoginUserId = (userId) => {
  return(
    {type: SET_LOGIN_USER_ID, userId}
  )
}

export const authUserDataThunk = () =>{ 
return (dispatch) => {
  usersAPI.authUserData().then(response => {
    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data
      dispatch(setAuthUserData(id, email, login))
    }
  });
}
}

export const loginUserThunk = (formData) =>{ 
  return (dispatch) => {
    authAPI.loginUser(formData).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setLoginUserId(response.data.data.userId))
      }
    });
   }
  }


export default authReducer