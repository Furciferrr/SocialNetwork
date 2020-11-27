import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';


const BestFriends = (props) => {
    return(
    <div>
        <div className={classes.ava}><img src={props.avaLink} alt='ava'/></div>   
        <div className={classes.friendItem}>{props.name}</div>
    </div> 
    )
}





const Nav = (props) => {
    
    let bestFriendElem = props.state.bestFriends.bestFriends.map((friend) => {
        return(
            <BestFriends avaLink={friend.dialogAvaLink} name={friend.name}/>
        )
        
    })
    return (
    <nav className={classes.nav}>
        <div className={`${classes.item}`}>
            <NavLink to='/profile' activeClassName={classes.activeLink}>Profile</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/dialogs' activeClassName={classes.activeLink}>Messages</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='news' activeClassName={classes.activeLink}>News</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='music' activeClassName={classes.activeLink}>Music</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='settings' activeClassName={classes.activeLink}>Settings</NavLink>
        </div>
        <div className={classes.friends}>
            <h1>Friends</h1>
            <div className={classes.friendsItemWrapper}>
                {bestFriendElem}     
            </div>
        </div>
    </nav>
    )
}

export default Nav