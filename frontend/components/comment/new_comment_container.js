import CommentForm from './comment_form';
import { connect } from 'react-redux';
import { postComment } from '../../actions/comments_actions';

const msp = (state, ownProps) => ({
    commentableType: ownProps.commentableType,
    commentableId: ownProps.commentableId
})

const mdp = dispatch => ({
    action: (comment) => dispatch(postComment(comment))
});

export default connect(msp, mdp)(CommentForm);