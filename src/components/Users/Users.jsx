import React from 'react'
import * as axios from 'axios'
import userPhotoDefault from './../../assets/images/users.png'
import classes from './users.module.css'


class Users extends React.Component {
        componentDidMount() {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => { 
                this.props.setUsers(response.data.items)
                });
        }
            
 
    render() {
        return (
        <div>
            {
            this.props.users.map( u => 
            <div className={classes.wrapUsers}>
                <div><img src={u.photos.small != null ? u.photos.small : userPhotoDefault} alt="ava"/></div>
                <div>{u.name}</div>
                <div>{u.status}</div>
                <div>{'u.location.city'}</div>
                <div>'{'u.location.country'}'</div>
                <div>
                {u.followed 
                ? <button onClick={ () => {
                    this.props.unfollow(u.id)}}>Unfollow</button>
                    : <button onClick={() =>{
                    this.props.follow(u.id)}}>Follow</button>}
                </div>
            </div>
            )}
       </div>
        )
    }
}

export default Users