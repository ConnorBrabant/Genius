import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import * as Util from './util/session'
import Root from './components/root'

document.addEventListener('DOMContentLoaded', () => {
    
    //Testing 
    // window.store = store;
    // window.createUser = Util.postUser;
    // window.createSession = Util.postSession;
    // window.deleteSession = Util.deleteSession;
    // Testing
    
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
            };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root)
})