import React from 'react'
import { NavLink } from 'react-router-dom';
import userPhotoDefault from './../../assets/images/users.png'
import classes from './users.module.css'

const User = (props) => {
    return (
            <div className={classes.wrapUsers}>
                <NavLink to={'/profile/' + props.user.id}>
                <div><img src={props.user.photos.small != null ? props.user.photos.small : userPhotoDefault} alt="ava"/></div>
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