import React from 'react';
import classes from './Nav.module.css';

const Nav = () => {
    return (
    <nav className={classes.nav}>
        <div className={`${classes.item} ${classes.active}`}>
            <a href='https'>Profile</a>
        </div>
        <div className={classes.item}>
            <a href='https'>News</a>
        </div>
        <div className={classes.item}>
            <a href='https'>Music</a>
        </div>
        <div className={classes.item}>
            <a href='https'>Messages</a>
        </div>
    </nav>
    )
}

export default Nav