import * as AnnotationsUtil from '../util/annotations'

export const RECEIVE_ANNOTATIONS = 'RECEIVE_ANNOTATIONS'
export const RECEIVE_ANNOTATION = 'RECEIVE_ANNOTATION'
export const REMOVE_ANNOTATION = 'REMOVE_ANNOTATION'
export const RECEIVE_ANNOTATION_ERRORS = 'RECEIVE_ANNOTATION_ERRORS'

const receiveAnnotations = (annotations) => ({
    type: RECEIVE_ANNOTATIONS,
    annotations
})

const receiveAnnotation = (annotation) => ({
    type: RECEIVE_ANNOTATION,
    annotation
})

const removeAnnotation = (annotation) => ({
    type: REMOVE_ANNOTATION,
    annotation
})

const receiveErrors = errors => ({
    type: RECEIVE_ANNOTATION_ERRORS,
    errors
})

export const fetchAnnotations = (jokeId) => dispatch => (
    AnnotationsUtil.fetchAnnotations(jokeId).then(annotations => dispatch(receiveAnnotations(annotations)), 
        errors => dispatch(receiveErrors(errors.responseJSON)))
)

export const postAnnotation = (annotation) => dispatch => (
    AnnotationsUtil.postAnnotation(annotation).then(annotation => dispatch(receiveAnnotation(annotation)),
        errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const updateAnnotation = (annotation) => dispatch => (
    AnnotationsUtil.updateAnnotation(annotation).then(annotation => dispatch(receiveAnnotation(annotation)),
        errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const deleteAnnotation = (annotationId) => dispatch => (
    AnnotationsUtil.deleteAnnotation(annotationId).then((annotation) => dispatch(removeAnnotation(annotation)),
        errors => dispatch(receiveErrors(errors.responseJSON)))
);