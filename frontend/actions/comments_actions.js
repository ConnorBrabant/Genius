import * as CommentsUtil from '../util/comments';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';

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

export const fetchComments = (commentInfo, start) => dispatch => (
    CommentsUtil.fetchComments(commentInfo, start).then(comments => dispatch(receiveComments(comments)))
)

export const postComment = (comment) => dispatch => (
    CommentsUtil.postComment(comment).then(comment => dispatch(receiveComment(comment)))
);

export const updateComment = (comment) => dispatch => (
    CommentsUtil.updateComment(comment).then(comment => dispatch(receiveComment(comment)))
);

export const deleteComment = (commentId) => dispatch => (
    CommentsUtil.deleteComment(commentId).then(comment => dispatch(removeComment(comment)))
);