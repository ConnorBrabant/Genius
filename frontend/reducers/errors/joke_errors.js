import { RECEIVE_JOKE_ERRORS, RECEIVE_CURRENT_USER } from '../../actions/sessions/session_actions'
import { OPEN_MODAL, CLOSE_MODAL } from '../../actions/modal_actions'

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return [];
        case OPEN_MODAL:
            return [];
        case CLOSE_MODAL:
            return [];
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        default:
            return state;
    }
}