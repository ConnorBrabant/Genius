import * as AnnotationsUtil from '../util/annotations'

export const RECEIVE_ANNOTATIONS = 'RECEIVE_ANNOTATIONS'
export const RECEIVE_ANNOTATION = 'RECEIVE_ANNOTATION'
export const REMOVE_ANNOTATION = 'REMOVE_ANNOTATION'
export const OPEN_ANNOTATION = 'OPEN_ANNOTATION'
export const CLOSE_ANNOTATION = 'CLOSE_ANNOTATION'

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

export const postAnnotation = (annotation) => dispatch => (
    AnnotationsUtil.postAnnotation(annotation).then(annotation => dispatch(receiveAnnotation(annotation)))
);

export const updateAnnotation = (annotation) => dispatch => (
    AnnotationsUtil.updateAnnotation(annotation).then(annotation => dispatch(receiveAnnotation(annotation)))
);

export const deleteAnnotation = (annotationId) => dispatch => (
    AnnotationsUtil.deleteAnnotation(annotationId).then((annotation) => dispatch(removeAnnotation(annotation)))
);