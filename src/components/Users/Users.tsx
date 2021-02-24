import React, { useEffect } from 'react'
import classes from './users.module.css'
import Paginator from '../Paginator/Paginator';
import User from './User';
import UsersSearchForm from './UsersSearchForm';
import { FilterType, followThunk, getUsersThunk, onPageChengeThunk, unfollowThunk } from '../../redax/users-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPage, getfollowingProgress, getPageSize, getTotalUser, getUsers, getUsersFilter } from '../../redax/selectors';

type Props = {}

export const Users: React.FC<Props> = () => {
    const usersTotalCount = useSelector(getTotalUser)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)
    const users = useSelector(getUsers)
    const followingProgress = useSelector(getfollowingProgress)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getUsersThunk(currentPage, pageSize, filter))
    },[])

    const onPageChenge = (pageNumber: number) => {
        dispatch(onPageChengeThunk(pageNumber, pageSize, filter))
    } 

    const onFilterChanged = (filter: FilterType) => {
        dispatch(getUsersThunk(1, pageSize, filter))
    }

    const follow = (userId: number) => {
        dispatch(followThunk(userId))
    }

    const unfollow = (userId: number) => {
        dispatch(unfollowThunk(userId))
    }


    return (
        <div className={classes.usersPageWrap}>
            <div>
                <UsersSearchForm onFilterChanged={onFilterChanged}/>
            </div>

            <Paginator usersTotalCount={usersTotalCount}
                pageSize={pageSize}
                onPageChenge={onPageChenge}
                currentPage={currentPage} />
            {
                users.map(u =>
                    <User user={u}
                        key={u.id}
                        followingProgress={followingProgress}
                        followThunk={follow}
                        unfollowThunk={unfollow} />
                )}
        </div>
    )
}
