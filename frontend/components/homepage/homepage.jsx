import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import ShowpageContainer from '../joke/jokes_container'

class Homepage extends React.Component {
    constructor (props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchJokes();
    }

    formatRoute(title, comedian) {
        let routeStart = comedian + " " + title;
        let routeSplit = routeStart.split(" ");
        let capitalize = routeSplit[0][0].toUpperCase() + routeSplit[0].slice(1).split("").map(ele => ele.toLowerCase()).join("");
        let lowerCase = routeSplit.slice(1).map(ele => ele.toLowerCase());
        let formattedRoute = [capitalize].concat(lowerCase);
        return formattedRoute.join("-") + "-transcripts"
    } 

    render() {
        const jokesLI = this.props.jokes.map((joke, i) => {
            let route = this.formatRoute(joke.title, joke.comedian.name);
            return (
            <Link to={{
                    pathname: `/${route}`, 
                    state: {id: joke.id}
                }}>
            <ul className='chart-jokes' key={joke.id}>
            <li className='chart-element'>{joke.id}</li>
            <li className='chart-element'>{joke.title}</li>
            <li className='chart-element'>{joke.comedian.name}</li>
            </ul>
            </Link>
            
        )});

        return (
            <div className='homepage'>
                <h1 className='homepage-title'>CHARTS</h1>
                <div className='chart-list'>
                    {jokesLI}
                </div>
            </div>
        )
    }
    
}

export default Homepage;

