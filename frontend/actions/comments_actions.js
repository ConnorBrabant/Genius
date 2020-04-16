import * as CommentsUtil from '../util/comments';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS'

const receiveComments = (comments) => ({
    type: RECEIVE_COMMENTS,
    comments
})

const receiveComment = (comment) => ({
    type: RECEIVE_COMMENT,
    comment
});

const removeComment = (commentId) => ({
    type: REMOVE_COMMENT,
    commentId
});

const receiveErrors = errors => ({
    type: RECEIVE_COMMENT_ERRORS,
    errors
})

export const fetchComments = (commentInfo, start) => dispatch => (
    CommentsUtil.fetchComments(commentInfo, start).then(comments => dispatch(receiveComments(comments)), 
    errors => dispatch(receiveErrors(errors.responseJSON)))
)

export const postComment = (comment) => dispatch => (
    CommentsUtil.postComment(comment).then(comment => dispatch(receiveComment(comment)), 
    errors => dispatch(receiveErrors(errors.responseJSON)))
);

// export const omment = (comment) => dispatch => (
//     CommentsUtil.updateComment(comment).then(comment => dispatch(receiveComment(comment)), 
//     errors => dispatch(receiveErrors(errors.responseJSON)))
// );

export const deleteComment = (commentId) => dispatch => (
    CommentsUtil.deleteComment(commentId).then(comment => dispatch(removeComment(comment)), 
    errors => dispatch(receiveErrors(errors.responseJSON)))
);