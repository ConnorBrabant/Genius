import sessionErrorsReducer from './session_errors';
import { combineReducers } from 'redux';

export default combineReducers({
    session: sessionErrorsReducer
});