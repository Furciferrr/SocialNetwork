import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import {addPost, onChengeMes} from './redax/state';
import state, {subscribe} from './redax/state';


let rerenderEntireTree = (state) =>{

    ReactDOM.render(
      <React.StrictMode>
        <App state={state}
             addPost={addPost}
             onChengeMes={onChengeMes}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
    }

    rerenderEntireTree(state);

    subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
