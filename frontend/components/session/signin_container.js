import { connect } from 'react-redux';
import { loginUser } from '../../actions/sessions/session_actions';
import SignIn from './signin';
import { openModal, closeModal } from '../../actions/modal_actions'

const msp = (state) => ({
    errors: state.errors.session
})

const mdp = (dispatch) => ({
    loginUser: (user) => dispatch(loginUser(user)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
})

export default connect(msp, mdp)(SignIn);
