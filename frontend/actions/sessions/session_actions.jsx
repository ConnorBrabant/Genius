import * as SessionUtil from '../../util/session'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CUURENT_USER';

export const createUser = (user) => dispatch => (
    SessionUtil.postUser(user).then((user) => dispatch({
    type: RECEIVE_CURRENT_USER,
    user
}))
);

export const loginUser = (user) => dispatch => (
    SessionUtil.postSession(user).then(user => dispatch({
        type: RECEIVE_CURRENT_USER,
        user
    }))
);

export const logoutUser = () => dispatch => (
    SessionUtil.deleteSession().then(() => dispatch({
        type: LOGOUT_CURRENT_USER
    }))
);
