import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Main from './components/main';

ReactDOM.render(
    <Main />
    , document.getElementById('root'));

registerServiceWorker();