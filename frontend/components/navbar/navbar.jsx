import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
    if (props.currentUser) {
        return (
        <div className='navbar'>
            <section className='navbar-main'>
                <div className='ludicrous-pos'>
                    <Link to='/' onClick={(props.resetState)} className='navbar-title'>LUDICROUS</Link>
                </div>
                <a className='session-link logout' onClick={props.logoutUser}>SIGN OUT</a>
            </section>
            <section className='navbar-menu'>
                <ul>
                    <li className='nav'>
                        <a target='_blank' href='https://github.com/ConnorBrabant/'>GITHUB</a>
                    </li>
                    <li className='nav'>
                        <a target='_blank' href='https://www.linkedin.com/in/connor-brabant-81b1a1168/'>LINKEDIN</a>
                    </li>
                    <li className='nav'>
                            <a target='_blank' href='https://angel.co/u/connor-brabant'>ANGELLIST</a>
                    </li>
                    <li className='nav'>
                        <a target='_blank' href='https://connorbrabant.github.io/'>PERSONAL</a>
                    </li>
                    <li className='nav new'>
                        <Link className='newjokelink' to='/new'>ADD A JOKE</Link>
                    </li>
                </ul>
            </section>
        </div>
        )
    } else if (props.location.pathname === '/signup' || props.location.pathname === '/login') {
        return (
            <div className='navbar'>
                <section className='navbar-main'>
                    <div className='ludicrous-pos'>
                        <Link to='/' onClick={(props.resetState)} className='navbar-title'>LUDICROUS</Link>
                    </div>
                    <div className='navbar-links'>
                        <a onClick={() => props.openModal('signup')} className='session-link session-hover'>SIGN UP</a>
                        <a onClick={() => props.openModal('signin')} className='session-link session-hover'>SIGN IN</a>
                    </div>
                </section>
                <section className='navbar-menu'>
                    <ul>
                        <li className='nav'>
                            <a target='_blank' href='https://github.com/ConnorBrabant/'>GITHUB</a>
                        </li>
                        <li className='nav'>
                            <a target='_blank' href='https://www.linkedin.com/in/connor-brabant-81b1a1168/'>LINKEDIN</a>
                        </li>
                        <li className='nav'>
                            <a target='_blank' href='https://angel.co/u/connor-brabant'>ANGELLIST</a>
                        </li>
                        <li className='nav'>
                            <a target='_blank' href='https://connorbrabant.github.io/'>PERSONAL</a>
                        </li>
                    </ul>
                </section>
            </div>
        )
    } else { 
        return (
            <div className='navbar'>
                <section className='navbar-main'>
                    <div className='ludicrous-pos'>
                        <Link to='/' onClick={(props.resetState)} className='navbar-title'>LUDICROUS</Link>
                    </div>
                    <div className='navbar-links'>
                        <Link to='/signup' className='session-link'>SIGN UP</Link>
                        <Link to='/login' className='session-link'>SIGN IN</Link>
                    </div>
                </section>
                <section className='navbar-menu'>
                    <ul>
                        <li className='nav'>
                            <a target='_blank' href='https://github.com/ConnorBrabant/'>GITHUB</a>
                        </li>
                        <li className='nav'>
                            <a target='_blank' href='https://www.linkedin.com/in/connor-brabant-81b1a1168/'>LINKEDIN</a>
                        </li>
                        <li className='nav'>
                            <a target='_blank' href='https://angel.co/u/connor-brabant'>ANGELLIST</a>
                        </li>
                        <li className='nav'>
                            <a target='_blank' href='https://connorbrabant.github.io/'>PERSONAL</a>
                        </li>
                    </ul>
                </section>
            </div>
        )
    }


}