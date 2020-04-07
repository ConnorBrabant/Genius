/*NOTES FOR PAGE:
    -add terms of service link, sign in here.
    - google signup button?
    - render header/footer for page 
    */


import React from 'react';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            formPresent: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetInput = this.resetInput.bind(this);
    }

    update(type) {
        return (e) => this.setState( {[type]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createUser(this.state).then(this.resetInput);
    }

    resetInput() {
        this.setState({
            username: '',
            password: '',
            email: '',
        })
    }

    showForm() {
        return (
            <form className='signup-form' onSubmit={this.handleSubmit} >
                <label className='signup-child'>Ludicrous Nickname
                        <input className='signin-child' type='text' onChange={this.update('username')} value={this.state.username} />
                </label>
                <label className='signup-child'>Email
                        <input className='signup-child' type='text' onChange={this.update('email')} value={this.state.emailup} />
                </label>
                <label className='signup-child' >Password (I forgot my password)
                        <input className='signup-child' type='text' onChange={this.update('password')} value={this.state.password} />
                </label>
                <button className='signup-child' type='submit'>Login</button>
            </form>
        )
    }




    render() {
        const errors = this.props.errors.map((error, i) => <li key={i}>{error}</li>)
        return (
            <div className='session-forms signin'>
                <h1 className='signin main'>Sign Up</h1>
                <h2 className='sign in secondary'>and show off your genius</h2>
                <button onClick={() => this.state.formPresent ? this.setState({ formPresent: false }) : this.setState({ formPresent: true })}>Sign up with email</button>
                <ul>{errors}</ul>
                {this.state.formPresent ? this.showForm() : null}
                <p>Don't have an account? Sign up here.</p>
            </div>
        )
    }
}

export default SignUp;