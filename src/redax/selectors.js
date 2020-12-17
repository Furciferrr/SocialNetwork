import {createSelector} from 'reselect'
  
  



const getAllUsers = (state) => {
    return state.usersPage.users
}    


export const getUsers = createSelector(getAllUsers, (users) => {
    return users.filter( u => true)
})

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}


export const getTotalUser = (state) => {
    return state.usersPage.usersTotalCount
}


export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}


export const getfollowingProgress = (state) => {
    return state.usersPage.followingProgress
}

       
