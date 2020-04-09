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

export const fetchJokes = () => dispatch => (
    JokesUtil.fetchJokes().then(jokes => dispatch(receiveJokes(jokes)))
);

export const fetchJoke = (jokeId) => dispatch => (
    JokesUtil.fetchJoke(jokeId).then(joke => dispatch(receiveJoke(joke)))
);

export const postJoke = (joke) => dispatch => (
    JokesUtil.postJoke(joke).then(joke => dispatch(receiveJoke(joke)))
);

export const updateJoke = (joke) => dispatch => (
    JokesUtil.updateJoke(joke).then(joke => dispatch(receiveJoke(joke)))
);

export const deleteJoke = (jokeId) => dispatch => (
    JokesUtil.deleteJoke(jokeId).then(() => dispatch(removeJoke()))
);
