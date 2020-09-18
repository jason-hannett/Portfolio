import React, {Component} from 'react'
import './contact.css'

function Contact(props){

    return(
        <div className='contact-container'>
            <div className='icon-container'>
                <a href='https://github.com/jason-hannett' target='_blank'>
                    <img src='/icons/github-logo.png' height='80px'/>
                </a> 
                <a href='https://www.linkedin.com/in/jason-hannett-494661139/' target='_blank'>
                    <img src='/icons/sc+linkedin-131965017554733397.png' height='130px'/>
                </a>
                <a href='https://www.instagram.com/hooligin/' target='_blank'>
                    <img src='/icons/38-instagram-2-512.png' height='85px'/>
                </a>
                <a href='mailto:jason.hannett@outlook.com' target='_blank'>
                    <img src='/icons/icon-email-512.png' height='95px'/>
                </a>     
                <a href='https://docs.google.com/document/d/1OmeUFo-hmRMjtD3Ehck_baXfJGrOlVtGDRUZkxVnKRE/edit' target='_blank'>
                    <img src='/icons/resume.png' height='95px'/>
                </a>     
            </div>
            <h1>contact me</h1>
        </div>
    )
}

export default Contact