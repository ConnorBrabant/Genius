import { connect } from 'react-redux';
import CommentShow from './show_comment';
import { deleteComment } from '../../actions/comments_actions'

const msp = (state, ownProps) => ({
    currentUser: state.session.id, 
})

const mdp = dispatch => ({
    deleteComment: (commentId) => dispatch(deleteComment(commentId))
})

export default connect(msp, mdp)(CommentShow);

