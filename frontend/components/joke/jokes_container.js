import { connect } from 'react-redux';
import { updateJoke, deleteJoke, fetchJoke } from '../../actions/jokes_actions'
import Jokes from './jokes'
import { openAnnotationModal, closeModal } from '../../actions/modal_actions'

const msp = (state, ownProps) => {
    if (ownProps.location.state) {
        return ({
            joke: state.entities.jokes[ownProps.location.state.id],
            annotations: Object.values(state.entities.annotations)
        })
    } else if (Object.keys(state.entities.jokes).length) {
        return({
            joke: Object.values(state.entities.jokes)[Object.keys(state.entities.jokes).length - 1],
            annotations: Object.values(state.entities.annotations)
        });
    }
}

const mdp = dispatch => ({
    updateJoke: (joke) => dispatch(updateJoke(joke)),
    deleteJoke: (jokeId) => dispatch(deleteJoke(jokeId)),
    fetchJoke: (jokeId) => dispatch(fetchJoke(jokeId)),
    openModal: (params) => dispatch(openAnnotationModal(params)),
    closeModal: () => dispatch(closeModal())
})

export default connect(msp, mdp)(Jokes);