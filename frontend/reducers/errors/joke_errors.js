import { RECEIVE_JOKE_ERRORS, RECEIVE_JOKE } from '../../actions/jokes_actions'

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_JOKE:
            return [];
        case RECEIVE_JOKE_ERRORS:
            return action.errors;
        default:
            return state;
    }
}