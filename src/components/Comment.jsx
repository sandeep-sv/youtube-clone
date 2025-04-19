import React, { useState } from 'react'
import CommentList from './CommentList';
import Replies from './Replies';

const Comment = ({data}) => {
    const [showReplies , setshowReplies] = useState(false);

   const {snippet} = (data.snippet.topLevelComment);
   const {totalReplyCount} = data.snippet;
   const replyData = data?.replies?.comments;
   
  return (
    <>
        <div className='flex mb-3 px-5'>
            <img className='rounded-full w-8 h-8' alt='user-img' src={snippet.authorProfileImageUrl} /> 
            <div className=' w-[65%] ml-2'>
                <p className='font-bold'>{snippet.authorDisplayName}</p>  
                <p>{snippet.textOriginal}</p>
            </div>
        

        </div>
        {totalReplyCount>0 && <div className='ml-20 mb-5 cursor-pointer'>
             <p onClick={()=>{setshowReplies(!showReplies)}} className='pb-2'>{totalReplyCount} Replies</p>
            {showReplies && <Replies data={replyData} />
            
            }
        </div>

        }
        
    
    </>
    
  )

}

export default Comment
