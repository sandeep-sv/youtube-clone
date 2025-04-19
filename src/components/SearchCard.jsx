// import React from 'react';

// const SearchCard = ({ card }) => {
//   if (!card || !card.snippet) return null; // Safety check

//   const { snippet } = card;
//   const { thumbnails, title , channelTitle, description } = snippet;

//   return (
//     <div className='flex   p-2 w-[75%]'>
//     <div className='  p-2 w-[30%]'>
//     <img
//         className='w-full rounded-lg'
//         alt={title}
//         src={thumbnails?.high?.url}
//       />

//     </div>
    
//     <div className='ml-4   p-3 w-[70%]'>
//         <h3 className='font-bold p2'>{title}</h3>
//         <div className='flex items-center p-2'>
//         <img  className='h-10 rounded-full bg-gray-200' src='https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png'alt='user-icon'/>
//         <h5 className='ml-2'>{channelTitle}</h5>
//         </div>
        
//         <p>{description}</p>
//     </div>
      
//     </div>
//   );
// };

// export default SearchCard;

import React from 'react';

const SearchCard = ({ card }) => {
  if (!card || !card.snippet) return null;

  const { snippet } = card;
  const { thumbnails, title, channelTitle, description } = snippet;

  return (
    <div className="flex flex-col sm:flex-row w-full max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl mx-auto p-4 sm:p-4 mb-4 overflow-hidden">
      
      {/* Thumbnail */}
      <div className="w-full sm:w-1/3 flex-shrink-0">
        <img
          className="w-full h-auto rounded-lg object-cover"
          alt={title}
          src={thumbnails?.high?.url}
        />
      </div>

      {/* Video Info */}
      <div className="w-full sm:w-2/3 sm:ml-4 mt-2 sm:mt-0">
        <h3 className="font-bold text-base sm:text-lg mb-1 line-clamp-1">{title}</h3>

        <div className="flex items-center mb-2">
          <img
            className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gray-200"
            src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
            alt="user-icon"
          />
          <h5 className="ml-2 text-sm sm:text-base truncate">{channelTitle}</h5>
        </div>

        <p className="text-sm sm:text-base text-gray-700 line-clamp-1">{description}</p>
      </div>
    </div>
  );
};

export default SearchCard;
