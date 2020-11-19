import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = "/dialogs/"+ props.id
  return (
    <div className={classes.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
  <div className={classes.message}>{props.message}</div>
  )
}

const Dialogs = (props) => {
    return (
      <div className={classes.dialogs}>
        <div className={classes.dialogItems}>
            <DialogItem name="Dimych" id="1"/>
            <DialogItem name="Masha" id="2"/>
            <DialogItem name="Sveta" id="3"/>
            <DialogItem name="Sasha" id="4"/>
            <DialogItem name="Vadim" id="5"/>
        </div>
        <div className={classes.messagesBlock}>
            <Message message="Hi"/>
            <Message message="How are you?"/>
            <Message message="What the fuck?"/>
        </div>
      </div>
      
    )
}

export default Dialogs