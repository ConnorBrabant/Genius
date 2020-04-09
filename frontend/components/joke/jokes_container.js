import { connect } from 'react-redux';
import { updateJoke, deleteJoke, fetchJoke } from '../../actions/jokes_actions'
import Jokes from './jokes'

const msp = (state, ownProps) => {
    if (Object.keys(state.entities.jokes).length) {
        return ({
            joke: state.entities.jokes[ownProps.location.state.id]
    })}  else {
        return ( null )
    }

}

const mdp = dispatch => ({
    updateJoke: (joke) => dispatch(updateJoke(joke)),
    deleteJoke: (jokeId) => dispatch(deleteJoke(jokeId)),
    fetchJoke: (jokeId) => dispatch(fetchJoke(jokeId))
})

export default connect(msp, mdp)(Jokes);