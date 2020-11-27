import React from 'react';
import Dialogs from './Dialogs'
import {updateChengeMessage, addMessageActionCreater} from '../../redax/messagePage-reducer'
 
const DialogsContainer = (props) => {
  


    let messagesPage = props.store.getState().messagesPage
   


    let addMessage = () => {
      props.store.dispatch(addMessageActionCreater());
    }

    let changeText = (text) => {
      props.store.dispatch(updateChengeMessage(text))
    }

    return (
      <Dialogs
      updateChengeMessage={changeText}
      addMessageAction={addMessage}
      messagesPage={messagesPage}/>
      
    )
}

export default DialogsContainer