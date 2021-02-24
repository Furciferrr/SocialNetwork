import React from 'react'
import {Users} from './Users'
import Preloader from '../common/preloader/preloader'
import { useSelector } from 'react-redux'
import { getIsFetching } from '../../redax/selectors'




type UsersPropsType = {}

const UsersPage: React.FC<UsersPropsType> = (props) => {
    const isFetching = useSelector(getIsFetching)

    return <>
    {isFetching ? <Preloader/> : null}
    <Users/>
</>
}

export default UsersPage