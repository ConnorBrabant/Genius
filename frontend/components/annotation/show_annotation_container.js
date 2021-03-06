import { connect } from 'react-redux';
import AnnotationShow from './show_annotation'
import { deleteAnnotation, updateAnnotation } from '../../actions/annotations_actions' 

const msp = (state, ownProps) => {
    return ({
        annotation: state.entities.annotations[ownProps.annotation] ? state.entities.annotations[ownProps.annotation] : '',
        currentUser: state.session.id,
        closeAnnotation: ownProps.closeAnnotation,
    })
}

const mdp = dispatch => ({
    deleteAnnotation: (id) => dispatch(deleteAnnotation(id)),
    updateAnnotation: (annotation) => dispatch(updateAnnotation(annotation))
})

export default connect(msp, mdp)(AnnotationShow)