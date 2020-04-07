import { connect } from 'react-redux';
import { createUser } from '../../actions/sessions/session_actions'
import SignUp from './signup'
import { openModal } from '../../actions/modal_actions'

const msp = (state) => ({
    errors: state.errors.session
})

const mdp = dispatch => ({
    createUser: (user) => dispatch(createUser(user)),
    openModal: modal => dispatch(openModal(modal))
})

export default connect(msp, mdp)(SignUp);