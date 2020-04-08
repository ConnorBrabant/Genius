import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
    return (
    props.currentUser ? 
        <div className='navbar'>
            <section className='navbar-main'>
                <p>search</p>
                <Link exact to='/' className='navbar-title'>LUDICROUS</Link>
                <ul className='login-options'>
                    <li className='nav iq'>EARN IQ</li>
                    <li className='nav messages'>MESSAGES</li>
                    <li className='nav me'>ME</li>
                    <li className='nav feed'>FEED</li>
                    <li className='nav forums'>FORUMS</li>
                    <button onClick={props.logoutUser}>Logout</button>
                </ul>
            </section>
            <section className='navbar-menu'>
                <ul>
                    <li>FEATURED</li>
                    <li>CHARTS</li>
                    <li>VIDEOS</li>
                    <li>SHOP</li>
                    <li>FORUMS</li>
                    <li>ADD A SONG</li>
                    <li>ICONS</li>
                </ul>
            </section>
        </div>
        :
        <div className='navbar'>
            <section className='navbar-main'>
                <p>search</p>
                <Link to='/' className='navbar-title'>LUDICROUS</Link>
                <div className='navbar-links'>
                    <Link to='/signup' className='session-link'>SIGN UP</Link>
                    <Link to='/login' className='session-link'>SIGN IN</Link>
                </div>
            </section>
        </div>
    )


}