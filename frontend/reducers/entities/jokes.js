import { RECEIVE_JOKES, RECEIVE_JOKE, REMOVE_JOKE } from '../../actions/jokes_actions'

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_JOKES:
            // let newJokes = {};
            // action.jokes.forEach((ele, i) => newJokes[i + Object.keys(state).length] = action.jokes[i])
            return Object.assign({}, state, action.jokes);
        case RECEIVE_JOKE:
            // debugger
            // let newJoke = {};
            // newJoke[Object.keys(state).length] = action.joke;
            return Object.assign({}, state, action.joke)
        case REMOVE_JOKE:
            let newState = Object.assign({}, state);
            delete newState[action.jokeId];
            return newState;
        // case 'RESET_STATE':
        //     return {};
        default:
            return state;
    }
}