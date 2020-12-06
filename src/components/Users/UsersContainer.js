import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'
import {follow, unfollow, setUsers, setCurrentPage, userTotalCount, SetIsFetching} from './../../redax/users-reducer'
import Preloader from './../common/preloader/preloader'
import usersAPI from './../../api/api'

class UsersContainerApp extends React.Component {
    componentDidMount() {
        this.props.SetIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        .then(response => {
            this.props.SetIsFetching(false)
            this.props.setUsers(response.items)
            this.props.userTotalCount(response.totalCount)
            });
    }

    onPageChenge = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.SetIsFetching(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
        .then(response => { 
            this.props.SetIsFetching(false)
            this.props.setUsers(response.items)
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