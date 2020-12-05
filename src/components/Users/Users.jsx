import React from 'react'
import { NavLink } from 'react-router-dom';
import userPhotoDefault from './../../assets/images/users.png'
import classes from './users.module.css'


const Users = (props) => {
    let pagesCount = Math.ceil(props.usersTotalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={classes.usersPageWrap}>
            <div className={classes.pageNumber}>
                {
                    pages.map( p => {
                        return (
                        <span onClick={ (e) => {props.onPageChenge(p)}} className={props.currentPage === p ? classes.activePage : ''}>{p}</span>
                        )
                    })
                }
            </div>
            {
            props.users.map( u => 
            <div className={classes.wrapUsers}>
                <NavLink to={'/profile/' + u.id}>
                <div><img src={u.photos.small != null ? u.photos.small : userPhotoDefault} alt="ava"/></div>
                </NavLink>
                <div>{u.name}</div>
                <div>{u.status}</div>
                <div>{'u.location.city'}</div>
                <div>'{'u.location.country'}'</div>
                <div>
                {u.followed 
                    ? <button onClick={ () => {
                        props.unfollow(u.id)}}>Unfollow</button>
                    : <button onClick={() =>{
                        props.follow(u.id)}}>Follow</button>}
                </div>
            </div>
            )}
       </div>
        )
}

export default Users