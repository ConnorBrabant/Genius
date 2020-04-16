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

    formatRoute(title, comedian) {
        let routeStart = comedian + " " + title;
        let routeSplit = routeStart.split(" ");
        let capitalize = routeSplit[0][0].toUpperCase() + routeSplit[0].slice(1).split("").map(ele => ele.toLowerCase()).join("");
        let lowerCase = routeSplit.slice(1).map(ele => ele.toLowerCase());
        let formattedRoute = [capitalize].concat(lowerCase);
        return formattedRoute.join("-") + "-transcripts"
    } 

    handleSubmit(e) {

        e.preventDefault();
        this.props.postJoke(this.state).then((joke) => {
            let key = Object.keys(joke.joke)[0];
            let jokeObj = joke.joke[key]
            this.props.history.push(this.formatRoute(jokeObj.title, jokeObj.comedian.name))
        })
        // this.props.postJoke(this.state).then(joke => this.props.history.push('/'))
    }

    update(type) {
        return (e) => this.setState({ [type]: e.target.value })
    }

    renderErrors() {
        if (this.props.errors) {
            debugger 
        }
    }

    render() {
    let titleError = [];
    let jokeError = [];
    let comedianError = [];
    this.props.errors.forEach(error => {
        if (error.includes('Title')) {
            titleError = 'This field is required'
        } else if (error.includes('Joke')) {
            jokeError = 'This field is required'
        } else if (error.includes('Comedian')) {
            comedianError = 'This field is required'
        }
    })
    debugger
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
                        <input id='by' className={this.props.errors.length ? 'newform-input-text nj-errors' : 'newform-input-text'} type='text' placeholder='The primary comedian, author, etc' onChange={this.update('comedian')} value={this.state.comedian} />
                    </div>
                    <div className='new-joke-errors'>{comedianError}</div>
                    <label htmlFor='title' className='newform-label'>TITLE *</label>
                    <div className='input-push'>
                        <input id='title' className={this.props.errors.length ? 'newform-input-text nj-errors' : 'newform-input-text'} type='text' placeholder='Title' onChange={this.update('title')} value={this.state.title} />
                    </div>
                    <div className='new-joke-errors'>{titleError}</div>
                    <label htmlFor='joke' className='newform-label'>JOKES *</label>
                    <div className='input-push'>
                        <textarea id='joke' className={this.props.errors.length ? 'newform-input-text nj-errors' : 'newform-input-text'} onChange={this.update('joke')} value={this.state.joke} />
                    </div>
                    <div className='new-joke-errors'>{jokeError}</div>
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