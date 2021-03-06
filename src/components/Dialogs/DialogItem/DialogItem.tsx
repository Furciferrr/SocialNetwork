import React from 'react';
import classes from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

type PropsType = {
  id: number
  name: string
  dialogAvaLink: string
}


const DialogItem: React.FC<PropsType> = (props) => {
  let path = "/dialogs/"+ props.id
  return (
    <div className={classes.dialog}>
      <img src={props.dialogAvaLink} alt='ava'/>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}



export default DialogItem