import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';
import './assets/common.css'

const App = () => {
  return <Main></Main>;
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, 
  document.getElementById('root')
);
