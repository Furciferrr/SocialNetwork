import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from'./Header.module.css';

const Header = (props) =>{
    return(
  <header className={classes.header}>
      <img alt="header" src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/200px-NASA_logo.svg.png'/>
      <div className={classes.login}>
      {props.isAuth ? props.login :
       <NavLink to='/login'>Login</NavLink>}
        </div>  
  </header>
  )
}


export default Header