import { Redirect } from 'react-router-dom';
import React from 'react';

class Homepage extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>Ludicrous</h1>
                <Redirect to='/signup'>Sign Up</Redirect>
            </>
        )
    }
}

export default Homepage;