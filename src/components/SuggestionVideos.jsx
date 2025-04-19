import React, { useState } from 'react'
import { useEffect } from 'react';

import { YOUTUBE_VIDEO_API } from '../utils/constants';
import SuggestionCard from './SuggestionCard';
import { Link } from 'react-router-dom';


const SuggestionVideos = () => {


    const [videos,setVideos] = useState([]);
    useEffect(()=>{
        getVideos();

    },[]);

    const getVideos = async ()=>{
        const data = await fetch(YOUTUBE_VIDEO_API);
        const json =  await data.json();
        setVideos(json.items);
    }
  return (
    <div className='flex flex-wrap'>
        {
            videos && videos.map((video)=>(
                <Link key={video.id} to={`/watch/?v=${video.id}`} ><SuggestionCard  info={video}/></Link>
                ))
        }
      
    </div>
  )
}

export default SuggestionVideos
