import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import store from './redax/store';
import { BrowserRouter } from 'react-router-dom';

let rerenderEntireTree = () =>{

    ReactDOM.render(
      <BrowserRouter>
          <React.StrictMode>
            <App store={store}
                dispatch={store.dispatch.bind(store)}/>
          </React.StrictMode>
      </BrowserRouter>,
      document.getElementById('root')
    );
    }

    rerenderEntireTree(store);
    
    store.subscribe(rerenderEntireTree);
    
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
