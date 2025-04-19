import React from 'react'

const Replies = ({data}) => {
    const replies = data;
  return (
    <div>

        {
            replies.map((reply)=>{
                return(
                    
                    <div className='flex mb-3 px-5'>
                        <img className='rounded-full w-8 h-8' alt='user-img' src={reply.snippet.authorProfileImageUrl} /> 
                        <div className=' w-[65%] ml-2'>
                            <p className='font-bold'>{reply.snippet.authorDisplayName}</p>  
                            <p>{reply.snippet.textOriginal}</p>
                        </div>
                
                    </div>
                )
            })
        }
        
      
    </div>
  )
}

export default Replies
