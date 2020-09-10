import React, {useState} from 'react' 
import {withRouter} from 'react-router-dom'
import './menu.css'

function Menu(props){
  
    return(
        <div className='menu-container'>
                <div className='menu-nav-links'>
                    <h3 onClick={() => props.history.push('/home')}>Home</h3>
                    <h3 onClick={() => props.history.push('/about')}>About</h3>
                    <h3 onClick={() => props.history.push('/music')}>Music</h3>
                    <h3 onClick={() => props.history.push('/portfolio')}>Portfolio</h3>
                    <h3 onClick={() => props.history.push('/contact')}>Contact</h3>
                </div>
        </div>
    )
}

export default withRouter(Menu)