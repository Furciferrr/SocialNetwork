import { BaseThunkType, InferActionsTypes } from './redux-store';
import { stopSubmit } from 'redux-form';
import { profileAPI } from '../api/profile-api';
import { photosType, postsDataType, userProfileType } from '../Types/types';


export type initialContentStateType = typeof initialState

let initialState = {
  postsData: [{
    id: 1,
    message: 'Hi, bro..,',
    likeNumb: 32,
    avaLink: 'https://i.pinimg.com/170x/a1/9b/83/a19b83023cdb650a17623bf6bf456245.jpg'
  },
  {
    id: 2,
    message: 'Hello world!',
    likeNumb: 20,
    avaLink: 'https://i.pinimg.com/170x/a1/9b/83/a19b83023cdb650a17623bf6bf456245.jpg'
  },
  ] as Array<postsDataType>,
  userProfile: null as userProfileType | null,
  status: '' as string

}

const contentPageReducer = (state = initialState, action: ActionTypes): initialContentStateType => {
  switch (action.type) {
    case 'SN/PROFILE/ADD-POST': {
      let newPost = {
        id: 5,
        message: action.postMessage,
        likeNumb: 0,
        avaLink: 'https://i.pinimg.com/170x/a1/9b/83/a19b83023cdb650a17623bf6bf456245.jpg'
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost]
      };
    }
    case 'SN/PROFILE/SET_USER_PROFILE':
      return {
        ...state,
        userProfile: action.userProfile
      }
    case 'SN/PROFILE/SET_STATUS':
      return {
        ...state,
        status: action.status
      }
    case 'SN/PROFILE/SAVE_PHOTO_SUCCES':
      return {
        ...state,
        userProfile: { ...state.userProfile, photos: action.photos } as userProfileType
      }
    case 'SN/PROFILE/DELETE_POST':
      return {...state, postsData: state.postsData.filter(p => p.id !== action.postId)}  
    default:
      return state;
  }
}


export const actions = {
  addPostActionCreater: (postMessage: string) => {
    return ({
      type: 'SN/PROFILE/ADD-POST', postMessage
    }as const)
  },
  setUserProfile: (userProfile: userProfileType) => {
    return ({
      type: 'SN/PROFILE/SET_USER_PROFILE',
      userProfile
    } as const)
  },
  setUserStatus: (status: string) => {
    return ({
      type: 'SN/PROFILE/SET_STATUS',
      status
    } as const)
  },
  savePhotoSucces: (photos: photosType) => {
    return ({
      type: 'SN/PROFILE/SAVE_PHOTO_SUCCES',
      photos
    } as const)
  },
  delitePost: (postId: number) => {
    return ({
      type: 'SN/PROFILE/DELETE_POST',
      postId
    } as const)
  }, 
}
type ActionTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionTypes | ReturnType<typeof stopSubmit>>//stopSubmit returned FormAction

export const getUserProfileThunk = (userId: number | null): ThunkType => async (dispatch) => {
  await profileAPI.getUserProfile(userId).then((data) => {
      dispatch(actions.setUserProfile(data))
    });
  }

export const getStatusThunk = (userId: number): ThunkType => async (dispatch) => {
  await profileAPI.getStatus(userId).then((data) => {
      dispatch(actions.setUserStatus(data))
    });
  }

export const updateStatusThunk = (status: string): ThunkType => async (dispatch) => {
   await profileAPI.updateStatus(status).then((data) => {
      if (data.resultCode === 0) {
        dispatch(actions.setUserStatus(status))
      }
    });
  }

export const savePhotoThunk = (photo: File): ThunkType => async (dispatch) => {
   await profileAPI.savePhoto(photo).then((data) => {
      if (data.resultCode === 0) {
        dispatch(actions.savePhotoSucces(data.data.photos))
      }
    });
  }

export const setFormDataThunk = (formData: userProfileType): ThunkType => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const data = await profileAPI.saveProfile(formData)
  if (data.resultCode === 0) {
    dispatch(getUserProfileThunk(userId))
  } else {
    dispatch(stopSubmit('ProfileData', { _error: data.messages[0] }))
    return Promise.reject(data.messages[0]);
  }
}


export default contentPageReducer