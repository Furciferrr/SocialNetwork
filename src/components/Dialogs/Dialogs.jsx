import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
 
const Dialogs = (props) => {
  

    let dialogsElements = props.messagesPage.dialogData.map((element) => {
      return(
        <DialogItem name={element.name} key={element.id} id={element.id} dialogAvaLink={element.dialogAvaLink}/>
      );
    });


    let messagesElements = props.messagesPage.messagesData.map(message => <Message message={message.message}/>);

   


    let addMessage = () => {
      props.addMessageAction();
    }

    let changeText = (e) => {
      let text = e.target.value
      props.updateChengeMessage(text)
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
              <textarea onChange={changeText} value={props.messagesPage.chengeMessage}></textarea>
            </div>
            <button onClick={addMessage}>add message</button>
        </div>

      </div>
      
    )
}

export default Dialogs