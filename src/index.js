import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {state} from "./store/store";

const rerender = (device = "full") => {
    ReactDOM.render(<App device = {device} isLogged = {state.logged} rerender={rerender}/>, document.getElementById('root'));
};

window.addEventListener('resize', () => {
    if (window.innerWidth < 720) rerender("small");
    else rerender("full");
});

if (window.innerWidth < 720)  ReactDOM.render(<App device = "small" isLogged = {state.logged} rerender={rerender}/>, document.getElementById('root'));
else ReactDOM.render(<App device = "full" isLogged = {state.logged} rerender={rerender}/>, document.getElementById('root'));


serviceWorker.unregister();
