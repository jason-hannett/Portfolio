import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import './hooliginweb.css'

function Hooliginweb(props){

    return(
        <div className='hooligin-web-container'>
            <div className='hooligin-web-info-container'>
                <p onClick={() => props.history.push('/portfolio')} id='back-to-projects'>back to projects</p>
                <h1>Hooligin Web App</h1>
                <p><a href='https://hooliginmusic.com' target='_blank'>hooliginmusic.com</a> is a web application developed for fans to interact with 
                    Hooligin, keep up with his latest releases, shop merchandise and even 
                    subscribe for updates. 
                    <br/>
                    Additional admin access was integrated for full artist control.
                </p>

                <p>Built in React Jason used Redux to manage state,
                    <br/>
                    Node and Express on the Server side and PostgreSQL managed with Heroku for the Database.
                    <br/>
                    The subscription service is managed using Nodemailer and for payment processing 
                    Stripe was integrated into the shopping cart.
                    <br/>
                    <br/>
                    JSX elements were styled using CSS and all background images were photographed by Jason on a Canon AE-1 Program 35mm film camera.
                </p>

                <p>For a more in depth look, check out the GitHub repository
                     <a href='https://github.com/jason-hannett/hooligin-web-project' 
                     target='_blank'> Here.</a>
                </p>

            </div>
            <div className='hooligin-web-gallery'>
                <h1>Gallery</h1>
                <div className='hooligin-web-img'></div>
                <div className='hooligin-web-img2'></div>
                <div className='hooligin-web-img3'></div>
                <div className='hooligin-web-img4'></div>
                <div className='hooligin-web-img5'></div>
                <div className='hooligin-web-img6'></div>
            </div>
            <p onClick={() => props.history.push('/the-drop')} id='next-project'>next project></p>
        </div>
    )
}

export default withRouter(Hooliginweb)