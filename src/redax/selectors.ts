import { AppStateType } from './redux-store';
import {createSelector} from 'reselect'
  
  



const getAllUsers = (state: AppStateType) => {
    return state.usersPage.users
}    


export const getUsers = createSelector(getAllUsers, (users) => {
    return users.filter( u => true)
})

export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}


export const getTotalUser = (state: AppStateType) => {
    return state.usersPage.usersTotalCount
}


export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}


export const getfollowingProgress = (state: AppStateType) => {
    return state.usersPage.followingProgress
}

export const getUsersFilter = (state: AppStateType) => {
    return state.usersPage.filter
}

       
