import { RECEIVE_COMMENT_ERRORS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../../actions/comments_actions'

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_COMMENT:
            return [];
        case REMOVE_COMMENT:
            return [];
        case RECEIVE_COMMENT_ERRORS:
            return action.errors;
        default:
            return state;
    }
}