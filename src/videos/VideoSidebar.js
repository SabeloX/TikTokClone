import React, {useState} from 'react'
import "./VideoSidebar.css"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import MessageIcon from '@material-ui/icons/Message';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

function VideoSidebar({ likes, shares, messages }) {

    const [liked, setLiked] = useState(false)

    return (
        <div className="video-sidebar">
            <div className="video-sidebar-button">
                {
                    liked ? 
                    <FavoriteIcon fontSize="large" onClick={e => setLiked(false)}/> 
                    :
                    <FavoriteBorderIcon fontSize="large" onClick={e => setLiked(true)}/>
                }
                <p>{liked ? likes + 1 : likes}</p>
            </div>
            <div className="video-sidebar-button">
                <MessageIcon/>
                <p>{messages}</p>
            </div>
            <div className="video-sidebar-button">
                <ShareIcon fontSize="large"/>
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar
