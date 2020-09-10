import React, {Component} from 'react'
import './portfolio.css'

function Portfolio(props){

    return(
        <div className='portfolio-container'>
            <div className='portfolio-header'>
                <h1>Web Development Archives</h1>
                <p>by Jason Hannett</p>
            </div>
            <div className='hooligin-web-project'>
                <div>
                    <h2>Hooligin Music Web App</h2>
                    <p>built with..</p>
                    <ul>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>PostgreSQL</li>
                    </ul>
                    <a href='https://hooliginmusic.com' target='_blank'><p>visit site></p></a>
                </div>
                <div className='hooligin-web-image'></div>
            </div>
        </div>
    )
}

export default Portfolio