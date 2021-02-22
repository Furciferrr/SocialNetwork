import { AppStateType } from '../../redax/redux-store';
import React from 'react'
import Users from './Users'
import Preloader from '../common/preloader/preloader'
import { connect } from 'react-redux'
import {getUsersThunk, onPageChengeThunk, followThunk, unfollowThunk, FilterType} from '../../redax/users-reducer'
import { getUsers, getCurrentPage, getPageSize, getTotalUser, getIsFetching, getfollowingProgress, getUsersFilter} from '../../redax/selectors'
import { userType } from '../../Types/types'


type MapStateToPropsType = {
    currentPage: number
    pageSize: number
    usersTotalCount: number
    users: Array <userType>
    followingProgress: Array <number>
    isFetching: boolean
    filter: FilterType
}

type MapDispatchToPropsType = {
    followThunk: (userId: number) => void
    unfollowThunk: (userId: number) => void
    onPageChengeThunk: (pageNumber: number, pageSize: number, filter: FilterType) => any
    getUsersThunk: (currentPage: number, pageSize: number, filter: FilterType) => any
}

type OwnPropsType = {}



type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType


class UsersContainerApp extends React.Component <PropsType> {
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize, this.props.filter) 
    }

    onPageChenge = (pageNumber: number) => {
        this.props.onPageChengeThunk(pageNumber, this.props.pageSize, this.props.filter)
    } 

    onFilterChanged = (filter: FilterType) => {
        this.props.getUsersThunk(1, this.props.pageSize, filter)
    }
    
  render() {

    return <>
        {this.props.isFetching ? <Preloader/> : null}
        <Users usersTotalCount={this.props.usersTotalCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               onPageChenge={this.onPageChenge}
               onFilterChanged={this.onFilterChanged}
               users={this.props.users}
               followThunk={this.props.followThunk}
               unfollowThunk={this.props.unfollowThunk}
               followingProgress={this.props.followingProgress}
        />
    </>  
  }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
       users: getUsers(state),
       currentPage: getCurrentPage(state),
       pageSize: getPageSize(state),
       usersTotalCount: getTotalUser(state),
       isFetching: getIsFetching(state),
       followingProgress: getfollowingProgress(state),
       filter: getUsersFilter(state) 
    }
}

//setCurrentPage, setFollowingProgress
const UsersContainer = connect < MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mapStateToProps, {  getUsersThunk, onPageChengeThunk, followThunk, unfollowThunk })(UsersContainerApp);

export default UsersContainer;