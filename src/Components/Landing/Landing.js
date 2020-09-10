import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import './landing.css'

function Landing(props){

    return(
        <div className='landing-container'>
        <div className='landing-about-container'>
            <p className='landing-name'>Hi, I'm Jason</p>
            <p className='landing-title'>Software Developer</p>
            <p className='landing-about'>Full Stack Engineer, Creative & Musician.
            <br/>
            <br/>
            Producer of <a href='https://open.spotify.com/show/6By6iGJKh6kaRoG40br5T4?si=_HygX9TpTBuNPylm_qu2-A' target='_blank'>'The DROP'</a> at Vivint.
            <br/>
            <br/>
            </p>
            <p id='landing-learn-more' onClick={() => props.history.push('/about')}>About me
                    <span className='arrowSliding'><span className='arrow'>></span></span>
                    <span className='arrowSliding delay1'><span className='arrow'>></span></span>
                    <span className='arrowSliding delay2'><span className='arrow'>></span></span>
                    <span className='arrowSliding delay3'><span className='arrow'>></span></span>   
            </p> 
        </div>
            <div className='landing-portrait'> </div>
        </div>
    )
}

export default withRouter(Landing)