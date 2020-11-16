import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Content from './components/Content/Content';

function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <Nav/>
      <Content/>
    </div>
  );
}

export default App;
