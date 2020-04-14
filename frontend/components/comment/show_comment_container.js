import { connect } from 'react-redux';
import CommentShow from './show_comment';
import { deleteComment } from '../../actions/comments_actions'

const msp = (state, ownProps) => ({
    currentUser: state.session.id, 
    commentableType: ownProps.commentableType,
    commentableId: ownProps.commentableId,
    comments: ownProps.comments
    
})

const mdp = dispatch => ({
    deleteComment: (commentId) => dispatch(deleteComment(commentId))
})

export default connect(msp, mdp)(CommentShow);

