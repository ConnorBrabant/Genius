import usersReducer from './users';
import jokesReducer from './jokes';
import annotationsReducer from './annotations'
import commentsReducer from './comments'
import { combineReducers } from 'redux';

export default combineReducers({
    users: usersReducer,
    jokes: jokesReducer,
    annotations: annotationsReducer,
    comments: commentsReducer
})