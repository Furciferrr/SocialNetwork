import React from 'react'
import * as axios from 'axios'
import userPhotoDefault from './../../assets/images/users.png'
import classes from './users.module.css'


class Users extends React.Component {
        componentDidMount() {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => { 
                this.props.setUsers(response.data.items)
                this.props.userTotalCount(response.data.totalCount)
                });
        }

        onPageChenge = (pageNumber) => {
            this.props.setCurrentPage(pageNumber);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => { 
                this.props.setUsers(response.data.items)
                });
        }
            
    render() {
        let pagesCount = Math.ceil(this.props.usersTotalCount / this.props.pageSize);
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
                        <span onClick={ (e) => {this.onPageChenge(p)}} className={this.props.currentPage === p ? classes.activePage : ''}>{p}</span>
                        )
                    })
                }
            </div>
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