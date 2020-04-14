import { connect } from 'react-redux';
import CommentShow from './show_comment';
import { deleteComment, fetchComments } from '../../actions/comments_actions'

const msp = (state, ownProps) => {
    
    return ({
        currentUser: state.session.id, 
        commentableType: ownProps.commentableType,
        commentableId: ownProps.commentableId,
        comments: state.entities.comments
    });
    
}

const mdp = dispatch => ({
    deleteComment: (comment) => dispatch(deleteComment(comment)),
    fetchComments: (commentInfo, start) => dispatch(fetchComments(commentInfo, start))
})

export default connect(msp, mdp)(CommentShow);

