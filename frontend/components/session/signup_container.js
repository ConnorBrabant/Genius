import { connect } from 'react-redux';
import { createUser, loginUser } from '../../actions/sessions/session_actions'
import SignUp from './signup'
import { openModal, closeModal } from '../../actions/modal_actions'

const msp = (state) => ({
    errors: state.errors.session
})

const mdp = dispatch => ({
    createUser: (user) => dispatch(createUser(user)),
    loginUser: (user) => dispatch(loginUser(user)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
})

export default connect(msp, mdp)(SignUp);