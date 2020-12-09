
import Dialogs from './Dialogs'
import {updateChengeMessage, addMessageActionCreater} from '../../redax/messagePage-reducer'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../hoc/withAuthRedirect'
import { compose } from 'redux'
 

const mapStateToProps = (state) =>{
  return{
    messagesPage: state.messagesPage,
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

const DialogsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)


export default DialogsContainer