import React from 'react';
import Header, {PropsHeaderType, DispatchPropsHeaderType} from './Header'
import { connect } from 'react-redux'
import { authUserDataThunk, logoutUserThunk } from '../../redax/auth-reducer'
import { AppStateType } from '../../redax/redux-store';




class HeaderContainer extends React.Component<PropsHeaderType & DispatchPropsHeaderType> {

  render() {
    return <Header {...this.props} />
  }
}


const mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
} as PropsHeaderType)


export default connect<PropsHeaderType, DispatchPropsHeaderType, {}, AppStateType>(mapStateToProps, { authUserDataThunk, logoutUserThunk })(HeaderContainer)