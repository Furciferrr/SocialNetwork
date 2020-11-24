import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {updateChengeMessage, addMessageActionCreater} from './../../redax/state'
 
const Dialogs = (props) => {
  

    let dialogsElements = props.state.messagesPage.dialogData.map((element) => {
      return(
        <DialogItem name={element.name} id={element.id} dialogAvaLink={element.dialogAvaLink}/>
      );
    });


    let messagesElements = props.state.messagesPage.messagesData.map(message => <Message message={message.message}/>);

   


    let addMessage = () => {
      props.dispatch(addMessageActionCreater());
    }

    let changeText = (e) => {
      let text = e.target.value
      props.dispatch(updateChengeMessage(text))
    }

    return (
      <div className={classes.dialogs}>
        <div className={classes.dialogItems}>
           {dialogsElements}
        </div>
        <div className={classes.messagesBlock}>
           {messagesElements}
        </div>
        <div>
            <div>
              <textarea onChange={changeText} value={props.store.getValueMessage()}></textarea>
            </div>
            <button onClick={addMessage}>add message</button>
        </div>

      </div>
      
    )
}

export default Dialogs