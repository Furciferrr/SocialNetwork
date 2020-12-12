import {profileAPI, usersAPI} from './../api/api';

const ADD_POST = 'ADD-POST';
const ON_CHANGE_POST = 'ON-CHANGE-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'



let initialState = {
  postsData: [{
      id: 1,
      message: 'Hi, bro..,',
      likeNumb: '32',
      avaLink: 'https://i.pinimg.com/170x/a1/9b/83/a19b83023cdb650a17623bf6bf456245.jpg'
    },
    {
      id: 2,
      message: 'Hello world!',
      likeNumb: '20',
      avaLink: 'https://i.pinimg.com/170x/a1/9b/83/a19b83023cdb650a17623bf6bf456245.jpg'
    },
  ],
  chengePost: 'it-kamasutra.com',
  userProfile: null,
  status:''

}



const contentPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.chengePost,
        likeNumb: 0,
        avaLink: 'https://i.pinimg.com/170x/a1/9b/83/a19b83023cdb650a17623bf6bf456245.jpg'
      };
      let stateCopy = {
        ...state,
        postsdata: [...state.postsData],
      };
      stateCopy.postsData.push(newPost)
      stateCopy.chengePost = ''
      return stateCopy
    }
    case ON_CHANGE_POST:
      return {
        ...state,
        chengePost: action.mess
      }
      case SET_USER_PROFILE:
        return {
          ...state,
          userProfile: action.userProfile
        }
        case SET_STATUS:
          return {
            ...state,
            status: action.status
          }

          default:
            return state;
  }
}


export const addPostActionCreater = () => {
  return ({
    type: ADD_POST
  })
}
export const updateChengePost = (text) => {
  return ({
    type: ON_CHANGE_POST,
    mess: text
  })
}
export const setUserProfile = (userProfile) => {
  return ({
    type: SET_USER_PROFILE,
    userProfile
  })
}

export const setUserStatus = (status) => {
  return ({
    type: SET_STATUS,
    status
  })
}

export const getUserProfileThunk = (userId) => {
  return (dispatch) => {
    usersAPI.getUserProfile(userId).then(response => {
      dispatch(setUserProfile(response.data))
    });
  }
}

export const getStatusThunk = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
      dispatch(setUserStatus(response.data))
    });
  }
}

export const updateStatusThunk = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status))
      }
    });
  }
}

export default contentPageReducer