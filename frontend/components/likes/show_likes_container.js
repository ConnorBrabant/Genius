import { connect } from 'react-redux';
import Likes from './show_likes';
import { updateCommentLike, updateAnnotationLike, postCommentLike, postAnnotationLike, deleteCommentLike, deleteAnnotationLike} from '../../actions/likes_actions'

const msp = (state, ownProps) => {
    return ({
    currentUser: state.session.id,
    likableType: ownProps.likableType,
    likableId: ownProps.likableId,
    likes: ownProps.likes})
}

const mdp = dispatch => ({
    postCommentLike: (like) => dispatch(postCommentLike(like)),
    postAnnotationLike: (like) => dispatch(postAnnotationLike(like)),
    updateCommentLike: (like) => dispatch(updateCommentLike(like)),
    updateAnnotationLike: (like) => dispatch(updateAnnotationLike(like)),
    deleteCommentLike: (like) => dispatch(deleteCommentLike(like)),
    deleteAnnotationLike: (like) => dispatch(deleteAnnotationLike(like))
})

export default connect(msp, mdp)(Likes);