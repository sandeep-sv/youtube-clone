import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';

const Chat = () => {

    const dispatch = useDispatch();

    const chatMessages = useSelector((store)=>store.chat.messages);

useEffect (()=>{
    const i = setInterval(() => {
        dispatch(addMessage({
            name:"sandy",
            message:"Namasthe kids"
        }))
        
    }, 2000);

    return ()=>{
        clearInterval(i);
    }
},[])


  return (
    <>
    <div className='h-[600px] border border-black w-[98%] bg-slate-100 rounded-lg p-2 ml-1 overflow-y-scroll'>
        <div>
        {
            chatMessages.map((chatMessage,index)=><ChatMessage key={index} name={chatMessage.name} message={chatMessage.message}/>)
        }

        </div>
        
    </div>
    <div className='w-full p-2 ml-2 border border-black flex'>
        <input className='w-96' type='text' />
        <button className='px-2 mx-2 bg-green-200'>Send</button>
    </div>
    </>
    
   
    
  )
}

export default Chat
