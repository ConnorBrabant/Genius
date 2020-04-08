import usersReducer from './users';
import jokesReducer from './jokes'
import { combineReducers } from 'redux';

export default combineReducers({
    users: usersReducer,
    jokes: jokesReducer
})