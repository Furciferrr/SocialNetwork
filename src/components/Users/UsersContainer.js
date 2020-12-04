import React from 'react'
import * as axios from 'axios'
import Users from './Users'
import { connect } from 'react-redux'
import {followAC, unfollowAC, setUsers, currentPageAC, userTotalCountAC} from './../../redax/users-reducer'


class UsersContainerApp extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => { 
            this.props.setUsers(response.data.items)
            this.props.userTotalCount(response.data.totalCount)
            });
    }

    onPageChenge = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => { 
            this.props.setUsers(response.data.items)
            });
    }
        
render() {

    return (
        <Users 
            usersTotalCount={this.props.usersTotalCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChenge={this.onPageChenge}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        
        />
    )
}
}

const mapStateToProps = (state) => {
    return {
       users: state.usersPage.users,
       currentPage: state.usersPage.currentPage,
       pageSize: state.usersPage.pageSize,
       usersTotalCount: state.usersPage.usersTotalCount

    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) =>{
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsers(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(currentPageAC(pageNumber))
        },
        userTotalCount: (totalUser) => {
            dispatch(userTotalCountAC(totalUser))
        }

    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerApp);

export default UsersContainer