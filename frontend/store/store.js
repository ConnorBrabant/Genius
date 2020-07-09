import { applyMiddleware, createStore } from "redux";
import RootReducer from '../reducers/root'
import thunk from 'redux-thunk';
import logger from 'redux-logger';


export default (preloadedState = {}) => {
    let middleware = [thunk, logger];
    if (process.env.NODE_ENV === 'production') {
        middleware = [thunk];
    }
   return createStore(RootReducer, preloadedState, applyMiddleware(...middleware));
};1