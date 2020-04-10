import { connect } from 'react-redux';
import { postJoke } from '../../actions/jokes_actions'
import NewJoke from './newjoke'

const mdp = dispatch => ({
    postJoke: (joke) => dispatch(postJoke(joke))
})

export default connect(null, mdp)(NewJoke);


