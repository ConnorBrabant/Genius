import { REMOVE_COMMENT, RECEIVE_COMMENT, RECEIVE_COMMENTS } from '../../actions/comments_actions'
import { RECEIVE_JOKE } from '../../actions/jokes_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_COMMENTS:
            return Object.assign({}, state, action.comments)
        case RECEIVE_COMMENT: 
            debugger
            return Object.assign({}, state, action.comment)
        case REMOVE_COMMENT:
            let newState = Object.assign({}, state);
            delete newState[Object.keys(action.commentId)[0]];
            debugger
            return newState;        
        case RECEIVE_JOKE:
            debugger
            return Object.assign({}, Object.values(action.joke)[0].comments)
        default: 
            return state;
    }
}