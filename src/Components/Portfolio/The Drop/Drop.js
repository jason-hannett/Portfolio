import React, {Component} from 'react'
import './drop.css'

function Drop(props){

    return(
        <div className='drop-container'>
            <div className='drop-about-bio'>
            <p onClick={() => props.history.push('/portfolio')} id='back-to-projects'>back to projects</p>
                <h1 className='about-header'>The Drop</h1>
                <p>The DROP podcast discovers the “down to earth” and the extraordinary in some of the most 
                    interesting people you’ll ever meet. 
                    <br/>
                    Each week host Kevin Swiss sits down with motivating 
                    role models who have a powerful story to tell. 
                    <br/>
                    From entertaining to inspirational, 
                    these stories all drive you to do one thing— drop whatever it is that’s holding you 
                    back and go make a story of your own.</p>
                    <p>Recorded on a Rodecaster Pro with $15 Pyle microphones Jason then
                        pulled the multi-track audio into Ableton Live where he then 
                        mixed and mastered the audio, exported to .wav then finally uploaded
                        the .Mp3 to Fireside.fm for distribution on Spotify and Apple podcasts.
                    </p>
                    <p>The DROP intro and outro music were produced entirely by Jason.</p>
                    <p>Along with The Drop Jason has produced 50+ episodes of an 
                        in-house podcast called 'Drive Time' distributed to all of
                        the Retail Smart Home Pros.
                    </p>
            </div>
                <h1>Episodes</h1>
                <div className='the-drop-episodes-container'>
                <div className='the-drop-episodes'>
                <iframe id='episode'src="https://open.spotify.com/embed-podcast/episode/7zljKwNRcTNQSyyNvqTXfW" width="80%" height="250" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                <iframe id='episode' src="https://open.spotify.com/embed-podcast/episode/7nSsYYkHet46in5LgiYdPB" width="80%" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                <iframe id='episode' src="https://open.spotify.com/embed-podcast/episode/7vH88yShehxuXzO5uCFRp1" width="80%" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                <iframe id='episode' src="https://open.spotify.com/embed-podcast/episode/35jOUBqhVGOl22AMlNQdqm" width="80%" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                <iframe id='episode' src="https://open.spotify.com/embed-podcast/episode/50FF10aMyWm8FlcuKDmhXP" width="80%" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                <iframe id='episode' src="https://open.spotify.com/embed-podcast/episode/30e2zKlOQSB5vsW0h3xw00" width="80%" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                <iframe id='episode' src="https://open.spotify.com/embed-podcast/episode/1jNZYFc4YwlIXcFx3LvPwc" width="80%" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                <iframe id='episode' src="https://open.spotify.com/embed-podcast/episode/4OfW4bDAd1iXGllz3tcXUc" width="80%" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                <iframe id='episode' src="https://open.spotify.com/embed-podcast/episode/51a11H4482Jtdw0hCnekfk" width="80%" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                <iframe id='episode' src="https://open.spotify.com/embed-podcast/episode/2filcaCIy2HqviBcN2RMRp" width="80%" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                <iframe id='episode' src="https://open.spotify.com/embed-podcast/episode/7u1wYtkGSlWybE0gCShYbB" width="80%" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                <iframe id='episode' src="https://open.spotify.com/embed-podcast/episode/4Q43X0XMFPgmXWF8NNSSK4" width="80%" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                <iframe id='episode' src="https://open.spotify.com/embed-podcast/episode/4kuoUY4VT3EOa8rAkxbZb8" width="80%" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                <iframe id='episode' src="https://open.spotify.com/embed-podcast/episode/1zs8SKFFRx6NRE6ghTzvhf" width="80%" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                <iframe id='episode' src="https://open.spotify.com/embed-podcast/episode/22HGfRMMZUsQDAmlkZIUEX" width="80%" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
            </div>
            <p onClick={() => props.history.push('/portfolio')} id='next-project'>Back to Projects</p>
        </div>
    )
}

export default Drop