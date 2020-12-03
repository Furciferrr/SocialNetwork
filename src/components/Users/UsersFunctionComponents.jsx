import React from 'react'
import * as axios from 'axios'
import userPhotoDefault from './../../assets/images/users.png'
import classes from './users.module.css'


const Users = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => { 
            props.setUsers(response.data.items)
            }) 
        } 
    }


    let usersElem = props.users.map( u => {
        return (
            <div className={classes.wrapUsers}>
                <div><img src={u.photos.small != null ? u.photos.small : userPhotoDefault} alt="ava"/></div>
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
        )
    })


    return (
        <div>
             <button onClick={getUsers}>Get Users</button>
            {usersElem}
        </div>
    )
}


export default Users