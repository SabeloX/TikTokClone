import React from 'react'
import "./VideoFooter.css"
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import Ticker from 'react-ticker'

function VideoFooter({channel, song, description}) {
    return (
        <div className='video-footer'>
            <div className='video-footer-text'>
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className="video-footer-ticker">
                    <MusicNoteIcon className="video-footer-icon" />
                    <Ticker className="ticker" mode="smooth">
                        {({index}) =>(
                            <>
                                <p>{song}</p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
            <img alt='' className='video-footer-record' src="https://static.thenounproject.com/png/934821-200.png"/>
        </div>
    )
}

export default VideoFooter
