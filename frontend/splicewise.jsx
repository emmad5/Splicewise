import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {login} from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
    
    const root = document.getElementById('root');
    const store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = login;

    ReactDOM.render(<Root store={store} />, root);
});