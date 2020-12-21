import React, {useState, useEffect} from 'react'
import { Box } from '@material-ui/core'
import Video from '../videos/Video'
import {database, auth} from '../firebase'

const Dashboard = () => {

    const [videos, setVideos] = useState([])
  
    useEffect(() =>{

        //onSnapshot gets all the documents in the tik-tok-videos collection
        database.collection('tik-tok-videos').onSnapshot(snapshot =>(
            setVideos(snapshot.docs.map(doc => (
                doc.data()
            )))
        ))
    }, [])

    return (
        <>
            {
                
                <Box className='app_videos'>
                {
                    videos.length && videos.map((video, key) =>(
                    
                    <Video key={key}
                        url={video.url}
                        description={video.description}
                        channel={video.channel}
                        likes={video.likes}
                        messages={video.messages}
                        shares={video.shares}
                        song={video.song}/>
                    ))
                }
                </Box>
            }
        </>
    )
}

export default Dashboard
