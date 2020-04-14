import { OPEN_ANNOTATION } from "./annotations_actions";

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_ANNOTATION_MODAL = 'OPEN_ANNOTATION_MODAL'
export const openModal = (modal) => {
    return {
        type: OPEN_MODAL,
        modal
    }
};

export const openAnnotationModal = (params) => {
    return {
        type: OPEN_ANNOTATION_MODAL,
        params
    }
}

export const closeModal = () => {
    return {
        type: CLOSE_MODAL,
    }
}

