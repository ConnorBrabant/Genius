import React from 'react';
import SignUpContainer from './session/signup_container';
import Homepage from './homepage';
import { Route } from 'react-router-dom';

export default () => (
    <div>
        <Homepage />
        <Route path='/signup' component={SignUpContainer} />
    </div>
)