import React from 'react'
import classes from './users.module.css'
import Paginator from '../Paginator/Paginator';
import User from './User';

const Users = (props) => {

    return (
        <div className={classes.usersPageWrap}>

            <Paginator usersTotalCount={props.usersTotalCount}
                       pageSize={props.pageSize}
                       onPageChenge={props.onPageChenge} 
                       currentPage={props.currentPage} />
            {
            props.users.map( u => 
                <User user={u} 
                      key={u.id}  
                      followingProgress={props.followingProgress} 
                      follow={props.follow}
                      unfollow={props.unfollow}
                      followThunk={props.followThunk}
                      unfollowThunk={props.unfollowThunk} />
            )}
       </div>
        )
}

export default Users