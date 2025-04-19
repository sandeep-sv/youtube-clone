import React, { useEffect } from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useDispatch, useSelector } from 'react-redux'
import { openMenu } from '../utils/appSlice'
import { Outlet } from 'react-router-dom'

const MainContainer = () => {
  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);

  const dispatch = useDispatch();

  useEffect(()=>{

    dispatch(openMenu());

  },[])

  if (isMenuOpen)
    return (
      <div className='mt-[88px] ml-48  w-[88%]'>
        <ButtonList />
        <Outlet/>
      </div>
    )
  else
  return (
    <div className='mt-[88px] w-[100%]'>
      <ButtonList />
      <Outlet />
    </div>
  )
}

export default MainContainer
