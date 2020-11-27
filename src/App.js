import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Content from './components/Content/Content';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';

function App(props) {
  return (
        <div className="app-wrapper">
          <Header/>
          <Nav state={props.store.getState()}/>
          <div className='app-wrapper-content'>
              <Route path="/profile" render={ () => <Content
                                         state={props.store.getState()}
                                         store={props.store}
                                         dispatch={props.dispatch}/>}/>
              <Route path="/dialogs" render={ () => <DialogsContainer
                                         store={props.store}/>}/> 
              <Route path="/news" render={ () => <News/>}/>
              <Route path="/music" render={ () => <Music/>}/> 
              <Route path="/settings" render={ () => <Settings/>}/> 
          </div>
        </div>
  );
}

export default App;
