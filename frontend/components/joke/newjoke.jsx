import React from 'react';

class NewJoke extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            comedian: '',
            joke: '',
            image: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
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
        const formData = new FormData();
        formData.append('joke[title]', this.state.title);
        formData.append('joke[comedian]', this.state.comedian);
        formData.append('joke[joke]', this.state.joke);
        formData.append('joke[photo]', this.state.image);
        this.props.postJoke(formData).then((joke) => {
            let key = Object.keys(joke.joke)[0];
            let jokeObj = joke.joke[key]
            this.props.history.push(this.formatRoute(jokeObj.title, jokeObj.comedian.name))
        })
        // this.props.postJoke(this.state).then(joke => this.props.history.push('/'))
    }

    handleFile(e) {
        debugger
        return (e) => this.setState({ image: e.currentTarget.files[0] });
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
                        <input id='image' type='file' className='newform-input-text new-image' onChange={this.handleFile('image')} />
                    </div>
                    <button type='submit' className='new-joke-button'>Submit</button>
                </form>
            </div>
        </div>
    )
    }

}

export default NewJoke;