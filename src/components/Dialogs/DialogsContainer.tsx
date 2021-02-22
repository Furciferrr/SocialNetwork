
import Dialogs from './Dialogs'
import {addMessageActionCreater} from '../../redax/messagePage-reducer'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../hoc/withAuthRedirect'
import { compose } from 'redux'
import { AppStateType } from '../../redax/redux-store'
 

const mapStateToProps = (state: AppStateType) =>{
  return{
    messagesPage: state.messagesPage,
  }
}


const DialogsContainer = compose<React.ComponentType>(
  connect(mapStateToProps, {addMessageActionCreater}),
  withAuthRedirect
)(Dialogs)


export default DialogsContainer