import {connect} from 'react-redux';
import Homepage from './homepage'
import { logoutUser } from '../actions/sessions/session_actions'

const msp = (state) => {
    return ({
    currentUser: state.entities.users[state.session.id]
    });
}

const mdp = dispatch => ({
    logoutUser: () => dispatch(logoutUser)
})

export default connect(msp, mdp)(Homepage);