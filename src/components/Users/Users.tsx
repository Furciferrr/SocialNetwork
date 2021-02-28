import React, { useEffect } from 'react'
import classes from './users.module.css'
import Paginator from '../Paginator/Paginator';
import User from './User';
import UsersSearchForm from './UsersSearchForm';
import { FilterType, followThunk, getUsersThunk, onPageChengeThunk, unfollowThunk } from '../../redax/users-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPage, getfollowingProgress, getPageSize, getTotalUser, getUsers, getUsersFilter } from '../../redax/selectors';
import { useHistory } from 'react-router-dom';
import *as queryString from 'querystring'

type Props = {}

export const Users: React.FC<Props> = () => {
    const usersTotalCount = useSelector(getTotalUser)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)
    const users = useSelector(getUsers)
    const followingProgress = useSelector(getfollowingProgress)

    const dispatch = useDispatch()
    const history = useHistory()



    useEffect(()=>{
        const parsed = queryString.parse(history.location.search.substr(1)) as {term: string, page: string, friend: string}
        let actualPage = currentPage
        let actualFilter = filter

        if(!!parsed.page) actualPage = Number(parsed.page)
        if(!!parsed.term) actualFilter = {...actualFilter, term: parsed.term as string}

        switch(parsed.friend) {
            case 'null': actualFilter = {...actualFilter, friend: null}
                break;
            case 'true': actualFilter = {...actualFilter, friend: true}  
                break;  
            case 'false': actualFilter = {...actualFilter, friend: false}
                break; 
        }
        dispatch(getUsersThunk(actualPage, pageSize, actualFilter))
        dispatch(onPageChengeThunk(actualPage, pageSize, actualFilter))
    },[])

    useEffect(()=> {
        history.push({
            pathname: '/users',
            search:`?term=${filter.term}&friend=${filter.friend}&page=${currentPage}`
        })
    }, [filter, currentPage])

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
