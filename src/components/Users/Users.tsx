import React from 'react'
import classes from './users.module.css'
import Paginator from '../Paginator/Paginator';
import User from './User';
import { userType } from '../../Types/types';
import UsersSearchForm from './UsersSearchForm';
import { FilterType } from '../../redax/users-reducer';

type Props = {
    usersTotalCount: number
    pageSize: number
    currentPage: number
    onPageChenge: (p: number) => void
    users: Array<userType>
    followingProgress: Array<number>
    followThunk: (userId: number) => void
    unfollowThunk: (userId: number) => void
    onFilterChanged: (filter: FilterType) => void
}

const Users: React.FC<Props> = (props) => {
    return (
        <div className={classes.usersPageWrap}>
            <div>
                <UsersSearchForm onFilterChanged={props.onFilterChanged}/>
            </div>

            <Paginator usersTotalCount={props.usersTotalCount}
                pageSize={props.pageSize}
                onPageChenge={props.onPageChenge}
                currentPage={props.currentPage} />
            {
                props.users.map(u =>
                    <User user={u}
                        key={u.id}
                        followingProgress={props.followingProgress}
                        followThunk={props.followThunk}
                        unfollowThunk={props.unfollowThunk} />
                )}
        </div>
    )
}



export default Users