import React, {useState, useEffect} from 'react';
import './App.css';
import Video from './videos/Video'
import database from './firebase'

function App() {

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
    <div className="app">
      <div className='app_videos'>

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
      </div>
    </div>
  );
}

export default App;
