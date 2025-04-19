import React from 'react'
import SideBar from './SideBar'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'
import Head from './Head'

const Body = () => {
  return (
    <>
      <Head />
      <div className='flex'>
        <SideBar />
        <Outlet />
      </div>  
    </>
    
  )
}

export default Body
