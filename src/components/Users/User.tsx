import React from 'react'
import { NavLink } from 'react-router-dom';
import { userType } from '../../Types/types';
import userPhotoDefault from './../../assets/images/users.png'
import classes from './users.module.css'


type propsType = {
    user: userType 
    followingProgress: Array <number> 
    followThunk: (userId: number) => void
    unfollowThunk: (userId: number) => void
}

const User: React.FC <propsType> = (props) => {
    return (
            <div className={classes.wrapUsers}>
                <NavLink to={'/profile/' + props.user.id}>
                <img src={props.user.photos.small != null ? props.user.photos.small : userPhotoDefault} alt="ava"/>
                </NavLink>
                <div>{props.user.name}</div>
                <div>{props.user.status || 'Not Status'}</div>
                <div>{'user.location.city'}</div>
                <div>'{'props.user.location.country'}'</div>
                <div>
                {props.user.followed 
                    ? <button disabled={props.followingProgress
                    .some(id => id === props.user.id)} 
                    onClick={ () => {
                        props.unfollowThunk(props.user.id)
                        }}>Unfollow</button>

                    : <button disabled={props.followingProgress
                        .some(id => id === props.user.id)} onClick={() =>{
                        props.followThunk(props.user.id)
                        }}>Follow</button>}
                </div>
            </div>
            )}

export default User