import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginControl from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);
registerServiceWorker();
