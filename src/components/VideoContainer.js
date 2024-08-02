import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  // Fetch Video from Youtube API
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();

    setVideos(json.items);
  }

  return (

    <div className='md:flex md:flex-wrap md:justify-center'>
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard id={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
}

export default VideoContainer;
