import { connect } from 'react-redux';
import { loginUser } from '../../actions/sessions/session_actions';
import { SignIn } from './signin';

const msp = (state) => ({
    errors: state.errors.session
})

const mdp = (dispatch) => ({
    loginUser: (user) => dispatch(loginUser(user))
})

export default connect(msp, mdp)(SignIn);
