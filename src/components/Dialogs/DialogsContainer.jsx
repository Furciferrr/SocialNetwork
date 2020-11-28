
import Dialogs from './Dialogs'
import {updateChengeMessage, addMessageActionCreater} from '../../redax/messagePage-reducer'
import { connect } from 'react-redux'
 
/* const DialogsContainer = (props) => {
  


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
} */

const mapStateToProps = (state) =>{
  return{
    messagesPage: state.messagesPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    updateChengeMessage: (text) => {
      dispatch(updateChengeMessage(text))
    },
    addMessageAction: () => {
      dispatch(addMessageActionCreater())
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer