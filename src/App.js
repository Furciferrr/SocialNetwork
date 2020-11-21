import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Content from './components/Content/Content';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
        <div className="app-wrapper">
          <Header/>
          <Nav state={props.state.bestFriends}/>
          <div className='app-wrapper-content'>
              <Route path="/profile" render={ () => <Content
                                         state={props.state.contentPage}
                                         addPost={props.addPost}/>}/>
              <Route path="/dialogs" render={ () => <Dialogs
                                         state={props.state.messagesPage}/>}/> 
              <Route path="/news" render={ () => <News/>}/>
              <Route path="/music" render={ () => <Music/>}/> 
              <Route path="/settings" render={ () => <Settings/>}/> 
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
