import { combineReducers } from 'redux';
import modalsReducer from './modals';
import annotationModalsReducer from './annotations';

export default combineReducers({
    modal: modalsReducer,
});