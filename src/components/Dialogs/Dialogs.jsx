import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

 
const Dialogs = (props) => {
  

    let dialogsElements = props.state.dialogData.map((element) => {
      return(
        <DialogItem name={element.name} id={element.id} dialogAvaLink={element.dialogAvaLink}/>
      );
    });


    let messagesElements = props.state.messagesData.map(message => <Message message={message.message}/>);

    let newMessasge = React.createRef();
    let addMessage = () =>{
      let text = newMessasge.current.value 
      alert(text);
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
              <textarea ref={newMessasge}></textarea>
            </div>
            <button onClick={addMessage}>add message</button>
        </div>

      </div>
      
    )
}

export default Dialogs