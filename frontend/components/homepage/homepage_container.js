import {connect} from 'react-redux';
import Homepage from './homepage'
import { logoutUser } from '../../actions/sessions/session_actions'
import { fetchJokes } from '../../actions/jokes_actions'

const msp = (state) => {
    return ({
    currentUser: state.entities.users[state.session.id],
    jokes: Object.keys(state.entities.jokes).map(key => state.entities.jokes[key])
    })}

const mdp = dispatch => ({
    logoutUser: () => dispatch(logoutUser),
    fetchJokes: (start) => dispatch(fetchJokes(start))
})

export default connect(msp, mdp)(Homepage);