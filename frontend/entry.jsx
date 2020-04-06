import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import * as Util from './util/session'
import Root from './components/root'

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    //Testing 
    // window.store = store;
    // window.createUser = Util.postUser;
    // window.createSession = Util.postSession;
    // window.deleteSession = Util.deleteSession;
    //Testing
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root)
})