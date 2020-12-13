import React from 'react';
import Header from './Header'
import { connect } from 'react-redux'
import { authUserDataThunk, logoutUserThunk } from './../../redax/auth-reducer'




class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.authUserDataThunk()
  }


  render() {
    return <Header {...this.props} />
  }
}


const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})


export default connect(mapStateToProps, { authUserDataThunk, logoutUserThunk })(HeaderContainer)