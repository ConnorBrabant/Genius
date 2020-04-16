import { RECEIVE_ANNOTATION_ERRORS, RECEIVE_ANNOTATION, REMOVE_ANNOTATION } from '../../actions/annotations_actions'

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ANNOTATION:
            return [];
        case REMOVE_ANNOTATION: 
            return [];
        case RECEIVE_ANNOTATION_ERRORS:
            return action.errors;
        default:
            return state;
    }
}