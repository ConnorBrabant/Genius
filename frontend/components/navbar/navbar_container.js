import { connect } from 'react-redux';
import {logoutUser} from '../../actions/sessions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions'
import Navbar from './navbar'

const msp = (state) => {
    return ({
        currentUser: state.entities.users[state.session.id]
    });
}

const mdp = dispatch => ({
    logoutUser: () => dispatch(logoutUser()),
    openModal: (modal) => dispatch(openModal(modal))
})

export default connect(msp, mdp)(Navbar);