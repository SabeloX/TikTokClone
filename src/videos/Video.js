import React, {useRef, useState} from 'react'
import "./Video.css"
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'

function Video({
        url, 
        channel,
        description,
        song,
        likes,
        messages,
        shares
    }) {

    const [playing, setPlay] = useState(false)
    const videoRef = useRef(null)

    //Play and pause the video
    const onVideoPress = () =>{
        if(playing){
            videoRef.current.pause()
            setPlay(false)
        }
        else{
            videoRef.current.play()
            setPlay(true)
        }
    }
    return (
        <div className='video'>
            <video 
                className='video_player' 
                loop
                ref={videoRef}
                onClick={onVideoPress}
                src={url}
                ></video>
            <VideoFooter 
                channel={channel}
                description={description}
                song={song}
            />
            <VideoSidebar likes={likes} shares={shares} messages={messages} />
        </div>
    )
}
export default Video