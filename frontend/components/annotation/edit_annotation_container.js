import { connect } from 'react-redux';
import AnnotationForm from './annotation_form'
import { updateAnnotation } from '../../actions/annotations_actions'
import { closeModal } from '../../actions/modal_actions'

const msp = (state, ownProps) => {
    return ({
        formType: 'Edit',
        annotation: {
            id: ownProps.annotation.id,
            jokeId: ownProps.annotation.joke_id,
            description: ownProps.annotation.description
        },
        closeForm: ownProps.closeForm,
    })
};

const mdp = (dispatch) => ({
    action: annotation => dispatch(updateAnnotation(annotation)),
});

export default connect(msp, mdp)(AnnotationForm)