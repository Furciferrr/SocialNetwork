
import Dialogs from './Dialogs'
import {addMessageActionCreater} from '../../redax/messagePage-reducer'
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
    addMessageAction: (messageValue) => {
      dispatch(addMessageActionCreater(messageValue))
    }
  }
}

const DialogsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)


export default DialogsContainer