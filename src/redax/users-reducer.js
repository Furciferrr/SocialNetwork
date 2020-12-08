import usersAPI from './../api/api';



const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USER_TOTAL_COUNT = 'SET_USER_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';





let initialState = {
  users: [],
  currentPage: 1,
  pageSize: 4,
  usersTotalCount: 0,
  isFetching: false,
  followingProgress: false
  
  
}

const userPageReducer = (state = initialState, action) => {
  switch(action.type) {
    case FOLLOW: 
        return {
          ...state,
          users: state.users.map( u => {
            if (u.id === action.userId) {
              return {...u, followed: true}
            }
            return u;
          })
        }
     case UNFOLLOW:
      return {
        ...state,
        users: state.users.map( u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u;
        })
      }
      case SET_USERS:{
       return {
          ...state, users: action.users} 
        }
      case SET_CURRENT_PAGE:{
        return {
              ...state, currentPage: action.pageNumber} 
            }
      case SET_USER_TOTAL_COUNT:{
        return {
             ...state, usersTotalCount: action.totalUser} 
            }
      case TOGGLE_IS_FETCHING:{
        return {
            ...state, isFetching: action.isFetching} 
            } 
      case TOGGLE_IS_FOLLOWING_PROGRESS:{
        return {
            ...state, followingProgress: action.followingProgress} 
            }         
               
      default:
        return state;    
  }
}
export const follow = (userId) => {
  return(
    {type: FOLLOW, userId}
  )
} 
export const unfollow = (userId) =>{
  return(
    {type: UNFOLLOW, userId}
  )
}

export const setUsers = (users) =>{
  return(
    {type: SET_USERS, users}
  ) 
}

export const setCurrentPage = (pageNumber) =>{
  return(
    {type: SET_CURRENT_PAGE, pageNumber}
  ) 
}

export const userTotalCount = (totalUser) =>{
  return(
    {type: SET_USER_TOTAL_COUNT, totalUser}
  ) 
}

export const SetIsFetching = (isFetching) =>{
  return(
    {type: TOGGLE_IS_FETCHING, isFetching}
  ) 
}

export const setFollowingProgress = (followingProgress) => {
  return (
    {type: TOGGLE_IS_FOLLOWING_PROGRESS, followingProgress}
  )
}

export const getUsersThunk = (currentPage, pageSize) => {
  return (dispatch) => {
      dispatch(SetIsFetching(true))
      usersAPI.getUsers(currentPage, pageSize).then(response => {
          dispatch(SetIsFetching(false))
          dispatch(setUsers(response.items))
          dispatch(userTotalCount(response.totalCount))
          });
    }
}

export const onPageChengeThunk = (pageNumber, pageSize) => {
  return (dispatch) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(SetIsFetching(true))
    usersAPI.getUsers(pageNumber, pageSize)
    .then(response => { 
        dispatch(SetIsFetching(false))
        dispatch(setUsers(response.items))
        });
  }
}





export default userPageReducer