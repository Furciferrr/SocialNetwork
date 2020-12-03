import Users from './Users'
import { connect } from 'react-redux'
import {followAC, unfollowAC, setUsers, currentPageAC, userTotalCountAC} from './../../redax/users-reducer'


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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer