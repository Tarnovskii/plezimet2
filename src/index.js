import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

if (window.innerWidth < 720)  ReactDOM.render(<App device = "small"/>, document.getElementById('root'));
else ReactDOM.render(<App device = "full"/>, document.getElementById('root'));

window.addEventListener('resize', () => {
    if (window.innerWidth < 720)  ReactDOM.render(<App device = "small"/>, document.getElementById('root'));
    else ReactDOM.render(<App device = "full"/>, document.getElementById('root'));
});

serviceWorker.unregister();
