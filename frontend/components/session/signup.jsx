/*NOTES FOR PAGE:
    -add terms of service link, sign in here.
    - google signup button?
    - render header/footer for page 
    - add ul of errors
    */


import React from 'react';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetUser = this.resetUser.bind(this);
    }

    update(type) {
        return (e) => this.setState( {[type]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createUser(this.state).then(this.resetUser);
    }

    resetUser() {
        this.setState({
            username: '',
            password: '',
            email: '',
        })
    }

    render() {
        // const errors = this.props.errors.map((error, i) => <li key={i}>{error}</li>)
        return (
            <>
                <h1 className='signup main'>SIGN UP</h1>
                <h2 className='signup second'>and show off your genius</h2>
                <button id='signup form'>Sign up with email</button>
                <form onSubmit={this.handleSubmit} >
                    <label>Ludicrous Nickname
                        <input type='text' onChange={this.update('username')} value={this.state.username}  />
                    </label>
                    <label>Email
                        <input type='text' onChange={this.update('email')} value={this.state.email}  />
                    </label>
                    <label>Password 
                        <input type='text' onChange={this.update('password')} value={this.state.password}  />
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

export default SignUp;