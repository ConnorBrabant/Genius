import React from 'react';
import { Route } from 'react-router-dom';
import SignUpContainer from './session/signup_container';
import SignInContainer from './session/signin_container'
import HomepageContainer from './homepage_container';
import NavbarContainer from './navbar/navbar_container'
import Modal from './modal'
import { AuthRoute, ProtectedRouter } from '../util/route_utils'


export default () => (
    <div className='application'>
        <Modal />
        <Route path='/' component={NavbarContainer}  />
        <Route exact path='/' component={HomepageContainer} />
        <AuthRoute path='/signup' component={SignUpContainer} />
        <AuthRoute path='/login' component={SignInContainer} />
    </div>
)