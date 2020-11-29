"use strict"
import React from 'react'



const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {id: 1, fullName:'Dimych', status: 'i am okey', followed:true, location: {city: 'Minsk', country: 'Belarus'}, avaLink: 'https://i.pinimg.com/170x/a1/9b/83/a19b83023cdb650a17623bf6bf456245.jpg'},
            {id: 2, fullName:'Vadik', status: 'i am not okey', followed:false, location: {city: 'Prague', country: 'Chechia'}, avaLink: 'https://i.pinimg.com/170x/a1/9b/83/a19b83023cdb650a17623bf6bf456245.jpg'},
            {id: 3, fullName:'Juli', status: 'big Boss', followed:true, location: {city: 'Wraclaw', country: 'Polish'}, avaLink: 'https://i.pinimg.com/170x/a1/9b/83/a19b83023cdb650a17623bf6bf456245.jpg'}])
    }   

    let usersElem = props.users.map( u => {
        return (
            <div>
                <div><img src={u.avaLink} alt="ava"/></div>
                <div>{u.fullName}</div>
                <div>{u.status}</div>
                <div>{u.location.city}</div>
                <div>{u.location.country}</div>
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
            {usersElem}
        </div>
    )
}


export default Users