import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let dialogData = [
  {id: 1, name: 'Dimych'},
  {id: 2, name: 'Masha'},
  {id: 3, name: 'Sveta'},
  {id: 4, name: 'Saha'},
  {id: 5, name: 'Vadim'}
]

let messagesData = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'How are you?'},
  {id: 3, message: 'What the fuck?'}
]

let postsData = [
  {id: '1', message:'Hi, bro..,', likeNumb: '32', avaLink: 'https://i.pinimg.com/170x/a1/9b/83/a19b83023cdb650a17623bf6bf456245.jpg'},
  {id: '1', message:'Hello world!', likeNumb: '20', avaLink: 'https://i.pinimg.com/170x/a1/9b/83/a19b83023cdb650a17623bf6bf456245.jpg'},
]

ReactDOM.render(
  <React.StrictMode>
    <App 
      dialogData={dialogData}
      messagesData={messagesData}
      postsData={postsData}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
