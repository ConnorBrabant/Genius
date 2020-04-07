import { combineReducers } from 'redux';
import sessionReducer from './session';
import errorsReducer from './errors/errors'
import entitiesReducer from './entities/entities'
import uiReducer from './ui/ui'


export default combineReducers({
    session: sessionReducer,
    errors: errorsReducer,
    entities: entitiesReducer,
    ui: uiReducer
});