// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { toggleMenu } from '../utils/appSlice';
// import { YOUTUBE_SEARCH_API } from '../utils/constants';
// import { cacheResults } from '../utils/searchSlice';
// import { Link , useNavigate} from 'react-router-dom';

// const Head = () => {

//   const [searchQuery,setSearchQuery] = useState("");
//   const [suggestions , setSuggestions] = useState([]);
//   const [showsuggestions , setshowSuggestions] = useState(false);
//   const navigate = useNavigate();

//   const searchCache = useSelector((store)=>store.search);
  
//   useEffect(()=>{

//     const timer = setTimeout(()=>
//       {
//         if(searchCache[searchQuery]){
//           setSuggestions(searchCache[searchQuery]);
//         }
//         else{
//           getSearchSuggestions()
//         }
        
      
//       }
//         ,2000);


//     return()=>{
//       clearTimeout(timer);
//     }

//   },[searchQuery])

//   const getSearchSuggestions = async ()=>{

//     const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
//     const json = await data.json();
//     //console.log(json);
//     setSuggestions(json[1]);

//     dispatch(cacheResults({
//       [searchQuery]:json[1],
//     }))

//   }
//   const dispatch = useDispatch();

//   const toggleMenuHandeler = ()=>{
//     dispatch(toggleMenu());
//   }
//   return (
//     <div className='grid grid-flow-col p-4  fixed top-0 left-0 right-0 z-50 bg-white'>
//         <div className='flex items-center col-span-2'>
//           <img onClick={()=>toggleMenuHandeler()} className='h-10 cursor-pointer' src='https://www.svgrepo.com/show/312300/hamburger-menu.svg' alt='hamburger-menu'/>
//          <Link to="/"><img className='h-12 mx-2' src='https://www.friendsoftheuofa.ca/wp-content/uploads/2021/06/youtube-logo-png-transparent-image-5.png' alt='youtue-logo'/></Link> 
//         </div>
//         <div className='col-span-8 ml-[120px]'>
//           <div>
//             <input placeholder='Search' className=' px-5 w-1/2 border border-gray-400 p-2 rounded-l-full' type='text' value={searchQuery}
//             onFocus={()=>setshowSuggestions(true)}
//             onBlur={() => setTimeout(() => setshowSuggestions(false), 100)}
//              onChange={(e)=>setSearchQuery(e.target.value)}
//              onKeyDown={(e) => {
//               if (e.key === 'Enter' && searchQuery.trim()) {
//                 navigate(`/search/${searchQuery}`);
//               }
//             }}/>
//             <button className='border border-gray-400 p-2 rounded-r-full' onClick={()=>{
//               if(searchQuery.trim()){
//                 navigate(`/search/${searchQuery}`);
//               }
//             }}>Search</button>
//           </div>

//           {showsuggestions && <div className='absolute bg-white py-2 px-5 w-[37rem]  rounded-lg'>
//             <ul>
//               {
//                 suggestions.map((suggestion)=><li key={suggestion} onClick={()=>{
//                   console.log("suggestion clicked")}} className='py-2  hover:bg-gray-100'><Link to ={`/search/${suggestion}`} >{suggestion}</Link></li>)
//               }
                
                
//               </ul>   
//           </div>

//           }
          
          
            
//         </div>
//         <div>
          
//         </div>
//         <div className='col-span-1 flex gap-5 justify-center'>

//           <div>
//             <button className='bg-gray-100 py-2 px-4 rounded-2xl'>+ Create</button>
//           </div>
//           <div className='h-[40px]  pt-1 cursor-pointer'>
//           <img className='h-full' src='https://images.icon-icons.com/1875/PNG/512/bell_120254.png' />
//           </div>
//           <div className='h-[40px] cursor-pointer '>
//           <img className='h-full' src='https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png'alt='user-icon'/>

//           </div>
          
         
//         </div>
//     </div>
//   )
// }

// export default Head

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';
import { Link, useNavigate } from 'react-router-dom';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isMobileSearch, setIsMobileSearch] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery && searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else if (searchQuery) {
        getSearchSuggestions();
      }
    }, 500); // Reduced delay for snappier response

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
      setSuggestions(json[1]);

      dispatch(cacheResults({ [searchQuery]: json[1] }));
    } catch (err) {
      console.error("Error fetching search suggestions:", err);
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search/${searchQuery}`);
      setIsMobileSearch(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white p-3 shadow-sm">
      {/* Mobile Search View */}
      {isMobileSearch ? (
        <div className="flex items-center gap-3">
          <img
            onClick={() => setIsMobileSearch(false)}
            src="https://img.icons8.com/ios7/600/search.png"
            alt="back"
            className="h-6 cursor-pointer"
          />
          <input
            autoFocus
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
            className="w-full border border-gray-400 px-4 py-2 rounded-full focus:outline-none"
          />
        </div>
      ) : (
        // Desktop & Normal Header View
        <div className="flex items-center justify-between flex-wrap">
          {/* Left Section */}
          <div className="flex items-center gap-3 w-[20%] min-w-[100px]">
            <img
              onClick={() => dispatch(toggleMenu())}
              className="h-6 sm:h-8 cursor-pointer"
              src="https://www.svgrepo.com/show/312300/hamburger-menu.svg"
              alt="menu"
            />
            <Link to="/">
              <img
                className="h-6 sm:h-10"
                src="https://www.friendsoftheuofa.ca/wp-content/uploads/2021/06/youtube-logo-png-transparent-image-5.png"
                alt="logo"
              />
            </Link>
          </div>

          {/* Center Search Section */}
          <div className="hidden md:flex w-[40%] relative max-w-2xl">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
              className="w-full border border-gray-400 px-4 py-2 rounded-l-full focus:outline-none"
            />
            <button
              className="border border-gray-400 px-4 py-2 rounded-r-full bg-gray-100 hover:bg-gray-200"
              onClick={handleSearch}
            >
              Search
            </button>

            {/* Suggestions Dropdown */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-lg z-50 max-h-64 overflow-y-auto mt-1">
                <ul>
                  {suggestions.map((s) => (
                    <li
                      key={s}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                      onMouseDown={() => navigate(`/search/${s}`)}
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Section */}
          <div className="flex items-center justify-end gap-3 w-[20%] min-w-[100px]">
            {/* Mobile search icon */}
            <img
              src="https://img.icons8.com/ios7/600/search.png"
              alt="search"
              className="h-6 md:hidden cursor-pointer"
              onClick={() => setIsMobileSearch(true)}
            />
            <button className="hidden md:block bg-gray-100 py-2 px-2 text-sm rounded-2xl">
              + Create
            </button>
            <img
              className="h-6 sm:h-8 cursor-pointer"
              src="https://images.icon-icons.com/1875/PNG/512/bell_120254.png"
              alt="bell"
            />
            <img
              className="h-6 sm:h-8 rounded-full cursor-pointer"
              src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
              alt="user"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Head;
