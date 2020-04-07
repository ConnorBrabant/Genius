import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/sessions/session_actions'

const _nullSession = { id: null }

export default (state = _nullSession, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            const id = action.user.id
            return Object.assign({}, state, {id:id});
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        default:
            return state;
    }
};