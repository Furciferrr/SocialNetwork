import Users from './Users'
import { connect } from 'react-redux'
import {followAC, unfollowAC, setUsers} from './../../redax/users-reducer'


const mapStateToProps = (state) => {
    return {
       users: state.usersPage.users
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
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer