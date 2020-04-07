import { connect } from 'react-redux';
import {logoutUser} from '../../actions/sessions/session_actions'
import Navbar from './navbar'

const msp = (state) => {
    return ({
        currentUser: state.entities.users[state.session.id]
    });
}

const mdp = dispatch => ({
    logoutUser: () => dispatch(logoutUser())
})

export default connect(msp, mdp)(Navbar);