import sessionErrorsReducer from './session_errors';
import jokeErrorsReducer from './joke_errors';
import commentErrorsReducer from './comment_errors';
import annotationErrorsReducer from './annotation_errors';
import { combineReducers } from 'redux';

export default combineReducers({
    session: sessionErrorsReducer,
    joke: jokeErrorsReducer,
    comment: commentErrorsReducer,
    annotation: annotationErrorsReducer
});