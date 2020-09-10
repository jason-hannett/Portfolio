import React, {Component} from 'react'
import './about.css'

function About(props){

    return(
        <div className='about-container'>
            <div className='about-bio'>
                <h1 className='about-header'>They say, Hooli you the best...</h1>
                <p>I'm Jason Hannett, but most people know me as Hooligin.</p>
                <p>Born and raised in Pleasant Grove, UT a natural creative Jason has spent the last 10 years producing, writing and recording music under the stage name 'Hooligin' with his last project 'Cocaine, Sweats & Depression' amassing over 500,000 streams on <a href='https://open.spotify.com/artist/4uXeNERJzIA74hSk8AwsCm?si=TxsN2LfPRKCRWRNKNdFR5A' target='_blank' id='spotify-link'>Spotify</a>  alone!
                </p>
                <p>Jason is currently the Producer of <a href='https://open.spotify.com/show/6By6iGJKh6kaRoG40br5T4?si=t_4Yd9odRSmMtXtqqE2Lkg' target='_blank' id='the-drop-link'> The Drop</a>, Drive Time and Game Time—a series of in-house podcasts distributed at <a href='https://vivint.com' target='_blank'>Vivint.</a></p>
                <p>DevMountain graduate with a certificate and badge achievment for completion of their full stack Web Development course. 
                <br/>
                    Jason is highly compitent in <span>React, Redux, JavaScript, HTML, CSS, Express, Massive, Node, PostgreSQL and <a href='https://github.com/jason-hannett' target='_blank' id='github-link'>GitHub</a></span>.
                </p>
                <br/>
                <p>To learn more about me or hack some code, <a href='mailto:jason.hannett@outlook.com' target='_blank'>Let's chat!</a></p>
            </div>
        </div>
    )
}

export default About