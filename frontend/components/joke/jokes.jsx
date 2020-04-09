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
        }}

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
                <div className='show-description'>
                    {this.state.joke.joke}
                </div>
                <div className='show-comments'>
                    Comments go here 
                </div>

            </div>
        </div>
    )
    }
}

export default Joke;