import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import ShowpageContainer from '../joke/jokes_container'

class Homepage extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            jokes: '',
        }
        this.loadMoreJokes = this.loadMoreJokes.bind(this);
    }

    componentDidMount() {
        this.props.fetchJokes(0).then((jokes) => {
            let generatedJokes = this.generateJokes(jokes);
            this.setState({ jokes: generatedJokes })
        });
    }

    componentWillUnmount() {
        localStorage.removeItem('joke');
    }

    formatRoute(title, comedian) {
        let routeStart = comedian + " " + title;
        let routeSplit = routeStart.split(" ");
        let capitalize = routeSplit[0][0].toUpperCase() + routeSplit[0].slice(1).split("").map(ele => ele.toLowerCase()).join("");
        let lowerCase = routeSplit.slice(1).map(ele => ele.toLowerCase());
        let formattedRoute = [capitalize].concat(lowerCase);
        return formattedRoute.join("-") + "-transcripts"
    } 

    generateJokes(jokes, idx = 0) {
        const jokesLI = Object.values(jokes.jokes).map((joke, i) => {
            let route = this.formatRoute(joke.title, joke.comedian.name);
            return (
                <Link to={{
                    pathname: `/${route}`,
                    state: { id: joke.id}
                }}>
                    <ul className='chart-jokes' key={joke.id}>
                        <li key={`${i}-id`} className='chart-element'>{i + 1 + idx}</li>
                        <li key={`${i}-img`}><img className='chart-image' src={joke.image} alt='homepage pics'></img>
                        </li>
                        <li key={`${i}-title`} className='chart-element'>{joke.title}</li>
                        <li key={`${i}-comedian`} className='chart-element'>{joke.comedian.name}</li>
                    </ul>
                </Link>
            )
        });
        return jokesLI;
    }

    loadMoreJokes() {
        this.props.fetchJokes(this.state.jokes.length).then((jokes) => {
            let generatedJokes = this.generateJokes(jokes, this.state.jokes.length);
            this.setState({ jokes: this.state.jokes.concat(generatedJokes) })
        });
    }

    render() {
        return (
            <div className='homepage'>
                <div className='chart-container'>
                    <h1 className='homepage-title'>CHARTS</h1>
                    <h2 className='homepage-trending'>trending on ludicrous</h2>
                    <div id='main-chart' className='chart-list'>
                        {this.state.jokes}
                    </div>
                    <button className='load-button' onClick={this.loadMoreJokes}>Load More</button>
                </div>
            </div>
        )
    }
    
}

export default Homepage;

