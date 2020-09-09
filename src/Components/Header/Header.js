import React, {Component} from 'react' 
import {withRouter} from 'react-router-dom'
import './header.css'

function Header(props){
    
    return(
        <div className='header-container'>
            <div className='header-name-container'>
                <h2>JH.</h2>
            </div>
                <div className='header-nav-links'>
                    <h3 onClick={() => props.history.push('/home')}>Home</h3>
                    <h3 onClick={() => props.history.push('/about')}>About</h3>
                    <h3 onClick={() => props.history.push('/music')}>Music</h3>
                    <h3 onClick={() => props.history.push('/portfolio')}>Portfolio</h3>
                    <h3 onClick={() => props.history.push('/contact')}>Contact</h3>
                </div>
                <label for='toggle'>&#9776;</label>
                <input type='checkbox' id='toggle'/>
        </div>
    )
}

export default withRouter(Header)