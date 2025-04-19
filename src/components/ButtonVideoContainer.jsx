import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';
import { YOUTUBE_SEARCH_RESULTS_API } from '../utils/constants';
import { Link } from 'react-router-dom';
import ButtonVideoCard from './ButtonVideoCard';

const ButtonVideoContainer = () => {
     const [searchResults , setSearchResults] = useState([]);
        const {key} = useParams();
        console.log(searchResults);
      
        useEffect(()=>{
            loadSearchResults()
        },[key]);
    
        const loadSearchResults =  async ()=>{
          const data = await fetch(YOUTUBE_SEARCH_RESULTS_API+key);
          const json = await data.json();
          console.log(json);
          setSearchResults(json.items);
    
        }
    
  return (
    <div className='flex flex-wrap w-full pl-10'>
    {
        searchResults && searchResults.map((searchResult)=>(<Link key={searchResult.id.videoId} to={"/watch?v="+searchResult.id.videoId}>
            <ButtonVideoCard  info={searchResult}/>
            </Link>))
    }
  
</div>
  )
}

export default ButtonVideoContainer
