import React from 'react';

class Joke extends React.Component {
   
    constructor (props) { 
        super(props)
        this.state = {
            joke: {
                image: '',
                title: '',
                comedian: '',
                joke: ''
            }
        }
    }

    componentDidMount() {
        if (!localStorage.getItem('joke')) {
            localStorage.setItem('joke', JSON.stringify(this.props.joke));
            this.setState({ joke: this.props.joke })
        } else {
            this.setState({ joke: JSON.parse(localStorage.getItem('joke')) })
        }
    }

    componentDidUpdate() {
        this.formatJoke();
    }

    formatJoke() {
        const jokeHTML = document.getElementById('formatJoke')
        const structureJoke = this.state.joke.joke.split(" ");
        const jokeWithBreaks = []
        for (let i = 0; i < structureJoke.length; i++) {
            if (structureJoke[i].includes('.')) {
                jokeWithBreaks.push(structureJoke[i]);
                jokeWithBreaks.push('<br></br>');
            } else {
                jokeWithBreaks.push(structureJoke[i])
            }
        }
        let formattedJoke = jokeWithBreaks.join(" ");
        jokeHTML.innerHTML = formattedJoke;
    }


    render () {
    return (
        <div className='show-whole'> 
            <div className='show-header'>
                <img className='show-image' src={this.state.joke.image}></img>
                <div className='show-info'>
                    <div className='show-title'>{this.state.joke.title}</div>
                    <div className='show-comedian'>{this.state.joke.comedian.name}</div>
                </div>
            </div>
            <div className='show-content'>
                <p id='formatJoke' className='show-description'></p>
                <div className='show-comments'>
                    Comments go here 
                </div>

            </div>
        </div>
    )
    }
}

export default Joke;