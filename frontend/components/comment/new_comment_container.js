import CommentForm from './comment_form';
import { connect } from 'react-redux';
import { postComment } from 'react-redux';

const msp = (state) => {
}

const mdp = dispatch => ({
    action: (comment) => dispatch(postComment(comment))
});

export default connect(msp, mdp)(CommentForm);