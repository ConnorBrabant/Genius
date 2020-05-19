import { REMOVE_COMMENT, RECEIVE_COMMENT, RECEIVE_COMMENTS } from '../../actions/comments_actions'
import { RECEIVE_JOKE, RECEIVE_JOKES } from '../../actions/jokes_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_COMMENTS:
            return Object.assign({}, state, action.comments)
        case RECEIVE_COMMENT:
            let dupState = Object.assign({}, state);
            let stateLength = Object.values(state).length;
            for (let i = 0; i < stateLength; i++) {
                if (dupState[i].id == action.comment.id) {
                    dupState[i] = action.comment;
                    return Object.assign({}, dupState);
                }
            }
            let newComment = {};
            newComment[Object.keys(state).length] = action.comment;
            return Object.assign({}, state, newComment);
        case REMOVE_COMMENT:
            let newState = Object.assign({}, state);
            for (let i = 0; i < Object.keys(newState).length; i++) {
                if (newState[i].id == action.commentId.id) {
                    delete newState[i]
                }
            }
            return newState;        
        case RECEIVE_JOKE:
            return Object.assign({}, Object.values(action.joke)[0].comments)
        case RECEIVE_JOKES:
            return {};
        default: 
            return state;
    }
}