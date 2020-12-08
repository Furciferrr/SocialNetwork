import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'
import {follow, unfollow, setCurrentPage, setFollowingProgress} from './../../redax/users-reducer'
import Preloader from './../common/preloader/preloader'
import {getUsersThunk, onPageChengeThunk} from './../../redax/users-reducer'

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
       users: state.usersPage.users,
       currentPage: state.usersPage.currentPage,
       pageSize: state.usersPage.pageSize,
       usersTotalCount: state.usersPage.usersTotalCount,
       isFetching: state.usersPage.isFetching,
       followingProgress: state.usersPage.followingProgress

    }
}


const UsersContainer = connect(mapStateToProps, {follow, unfollow, setCurrentPage, setFollowingProgress, getUsersThunk, onPageChengeThunk})(UsersContainerApp);

export default UsersContainer