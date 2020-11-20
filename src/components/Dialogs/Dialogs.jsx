import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

 
const Dialogs = (props) => {
  

    let dialogsElements = props.state.dialogData.map((element) => {
      return(
        <DialogItem name={element.name} id={element.id}/>
      );
    });


    let messagesElements = props.state.messagesData.map(message => <Message message={message.message}/>);

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