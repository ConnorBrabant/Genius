import { REMOVE_COMMENT, RECEIVE_COMMENT } from '../../actions/comments_actions'

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_COMMENT: 
            return Object.assign({}, state, { [action.comment.id]: action.comment })
        case REMOVE_COMMENT:
            let newState = Object.assign({}, state);
            delete newState[Object.values(action.comments)[0]];
            return newState;
        default: 
            return state;
    }
}