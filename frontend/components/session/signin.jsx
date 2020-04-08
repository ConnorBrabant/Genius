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
        this.demoUser = this.demoUser.bind(this);
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
        this.props.closeModal();
    }

    renderErrors(errors) {
        return (
        (errors.length > 0) ? (
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
        )
    }

    demoUser() {
        this.props.loginUser({ 'username': 'demo', password: 'demopassword' }).then(this.resetInput);
    }
    
    render() {
        const errors = this.props.errors.map((error, i) => <li key={i}>{error}</li>)
        return (
            <div className='session-forms-page signin'>
                <h2 className='signin-main'>Sign In</h2>
                <form onSubmit={this.handleSubmit} className='signin-form'>
                    {this.renderErrors(errors)}
                    <label htmlFor='login' className='signin-child signin-label'>Ludicrous login or email</label>
                    <input id='login' className='signin-child' type='text' onChange={this.update('username')} value={this.state.username} />
                    <label htmlFor='password' className='signin-child signin-label'>Password</label>
                    <input id='password' className='signin-child' type='text' onChange={this.update('password')} value={this.state.password} />
                    <div className='align-demo'>
                        <button className='signin-button signin-child' type='submit' >Login</button>
                        <button className='signin-button' onClick={this.demoUser} >Demo</button>
                    </div>
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