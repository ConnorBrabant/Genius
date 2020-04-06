/* Notes
    -forgot password
*/

import React from 'react';

class SignIn extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.resetInput = this.resetInput.bind(this);
    }

    update(type) {
        return (e) => this.setState({ [type]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createUser(this.state).then(this.resetInput);
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
            <>
                <h1 className='signin main'>Sign In</h1>
                <ul>{errors}</ul>
                <form onSubmit={this.handleSubmit} >
                    <label>Ludicrous login or email
                        <input type='text' onChange={this.update('username')} value={this.state.username} />
                    </label>
                    <label>Password (I forgot my password)
                        <input type='text' onChange={this.update('password')} value={this.state.password} />
                    </label>
                    <p>By clicking "Create Account", you are indicating that
                    have read and agree to the Terms of Service.
                    </p>
                    <button type='submit'>Create Account</button>
                </form>
                <p>Already have an account? Sign in here.</p>

            </>
        )
    }
}
