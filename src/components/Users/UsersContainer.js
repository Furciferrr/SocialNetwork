import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'
import {follow, unfollow, setCurrentPage, setFollowingProgress} from './../../redax/users-reducer'
import Preloader from './../common/preloader/preloader'
import {getUsersThunk, onPageChengeThunk} from './../../redax/users-reducer'
import { getUsers, getCurrentPage, getPageSize, getTotalUser, getIsFetching, getfollowingProgress} from '../../redax/selectors'

class UsersContainerApp extends React.Component {
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize) 
    }

    onPageChenge = (pageNumber) => {
        this.props.onPageChengeThunk(pageNumber, this.props.pageSize)
    } 
    
  render() {
    return (
        <>
       {this.props.isFetching ? <Preloader/> : null}
        
            <Users 
                {...this.props}
                usersTotalCount={this.props.usersTotalCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChenge={this.onPageChenge}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                
            
            />
        </>
    )
}
}

const mapStateToProps = (state) => {
    return {
       users: getUsers(state),
       currentPage: getCurrentPage(state),
       pageSize: getPageSize(state),
       usersTotalCount: getTotalUser(state),
       isFetching: getIsFetching(state),
       followingProgress: getfollowingProgress(state)

    }
}


const UsersContainer = connect(mapStateToProps, {follow, unfollow, setCurrentPage, setFollowingProgress, getUsersThunk, onPageChengeThunk})(UsersContainerApp);

export default UsersContainer