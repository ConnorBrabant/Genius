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
        this.props.closeModal();
    }

    showForm(errors) {
        const errorsSection = (errors.length > 0) ? (
            <section className='errors'>
                <div className='errors-header'>Whoops</div>
                <div className='errors-list'>
                    <p>There must be some mistake</p>
                    <ul>{errors}</ul>
                </div>
            </section>
        ) : (
            null
        )
        return (
            <form className='signup-form' onSubmit={this.handleSubmit} >
                {errorsSection}
                <label htmlFor='username' className='signin-child signin-label'>Ludicrous Nickname</label>
                <input id='username' className='signin-child' type='text' onChange={this.update('username')} value={this.state.username} />
                <label htmlFor='email' className='signup-child signin-label'>Email</label>
                <input id='email' className='signup-child' type='text' onChange={this.update('email')} value={this.state.email} />
                <label htmlFor='password' className='signup-child signin-label' >Password</label>
                <input id='password' className='signup-child' type='text' onChange={this.update('password')} value={this.state.password} />
                <p className='terms-p'>By clicking "Create Account", you are indicating that you have read and agree to the Terms of Service.</p>
                <button className='signup-button signup-child' type='submit'>Create Account</button>
            </form>
        )
    }

    render() {
        const errors = this.props.errors.map((error, i) => <li key={i}>{error}</li>)
        return (
            <div className='session-forms-page signin'>
                <h1 className='signup-main'>SIGN UP</h1>
                <h2 className='signup-secondary'>and show off your genius</h2>
                <button className='button form-button' onClick={() => this.state.formPresent ? this.setState({ formPresent: false }) : this.setState({ formPresent: true })}>Sign up with email</button>
                {this.state.formPresent ? this.showForm(errors) : null}
                <div className='modal-form'>
                    <span className='signup-signin'>Already have an account? </span>
                    <span className='signup-signin modal-link' onClick={() => this.props.openModal('signin')}>Sign in here.</span>
                </div>
            </div>
        )
    }
}

export default SignUp;