import React from 'react'
import Comment from './Comment';

const CommentList = ({comments}) => {
    console.log(comments);
  return (
    <div>
        {
           comments && comments.map((comment)=><Comment data={comment}/>)
        }
      
    </div>
  )
}

export default CommentList
