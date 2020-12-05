import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ContainerNews from './components/News/conteinerNews';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import { Route } from 'react-router-dom';
import ProfileContainerConnect from './components/Content/ProfileContainer'

function App(props) {
  return (
        <div className="app-wrapper">
          <Header/>
          <Nav state={props.state}/>
          <div className='app-wrapper-content'>
              <Route path="/profile/:userId?" render={ () => <ProfileContainerConnect/>}/>
              <Route path="/dialogs" render={ () => <DialogsContainer
              state={props.state}/>}/> 
              <Route path="/news" render={ () => <ContainerNews/>}/>
              <Route path="/music" render={ () => <Music/>}/> 
              <Route path="/settings" render={ () => <Settings/>}/> 
              <Route path="/users" render={ () => <UsersContainer/>}/> 
          </div>
        </div>
  );
}

export default App;
