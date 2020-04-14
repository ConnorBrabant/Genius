import * as CommentsUtil from '../util/comments';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveComment = (comment) => ({
    type: RECEIVE_COMMENT,
    comment
});

const removeComment = (commentId) => ({
    type: RECEIVE_COMMENT,
    commentId
});

export const postComment = (comment) => dispatch => (
    CommentsUtil.postComment(comment).then(comment => dispatch(receiveComment(comment)))
);

export const updateComment = (comment) => dispatch => (
    CommentsUtil.updateComment(comment).then(comment => dispatch(receiveComment(comment)))
);

export const deleteComment = (commentId) => dispatch => (
    CommentsUtil.deleteComment(commentId).then(comment => dispatch(removeComment(comment)))
);