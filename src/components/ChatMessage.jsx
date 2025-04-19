import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center'>
      <img className='h-10' src='https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png'alt='user-icon'/>
      <span className='font-bold'>{name}:</span>
      <span className='ml-1'>{message}</span>
    </div>
  )
}

export default ChatMessage
