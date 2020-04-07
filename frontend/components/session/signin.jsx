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
            <div className='session-forms signup'>
                <h1 className='signin-main'>SIGN IN</h1>
                <ul>{errors}</ul>
                <form onSubmit={this.handleSubmit} className='signup-form'>
                    <label className='signin-child'>Ludicrous login or email
                        <input className='signin-child' type='text' onChange={this.update('username')} value={this.state.username} />
                    </label>
                    <label className='signin-child'>Password
                        <input className='signin-child' type='text' onChange={this.update('password')} value={this.state.password} />
                    </label>
                    <button className='signin-child' type='submit' >Login</button>
                </form>
                <p>Don't have an account? Sign up here.</p>
            </div>
        )
    }
}

export default SignIn;