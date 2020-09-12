import React, {Component} from 'react'
import './music.css'

function Music(props){

    return(
        <div className='music-container'>
            <iframe id='spotify' src="https://open.spotify.com/embed/artist/4uXeNERJzIA74hSk8AwsCm" width="500" height="600" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <iframe id='soundcloud' width="500" height="600" scrolling="yes" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1125794068&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        </div>
    )
}

export default Music