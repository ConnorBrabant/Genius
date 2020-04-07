import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
    return (
    props.currentUser ? 
        <>
            <section className='navbar-main'>
                <p>search</p>
                <p className='navbar-title'>LUDICROUS</p>
                <ul>
                    <li className='nav iq'>EARN IQ</li>
                    <li className='nav messages'>MESSAGES</li>
                    <li className='nav me'>ME</li>
                    <li className='nav feed'>FEED</li>
                    <li className='nav forums'>FORUMS</li>
                    <button onClick={props.logoutUser}>Logout</button>
                </ul>
            </section>
        </>
        :
        <>
            <section className='navbar-main'>
                <p>search</p>
                <p className='navbar-title'>LUDICROUS</p>
                <div className='navbar-links'>
                    <Link to='/signup' className='session-link'>SIGN UP</Link>
                    <Link to='/login' className='session-link'>SIGN IN</Link>
                </div>
            </section>
        </>
    )
}