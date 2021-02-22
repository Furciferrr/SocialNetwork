import { usersAPI } from '../api/users-api';
import { userType } from '../Types/types';
import {  BaseThunkType, InferActionsTypes } from './redux-store';


let initialState = {
  users: [] as Array<userType>,
  currentPage: 1 as number,
  pageSize: 4 as number,
  usersTotalCount: 0 as number,
  isFetching: false as boolean,
  followingProgress: [] as Array<number>,
  filter: {
    term: "",
    friend: null as null | boolean
  } //array usersId
}

type initialStateType = typeof initialState

const userPageReducer = (state = initialState, action: ActionTypes): initialStateType => {
  switch (action.type) {
    case 'USERS/FOLLOW':
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {
              ...u,
              followed: true
            }
          }
          return u;
        })
      }
    case 'USERS/UNFOLLOW':
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {
              ...u,
              followed: false
            }
          }
          return u;
        })
      }
    case 'USERS/SET_USERS': {
      return {
        ...state,
        users: action.users
      }
    }
    case 'USERS/SET_CURRENT_PAGE': {
      return {
        ...state,
        currentPage: action.pageNumber
      }
    }
    case 'USERS/SET_USER_TOTAL_COUNT': {
      return {
        ...state,
        usersTotalCount: action.totalUser
      }
    }
    case 'USERS/TOGGLE_IS_FETCHING': {
      return {
        ...state,
        isFetching: action.isFetching
      }
    }
    case 'USERS/TOGGLE_IS_FOLLOWING_PROGRESS': {
      return {
        ...state,
        followingProgress: action.followingProgress
          ? [...state.followingProgress, action.userId]
          : state.followingProgress.filter(id => id !== action.userId)
      }
    }

    case 'USERS/SET_FILTER': {
      return {
        ...state,
        filter: action.payload
      }
    }

    default:
      return state;
  }
}


export const actionsUsers = {
  follow: (userId: number) => {
    return ({
      type: 'USERS/FOLLOW',
      userId
    } as const)
  },

  unfollow: (userId: number) => {
    return ({
      type: 'USERS/UNFOLLOW',
      userId
    }as const)
  },

  setUsers: (users: Array<userType>) => {
    return ({
      type: 'USERS/SET_USERS',
      users
    }as const)
  },

  setCurrentPage: (pageNumber: number) => {
    return ({
      type: 'USERS/SET_CURRENT_PAGE',
      pageNumber
    }as const)
  },

  userTotalCount: (totalUser: number) => {
    return ({
      type: 'USERS/SET_USER_TOTAL_COUNT',
      totalUser
    }as const)
  },

  setIsFetching: (isFetching: boolean) => {
    return ({
      type: 'USERS/TOGGLE_IS_FETCHING',
      isFetching
    }as const)
  },

  setFollowingProgress: (followingProgress: boolean, userId: number) => {
    return ({
      type: 'USERS/TOGGLE_IS_FOLLOWING_PROGRESS',
      followingProgress,
      userId
    }as const)
  },
  setFilter: (filter: FilterType) => {
    return ({
      type: 'USERS/SET_FILTER',
      payload: filter
    }as const)
  }
}


type ActionTypes = InferActionsTypes<typeof actionsUsers>
type ThunkType = BaseThunkType<ActionTypes>
export type FilterType = typeof initialState.filter

export const getUsersThunk = (currentPage: number,
  pageSize: number, filter: FilterType): ThunkType => {
  return async (dispatch) => {
    dispatch(actionsUsers.setIsFetching(true))
    dispatch(actionsUsers.setFilter(filter))
    let response = await usersAPI.getUsers(currentPage, pageSize, filter.term, filter.friend)
    dispatch(actionsUsers.setIsFetching(false))
    dispatch(actionsUsers.setUsers(response.items))
    dispatch(actionsUsers.userTotalCount(response.totalCount))
    
  }
}

export const onPageChengeThunk = (pageNumber: number, pageSize: number, filter: FilterType): ThunkType => {
  return async (dispatch) => {
    dispatch(actionsUsers.setCurrentPage(pageNumber));
    dispatch(actionsUsers.setIsFetching(true))
    dispatch(actionsUsers.setFilter(filter))
    let response = await usersAPI.getUsers(pageNumber, pageSize, filter.term, filter.friend)
    dispatch(actionsUsers.setIsFetching(false))
    dispatch(actionsUsers.setUsers(response.items))
  }
}

export const followThunk = (userId: number): ThunkType => {
  return async (dispatch) => {
    dispatch(actionsUsers.setFollowingProgress(true, userId))
    let data = await usersAPI.followUser(userId)
    if (data.resultCode === 0) {
      dispatch(actionsUsers.follow(userId))
    }
    dispatch(actionsUsers.setFollowingProgress(false, userId))
  }
}

export const unfollowThunk = (userId: number): ThunkType => {
  return async (dispatch) => {
    dispatch(actionsUsers.setFollowingProgress(true, userId))
    let data = await usersAPI.unfollowUser(userId)
    if (data.resultCode === 0) {
      dispatch(actionsUsers.unfollow(userId))
    }
    dispatch(actionsUsers.setFollowingProgress(false, userId))
  }
}



export default userPageReducer