import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
    if (props.currentUser) {
        return (
        <div className='navbar'>
            <section className='navbar-main'>
                <p>search</p>
                <Link to='/' onClick={(props.resetState)} className='navbar-title'>LUDICROUS</Link>
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
                    <li className='nav featured'>FEATURED</li>
                    <li className='nav charts'>CHARTS</li>
                    <li className='nav videos'>VIDEOS</li>
                    <li className='nav shop'>SHOP</li>
                    <li className='nav forums'>FORUMS</li>
                    <li className='nav new'>
                        <Link className='newjokelink' to='/new'>ADD A JOKE</Link>
                    </li>
                    <li className='nav icons'>ICONS</li>
                </ul>
            </section>
        </div>
        )
    } else if (props.location.pathname === '/signup' || props.location.pathname === '/login') {
        return (
            <div className='navbar'>
                <section className='navbar-main'>
                    <p>search</p>
                    <Link to='/' className='navbar-title'>LUDICROUS</Link>
                    <div className='navbar-links'>
                        <a onClick={() => props.openModal('signup')} className='session-link session-hover'>SIGN UP</a>
                        <a onClick={() => props.openModal('signin')} className='session-link session-hover'>SIGN IN</a>
                    </div>
                </section>
                <section className='navbar-menu'>
                    <ul>
                        <li className='nav featured'>FEATURED</li>
                        <li className='nav charts'>CHARTS</li>
                        <li className='nav videos'>VIDEOS</li>
                        <li className='nav shop'>SHOP</li>
                        <li className='nav forums'>FORUMS</li>
                        <li className='nav icons'>ICONS</li>
                    </ul>
                </section>
            </div>
        )
    } else { 
        return (
            <div className='navbar'>
                <section className='navbar-main'>
                    <p>search</p>
                    <Link to='/' className='navbar-title'>LUDICROUS</Link>
                    <div className='navbar-links'>
                        <Link to='/signup' className='session-link'>SIGN UP</Link>
                        <Link to='/login' className='session-link'>SIGN IN</Link>
                    </div>
                </section>
                <section className='navbar-menu'>
                    <ul>
                        <li className='nav featured'>FEATURED</li>
                        <li className='nav charts'>CHARTS</li>
                        <li className='nav videos'>VIDEOS</li>
                        <li className='nav shop'>SHOP</li>
                        <li className='nav forums'>FORUMS</li>
                        <li className='nav icons'>ICONS</li>
                    </ul>
                </section>
            </div>
        )
    }


}