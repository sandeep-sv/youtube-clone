import React, { useEffect, useState } from 'react'
import { YOUTUBE_SEARCH_RESULTS_API } from '../utils/constants';
import { Link, useParams } from 'react-router-dom';
import SearchCard from './SearchCard';
import { useSelector } from 'react-redux';

const SearchPage = () => {
    const [searchResults , setSearchResults] = useState([]);
    const {searchQuery} = useParams();
    console.log(searchResults);
  
    useEffect(()=>{
        loadSearchResults()
    },[searchQuery]);

    const loadSearchResults =  async ()=>{
      const data = await fetch(YOUTUBE_SEARCH_RESULTS_API+searchQuery);
      const json = await data.json();
      //console.log(json);
      setSearchResults(json.items);

    }

     
    const isMenuOpen = useSelector((store)=>store.app.isMenuOpen); 
  return (
    <div className={`${isMenuOpen ? 'ml-0 lg:ml-72' : 'ml-0 lgml-52'} mt-20`}>
      {
       searchResults && searchResults.map((searchResult)=><Link to={`/watch?v=${searchResult.id.videoId}`}><SearchCard card={searchResult} /></Link>)
   
    }
    </div>
    
    
  )
}

export default SearchPage
