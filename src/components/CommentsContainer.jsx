import React, { useEffect, useState } from 'react'
import { YOUTUBE_COMMENTS_API } from '../utils/constants';
import CommentList from './CommentList';

const CommentsContainer = ({vid}) => {

    const [comments , setComments] = useState([]);

    useEffect(()=>{
        getComments();
    },[vid])

    const getComments = async ()=>{
        const data = await fetch(YOUTUBE_COMMENTS_API+vid);
        const json = await data.json();
        console.log(json);
        setComments(json?.items);
    }
  return (
    <div className=' w-[100%] px-5'>
        <h1 className='font-bold p-5'>Comments</h1>
        <CommentList comments={comments} />

      
    </div>
  )
}

export default CommentsContainer
