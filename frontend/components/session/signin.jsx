/* Notes
    -forgot password
    -sign up here -> pop up to sign in 
*/

import React from 'react';

class SignIn extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.resetInput = this.resetInput.bind(this);
    }

    update(type) {
        return (e) => this.setState({ [type]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.loginUser({ 'username': this.state['username'], password: this.state['password'] }).then(this.resetInput);
    }

    resetInput() {
        this.setState({
            username: '',
            password: '',
        })
    }

    render() {
        const errors = this.props.errors.map((error, i) => <li key={i}>{error}</li>)
        return (
            <div className='session-forms-page signin'>
                <h2 className='signin-main'>Sign In</h2>
                <ul>{errors}</ul>
                <form onSubmit={this.handleSubmit} className='signin-form'>
                    <label htmlFor='login' className='signin-child signin-label'>Ludicrous login or email</label>
                    <input id='login' className='signin-child' type='text' onChange={this.update('username')} value={this.state.username} />
                    <label htmlFor='password' className='signin-child signin-label'>Password</label>
                    <input id='password' className='signin-child' type='text' onChange={this.update('password')} value={this.state.password} />
                    <button className='signin-button signin-child' type='submit' >Login</button>
                </form>
                <div className='form-modal'>
                    <span className='signup-signin'>Don't have an account? </span>
                    <span className='signup-signin modal-link' onClick={() => this.props.openModal('signup')}> Sign up here.</span>
                </div>
            </div>
        )
    }
}

export default SignIn;