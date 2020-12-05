import React from 'react'
import * as axios from 'axios'
import Users from './Users'
import { connect } from 'react-redux'
import {follow, unfollow, setUsers, setCurrentPage, userTotalCount, SetIsFetching} from './../../redax/users-reducer'
import Preloader from './../common/preloader/preloader'

class UsersContainerApp extends React.Component {
    componentDidMount() {
        this.props.SetIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.SetIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.userTotalCount(response.data.totalCount)
            });
    }

    onPageChenge = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.SetIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => { 
            this.props.SetIsFetching(false)
            this.props.setUsers(response.data.items)
            });
    }
        
render() {
    return (
        <>
       {this.props.isFetching ? <Preloader/> : null}
        
            <Users 
            
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
       isFetching: state.usersPage.isFetching

    }
}


const UsersContainer = connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage,
     userTotalCount, SetIsFetching})(UsersContainerApp);

export default UsersContainer