import React, {Component} from 'react' 
import {withRouter} from 'react-router-dom'

function Header(props){

    return(
        <div>
            <h2 onClick={() => props.history.push('/home')}>Home</h2>
            <h2 onClick={() => props.history.push('/about')}>About</h2>
            <h2 onClick={() => props.history.push('/music')}>Music</h2>
            <h2 onClick={() => props.history.push('/portfolio')}>Portfolio</h2>
            <h2 onClick={() => props.history.push('/contact')}>Contact</h2>
        </div>
    )
}

export default withRouter(Header)