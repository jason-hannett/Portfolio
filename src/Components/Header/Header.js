import React, {useState} from 'react' 
import {withRouter} from 'react-router-dom'
import './header.css'

function Header(props){

    const [openMenu, setOpenMenu] = useState(false);
    
    return(
        <div className='header-container'>
            <div className='header-name-container'>
                <h2 onClick={() => props.history.push('/home')}>JH.</h2>
            </div>
                <div className='header-nav-links'>
                    <h3 onClick={() => props.history.push('/home')}>Home</h3>
                    <h3 onClick={() => props.history.push('/about')}>About</h3>
                    <h3 onClick={() => props.history.push('/music')}>Music</h3>
                    <h3 onClick={() => props.history.push('/portfolio')}>Portfolio</h3>
                    <h3 onClick={() => props.history.push('/contact')}>Contact</h3>
                </div>
                {props.location.pathname === '/menu'
                ? (<label for='toggle' id='menu-out' onClick={() => props.history.goBack()}>X</label>)
                : (<label for='toggle' onClick={() => props.history.push('/menu')}>&#9776;</label>)}
                
        </div>
    )
}

export default withRouter(Header)