import { connect } from 'react-redux';
import AnnotationForm from './annotation_form'
import { postAnnotation } from '../../actions/annotations_actions'
import { closeModal } from '../../actions/modal_actions'

const msp = (state, ownProps) => {
    return ({
        formType: 'New',
        startIndex: ownProps.startIndex,
        endIndex: ownProps.endIndex,
        jokeId: ownProps.joke,
        closeAnnotation: ownProps.closeAnnotation
    })
};

const mdp = (dispatch) => ({
    postAnnotation: annotation => dispatch(postAnnotation(annotation)),
    closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(AnnotationForm)