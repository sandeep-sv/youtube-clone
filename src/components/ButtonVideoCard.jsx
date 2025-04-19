import React from 'react'

const ButtonVideoCard = ({info}) => {
    console.log(info);
    const{snippet,statistics} = info;
    const{channelTitle,title,thumbnails} = snippet;

  return (
    <div>
         <div className='p-2 m-2 w-[21rem]'>
        <img className='rounded-lg' alt='thumbnail' src = {thumbnails.medium.url}/>
        <ul>
            <li className="font-bold py-2 overflow-hidden whitespace-nowrap text-ellipsis">{title}</li>
     
  
            <li>{channelTitle}</li>
        </ul>
      
    </div>
      
    </div>
  )
}

export default ButtonVideoCard
