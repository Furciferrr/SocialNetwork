import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import store from './redax/redux-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'

let rerenderEntireTree = () =>{
    ReactDOM.render(
      <BrowserRouter>
          <Provider store={store}>
              <React.StrictMode>
                <App state={store.getState()}/>
              </React.StrictMode>
          </Provider>
      </BrowserRouter>,
      document.getElementById('root')
    );
    }

    rerenderEntireTree();
    
    store.subscribe(() => {
      rerenderEntireTree()
    });
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
