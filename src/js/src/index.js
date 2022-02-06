import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';

const user ={
  firstName : "Sarim",
  lastName : "Siddiqui"
};

function format(user) {
  return user.firstName + ' ' + user.lastName;
}

let printUser10Times = () =>  {

    for (var i =0; i<10; i++){
      <h1>{format(this.user)}</h1>
    }
}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//ReactDOM.render(printUser10Times, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
