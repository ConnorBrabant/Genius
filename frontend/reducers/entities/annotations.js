import { RECEIVE_ANNOTATIONS, RECEIVE_ANNOTATION, REMOVE_ANNOTATION } from "../../actions/annotations_actions"
import { RECEIVE_JOKE } from '../../actions/jokes_actions'

const annotationsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ANNOTATION:
            return Object.assign({}, state, action.annotation.annotations);
        case RECEIVE_ANNOTATIONS:
            return Object.assign({}, action.annotation.annotations);
        case REMOVE_ANNOTATION:
            let newState = Object.assign({}, state);
            delete newState[Object.keys(action.annotation.annotations)[0]];er
            return newState;
        case RECEIVE_JOKE:
            return Object.assign({}, Object.values(action.joke)[0].annotations);
        default:
            return state;
    }
}

export default annotationsReducer;