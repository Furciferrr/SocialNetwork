import './App.css';
import React from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Nav/Nav';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ContainerNews from './components/News/conteinerNews';
import Music from './components/Music/Music';
import LoginContainer from './components/Login/Login';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import { Route, withRouter } from 'react-router-dom';
import ProfileContainerConnect from './components/Content/ProfileContainer'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initializeAppThunk } from './redax/app-reducer';
import Preloader from './components/common/preloader/preloader';

class App extends React.Component {

  componentDidMount() {
    this.props.initializeAppThunk()
  }


  render () {
    if (!this.props.initialized) {
      return <Preloader/>
    }
      return (
            <div className="app-wrapper">
              <HeaderContainer/>
              <Nav state={this.props.state}/>
              <div className='app-wrapper-content'>
                  <Route path="/profile/:userId?" render={ () => <ProfileContainerConnect/>}/>
                  <Route path="/dialogs" render={ () => <DialogsContainer
                  state={this.props.state}/>}/> 
                  <Route path="/news" render={ () => <ContainerNews/>}/>
                  <Route path="/music" render={ () => <Music/>}/> 
                  <Route path="/settings" render={ () => <Settings/>}/> 
                  <Route path="/users" render={ () => <UsersContainer/>}/> 
                  <Route path="/login" render={ () => <LoginContainer/>}/>
              </div>
            </div>
      );
    }
}

const mapStateToProps = (state) => ({
  initialized: state.app.inizialized
})

export default compose(
  connect(mapStateToProps, {initializeAppThunk}),
  withRouter)(App)
