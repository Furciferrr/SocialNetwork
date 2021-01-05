import './App.css';
import React from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Nav/Nav';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ContainerNews from './components/News/conteinerNews';
import Music from './components/Music/Music';
import LoginContainer from './components/Login/Login';
import Settings from './components/Settings/Settings';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import ProfileContainerConnect from './components/Content/ProfileContainer'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initializeAppThunk } from './redax/app-reducer';
import Preloader from './components/common/preloader/preloader';
import withSuspense from './components/hoc/withSuspense';

const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));


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
                <Switch>
                  <Route exact path="/" render={ () => <Redirect to={'/profile'}/> }/>
                  <Route path="/profile/:userId?" render={ () => <ProfileContainerConnect/>}/>
                  <Route path="/dialogs" render={ () => <DialogsContainer
                         state={this.props.state}/>}/> 
                  <Route path="/news" render={ () => <ContainerNews/>}/>
                  <Route path="/music" render={ () => <Music/>}/> 
                  <Route path="/settings" render={ () => <Settings/>}/> 
                  <Route path="/users" render={ withSuspense(UsersContainer) }/> 
                  <Route path="/login" render={ () => <LoginContainer/>}/>
                  <Route path="*" render={ () => <div>404 NOT FOUND</div>}/>
                </Switch> 
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
