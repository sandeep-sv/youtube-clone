import React from 'react'

const SuggestionCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className='p-2 m-2 w-full flex'>
      {/* Thumbnail */}
      <img
        className='rounded-lg w-40 h-24 object-cover flex-shrink-0'
        alt='thumbnail'
        src={thumbnails.medium.url}
      />

      {/* Info */}
      <ul className='ml-3 w-full'>
        <li className='font-bold text-sm py-1 line-clamp-2'>{title}</li>
        <li className='text-xs text-gray-600'>{channelTitle}</li>
        <li className='text-xs text-gray-600'>{statistics.viewCount} views</li>
      </ul>
    </div>
  )
}

export default SuggestionCard;
