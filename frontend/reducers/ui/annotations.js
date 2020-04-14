import { OPEN_ANNOTATION, CLOSE_ANNOTATION } from '../../actions/annotations_actions'

export default (state = null, action) => {
    Object.freeze(state);
    switch (action.type) {
        case OPEN_ANNOTATION:
            return true;
        case CLOSE_ANNOTATION:
            return null;
        default:
            return state;

    }

}