import { connect } from 'react-redux';
import AnnotationForm from './annotation_form'
import { postAnnotation } from '../../actions/annotations_actions'
import { closeModal } from '../../actions/modal_actions'

const msp = (state, ownProps) => {
    return ({
        formType: 'New',
        annotation: {
            startIndex: ownProps.startIndex,
            endIndex: ownProps.endIndex,
            jokeId: ownProps.joke,
            description: ''
        },
        closeForm: ownProps.closeForm
    })
};

const mdp = (dispatch) => ({
    action: annotation => dispatch(postAnnotation(annotation)),
});

export default connect(msp, mdp)(AnnotationForm)