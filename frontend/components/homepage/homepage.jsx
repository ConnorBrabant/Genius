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

    render() {
        const jokesLI = this.props.jokes.map((joke, i) => {
            let route = this.formatRoute(joke.title, joke.comedian.name);
            return (
            <Link to={{
                    pathname: `/${route}`, 
                    state: {id: joke.id}
                }}>
            <ul className='chart-jokes' key={joke.id}>
            <li key={`${i}-id`} className='chart-element'>{joke.id}</li>
            <li key={`${i}-img`}><img className='chart-image' src={joke.image} alt='homepage pics'></img>
            </li>
            <li key={`${i}-title`} className='chart-element'>{joke.title}</li>
            <li key={`${i}-comedian`} className='chart-element'>{joke.comedian.name}</li>
            </ul>
            </Link>
            
        )});

        return (
            <div className='homepage'>
                <div className='chart-container'>
                    <h1 className='homepage-title'>CHARTS</h1>
                    <h2 className='homepage-trending'>trending on ludicrous</h2>
                    <div className='chart-list'>
                        {jokesLI}
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Homepage;

