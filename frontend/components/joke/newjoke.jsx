import React from 'react';

class NewJoke extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            comedian: '',
            joke: '',
            image: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.postJoke(this.state).then(this.props.history.push('/'))
    }

    update(type) {
        return (e) => this.setState({ [type]: e.target.value })
    }

    render() {

    return (
        <div className='new-joke-page'>
            <div className='new-joke-content'>
                <div className='new-joke-header '>
                    <h3 className='new-joke-title'>Add Joke</h3>
                    <div className='info-required'>
                        <p>Primary info</p>
                        <p className='required-text'>* required</p>
                    </div>
                </div>
                <form className='new-joke-form' onSubmit={this.handleSubmit}>
                    <label htmlFor='by' className='newform-label'>BY *</label>
                    <div className='input-push'>
                        <input id='by' className='newform-input-text' type='text' placeholder='The primary comedian, author, etc' onChange={this.update('comedian')} value={this.state.comedian} />
                    </div>
                    <label htmlFor='title' className='newform-label'>TITLE *</label>
                    <div className='input-push'>
                        <input id='title' className='newform-input-text' type='text' placeholder='Title' onChange={this.update('title')} value={this.state.title} />
                    </div>
                    <label htmlFor='joke' className='newform-label'>JOKES *</label>
                    <div className='input-push'>
                        <textarea id='joke' className='newform-input' onChange={this.update('joke')} value={this.state.joke} />
                    </div>
                    <h3 className='new-joke-meta'>Additional Metadata</h3>
                    <label className='newform-label' htmlFor='image'>IMAGE</label>
                    <div className='input-push image'>
                        <input id='image' type='text' className='newform-input-text new-image' onChange={this.update('image')} value={this.state.image} />
                    </div>
                    <button type='submit' className='new-joke-button'>Submit</button>
                </form>
            </div>
        </div>
    )
    }

}

export default NewJoke;