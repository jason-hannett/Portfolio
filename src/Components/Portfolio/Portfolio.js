import React, {Component} from 'react'
import './portfolio.css'

function Portfolio(props){

    return(
        <div className='portfolio-container'>
            <div className='portfolio-header'>
                <h1>Projects</h1>
            </div>
            <div className='porfolio-project-container'>
                <div className='project-specs-container'>
                    <h2>Hooligin Music Web App</h2>
                    <p>technologies</p>
                    <ul>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>PostgreSQL</li>
                        <li>GitHub</li>
                    </ul>
                    <p onClick={() => props.history.push('/hooligin-music')} id='learn-more'>Learn more></p>
                </div>
                <div className='hooligin-web-image-container'>
                    <div className='hooligin-web-image'></div>
                    <div className='hooligin-web-image2'></div>
                    <div className='hooligin-web-image3'></div>
                    <div className='hooligin-web-image4'></div>
                </div>
            </div>
            <div className='porfolio-project-container'>
                <div className='project-specs-container'>
                    <h2>The Drop Podcast</h2>
                    <p>technologies</p>
                        <ul>
                            <li>Rodecaster Pro</li>
                            <li>Pyle Microphones</li>
                            <li>Abelton Live</li>
                            <li>Fireside.fm</li>
                            <li>Transistor</li>
                        </ul>
                        <p onClick={() => props.history.push('/the-drop')} id='learn-more'>Learn more></p>
                 </div>   
                        <iframe src="https://open.spotify.com/embed-podcast/show/6By6iGJKh6kaRoG40br5T4" width="60%" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
        </div>
    )
}

export default Portfolio