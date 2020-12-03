const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USER_TOTAL_COUNT = 'SET_USER_TOTAL_COUNT';

let initialState = {
  users: [],
  currentPage: 1,
  pageSize: 4,
  usersTotalCount: 0,
  
  
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
     default:
        return state;    
  }
}
export const followAC = (userId) => {
  return(
    {type: FOLLOW, userId}
  )
} 
export const unfollowAC = (userId) =>{
  return(
    {type: UNFOLLOW, userId}
  )
}

export const setUsers = (users) =>{
  return(
    {type: SET_USERS, users}
  ) 
}

export const currentPageAC = (pageNumber) =>{
  return(
    {type: SET_CURRENT_PAGE, pageNumber}
  ) 
}

export const userTotalCountAC = (totalUser) =>{
  return(
    {type: SET_USER_TOTAL_COUNT, totalUser}
  ) 
}



export default userPageReducer