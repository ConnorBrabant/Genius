import * as LikesUtil from '../util/likes'
import { RECEIVE_JOKE } from './jokes_actions'
import { RECEIVE_ANNOTATION} from './annotations_actions'

const receiveCommentLike = (comment) => ({
    type: 'RECEIVE_COMMENT',
    comment
});

const receiveAnnotationLike = (annotation) => ({
    type: 'RECEIVE_ANNOTATION',
    annotation
});

const removeCommentLike = (comment) => ({
    type: 'RECEIVE_COMMENT',
    comment
})

const removeAnnotationLike = (annotation) => ({
    type: 'RECEIVE_ANNOTATION',
    annotation
})

export const postCommentLike = (like) => dispatch => {
    return LikesUtil.postLike(like).then(comment => {
        return dispatch(receiveCommentLike(comment))
})};

export const postAnnotationLike = (like) => dispatch => (
    LikesUtil.postLike(like).then(annotation => dispatch(receiveAnnotationLike(annotation)))
);

export const updateCommentLike = (like) => dispatch => (
    LikesUtil.updateLike(like).then(comment => dispatch(receiveCommentLike(comment)))
);

export const updateAnnotationLike = (like) => dispatch => {
    return LikesUtil.updateLike(like).then(annotation => dispatch(receiveAnnotationLike(annotation)))
};

export const deleteCommentLike = (like) => dispatch => (
    LikesUtil.deleteLike(like).then(comment => dispatch(removeCommentLike(comment)))
);

export const deleteAnnotationLike = (like) => dispatch => (
    LikesUtil.deleteLike(like).then(annotation => dispatch(removeAnnotationLike(annotation)))
);

