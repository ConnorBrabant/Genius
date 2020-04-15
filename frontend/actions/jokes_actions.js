import * as JokesUtil from '../util/jokes';

export const RECEIVE_JOKES = 'RECEIVE_JOKES'
export const RECEIVE_JOKE = 'RECEIVE_JOKE';
export const REMOVE_JOKE = 'REMOVE_JOKE';
export const RECEIVE_JOKE_ERRORS = 'RECEIVE_JOKE_ERRORS'

const receiveJokes = (jokes) => ({
    type: RECEIVE_JOKES,
    jokes
})

const receiveJoke = (joke) => ({
    type: RECEIVE_JOKE,
    joke
})

const removeJoke = () => ({
    type: REMOVE_JOKE,
})

const receiveErrors = (errors) => ({
    type: RECEIVE_JOKE_ERRORS,
    errors
})
export const fetchJokes = (start) => dispatch => (
    JokesUtil.fetchJokes(start).then(jokes => dispatch(receiveJokes(jokes)),
    (errors) => dispatch(receiveErrors(errors.responseJSON)))
);

export const fetchJoke = (jokeId) => dispatch => (
    JokesUtil.fetchJoke(jokeId).then(joke => dispatch(receiveJoke(joke)), 
        (errors) => dispatch(receiveErrors(errors.responseJSON)))
);

export const postJoke = (joke) => dispatch => (
    JokesUtil.postJoke(joke).then(joke => dispatch(receiveJoke(joke)),
        (errors) => dispatch(receiveErrors(errors.responseJSON)))
);

export const updateJoke = (joke) => dispatch => (
    JokesUtil.updateJoke(joke).then(joke => dispatch(receiveJoke(joke)),
        (errors) => dispatch(receiveErrors(errors.responseJSON)))
);

export const deleteJoke = (jokeId) => dispatch => (
    JokesUtil.deleteJoke(jokeId).then(() => dispatch(removeJoke()),
        (errors) => dispatch(receiveErrors(errors.responseJSON)))
);
