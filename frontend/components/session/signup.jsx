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
        this.demoUser = this.demoUser.bind(this);
    }

    update(type) {
        return (e) => this.setState( {[type]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.username === '') {

        }
        this.props.createUser(this.state).then(this.props.closeModal);
    }

    demoUser(e) {
        e.preventDefault();
        this.props.loginUser({ 'username': 'demo', 'password': 'demopassword' }).then(this.props.closeModal);
    }

    showForm(errors) {
        let usernameEmpty;
        let emailEmpty;
        let passwordEmpty;
        let filteredErrors = errors.filter((error) => { 
            if (error !== 'Email is invalid' && error !== "Username can't be blank" && error !== "Enter a password") {
                return error;
            } else if (error === 'Email is invalid') {
                emailEmpty = 'Enter your email address';
            } else if (error === "Username can't be blank") {
                usernameEmpty = 'Enter a nickname';
            } else if (error === 'Enter a password')
                passwordEmpty = error;
        })
        const renderErrors = filteredErrors.map((error, i) => <li key={i}>{error}</li>)
        const errorsSection = (renderErrors.length > 0) ? (
            <section className='errors'>
                <div className='errors-header'>Whoops</div>
                <div className='errors-list'>
                    <p>There must be some mistake</p>
                    <ul>{renderErrors}</ul>
                </div>
            </section>
        ) : (
            null
        )
        return (
            <form className='signup-form' onSubmit={this.handleSubmit} >
                {errorsSection}
                <label htmlFor='username' className='signin-child signin-label'>Ludicrous Nickname</label>
                <input id='username' className={errors.includes("Username can't be blank") ? 'signup-errors' : 'signin-child'} type='text' onChange={this.update('username')} value={this.state.username} />
                <div className="signup-error-text">{usernameEmpty}</div>
                <label htmlFor='email' className='signup-child signin-label'>Email</label>
                <input id='email' className={errors.includes("Email is invalid") ? 'signup-errors' : 'signin-child'} type='text' onChange={this.update('email')} value={this.state.email} />
                <div className="signup-error-text">{emailEmpty}</div>
                <label htmlFor='password' className='signup-child signin-label' >Password</label>
                <input id='password' className={errors.includes("Enter a password") ? 'signup-errors' : 'signin-child'} type='password' onChange={this.update('password')} value={this.state.password} />
                <div className="signup-error-text">{passwordEmpty}</div>
                <p className='terms-p'>By clicking "Create Account", you are indicating that you have read and agree to the Terms of Service.</p>
                <div className='align-demo'>
                    <button className='signup-button signup-child' type='submit'>Create Account</button>
                    <button className='signup-button' onClick={(e) => this.demoUser(e)} >Demo</button>
                </div>
            </form>
        )
    }

    render() {
        return (
            <div className='session-page'>
            <div className='session-forms-page signin'>
                <h1 className='signup-main'>SIGN UP</h1>
                <h2 className='signup-secondary'>and see if you got jokes</h2>
                <button className='button form-button' onClick={() => this.state.formPresent ? this.setState({ formPresent: false }) : this.setState({ formPresent: true })}>
                    <i className="fas fa-envelope"></i>
                    Sign up with email
                </button>
                {this.state.formPresent ? this.showForm(this.props.errors) : null}
                <div className='modal-form'>
                    <span className='signup-signin'>Already have an account? </span>
                    <span className='signup-signin modal-link' onClick={() => this.props.openModal('signin')}>Sign in here.</span>
                </div>
            </div>
            </div>
        )
    }
}

export default SignUp;