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
  
    let dialogData = [
      {id: 1, name: 'Dimych'},
      {id: 2, name: 'Masha'},
      {id: 3, name: 'Sveta'},
      {id: 4, name: 'Saha'},
      {id: 5, name: 'Vadim'}
    ]

    let messagesData = [
      {id: 1, message: 'Hi'},
      {id: 2, message: 'How are you?'},
      {id: 3, message: 'What the fuck?'}
    ]

    let dialogsElements = dialogData.map((element) => {
      return(
        <DialogItem name={element.name} id={element.id}/>
      );
    });


    let messagesElements = messagesData.map(message => <Message message={message.message}/>);

    return (
      <div className={classes.dialogs}>
        <div className={classes.dialogItems}>
           {dialogsElements}
        </div>
        <div className={classes.messagesBlock}>
           {messagesElements}
        </div>
      </div>
      
    )
}

export default Dialogs