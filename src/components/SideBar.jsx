import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate();
    const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);
    if(!isMenuOpen) return null;
    
  return (
    <div className='pl-5 w-48 fixed left-0 bottom-0 top-[80px] bg-white overflow-scroll text-sm '>

      <div className=''>
      <div>
        <div className='flex gap-3 my-2 p-1 cursor-pointer ' onClick={()=>navigate('/')}>
          <img className='h-8' src='https://static.thenounproject.com/png/423483-200.png'/>
          <p className='p-[5px]'>Home</p>
          </div>
      </div>
      <div>
        <div className='flex gap-3 my-2 p-1 cursor-pointer'>
          <img className='h-8' src='https://img.icons8.com/m_outlined/512/4D4D4D/youtube-shorts.png'/>
          <p className='p-[5px]'>Shorts</p>
          </div>
      </div>
      <div>
        <div className='flex gap-3 my-2 p-1 cursor-pointer'>
          <img className='h-8' src='https://images.icon-icons.com/2248/PNG/512/youtube_subscription_icon_136007.png'/>
          <p className='p-[5px]'>Subscriptions</p>
          </div>
      </div>

      </div>

      <div className='mt-7'>
      <h1>You</h1>
      <div>
        <div className='flex gap-3 my-2 p-1 cursor-pointer'>
          <img className='h-8' src='https://cdn-icons-png.flaticon.com/512/2961/2961948.png'/>
          <p className='p-[5px]'>History</p>
          </div>
      </div>
      <div>
        <div className='flex gap-3 my-2 p-1 cursor-pointer'>
          <img className='h-8' src='https://cdn.iconscout.com/icon/free/png-256/free-youtube-playlist-logo-icon-download-in-svg-png-gif-file-formats--music-platform-social-media-pack-logos-icons-3789456.png'/>
          <p className='p-[5px]'>Playlist</p>
          </div>
      </div>
      <div>
        <div className='flex gap-3 my-2 p-1 cursor-pointer'>
          <img className='h-8' src='https://static.thenounproject.com/png/1261644-200.png'/>
          <p className='p-[5px] whitespace-nowrap'>Your Videos</p>
          </div>
      </div>
      <div>
        <div className='flex gap-3 my-2 p-1 cursor-pointer'>
          <img className='h-8' src='https://png.pngtree.com/png-vector/20220517/ourmid/pngtree-online-course-education-icon-outline-vector-png-image_4691458.png'/>
          <p className='p-[5px] whitespace-nowrap'>Your Courses</p>
          </div>
      </div>
      <div>
        <div className='flex gap-3 my-2 p-1 cursor-pointer'>
          <img className='h-8' src='https://cdn.iconscout.com/icon/free/png-256/free-watch-later-icon-download-in-svg-png-gif-file-formats--material-design-icons-google-action-vol-4-pack-user-interface-1513853.png'/>
          <p className='p-[5px] whitespace-nowrap'>Watch Later</p>
          </div>
      </div>
      <div>
        <div className='flex gap-3 my-2 p-1 cursor-pointer'>
          <img className='h-8' src='https://icon-library.com/images/like-icon-youtube/like-icon-youtube-27.jpg'/>
          <p className='p-[5px] whitespace-nowrap'>Liked Videos</p>
          </div>
      </div>

      </div>


      {/* <div className='mt-7'>
        <h1>More From Youtube</h1>
      <div>
        <div className='flex gap-3 m-2 p-1 '>
          <img className='h-8' src='https://cdn.pixabay.com/photo/2021/09/11/18/21/youtube-6616310_1280.png'/>
          <p className='p-[5px] whitespace-nowrap '>Youtube Premium</p>
          </div>
      </div>
      <div>
        <div className='flex gap-3 m-2 p-1 '>
          <img className='h-8' src='https://img.icons8.com/color/512/youtube-studio_1.png'/>
          <p className='p-[5px] whitespace-nowrap'>Youtube Studio</p>
          </div>
      </div>
      <div>
        <div className='flex gap-3 m-2 p-1 '>
          <img className='h-10' src='https://static.vecteezy.com/system/resources/previews/017/395/384/non_2x/youtube-music-icon-free-png.png'/>
          <p className='p-[5px] whitespace-nowrap'>Youtube Music</p>
          </div>
      </div>
      <div>
        <div className='flex gap-3 m-2 p-1 '>
          <img className='h-8' src='https://static.vecteezy.com/system/resources/previews/017/396/821/non_2x/youtube-kids-google-apps-logo-free-png.png'/>
          <p className='p-[5px] whitespace-nowrap'>Youtube Kids</p>
          </div>
      </div>
    

      </div> */}

      <div className='mt-7'>
        <h1>Explore</h1>
      <div>
        <div className='flex gap-3 my-2 p-1 cursor-pointer'>
          <img className='h-8' src='https://cdn1.iconfinder.com/data/icons/youtube-23/31/Subtract-14-512.png'/>
          <p className='p-[5px] whitespace-nowrap '>Trending</p>
          </div>
      </div>
      <div>
        <div className='flex gap-3 my-2 p-1 cursor-pointer'>
          <img className='h-8' src='https://w7.pngwing.com/pngs/503/857/png-transparent-computer-icons-headset-music-icon-text-logo-music-icon.png'/>
          <p className='p-[5px] whitespace-nowrap'>Music</p>
          </div>
      </div>
      <div>
        <div className='flex gap-3 my-2 p-1 cursor-pointer'>
          <img className='h-8' src='https://cdn-icons-png.flaticon.com/512/3938/3938627.png'/>
          <p className='p-[5px] whitespace-nowrap'>Movies & Tv</p>
          </div>
      </div>
      <div>
        <div className='flex gap-3 my-2 p-1 cursor-pointer'>
          <img className='h-8' src='https://img.icons8.com/m_rounded/200/youtube-live.png'/>
          <p className='p-[5px] whitespace-nowrap'>Live</p>
          </div>
      </div>
      <div>
        <div className='flex gap-3 my-2 p-1 cursor-pointer '>
          <img className='h-8' src='https://www.svgrepo.com/show/473497/youtubegaming.svg'/>
          <p className='p-[5px] whitespace-nowrap '>Gaming</p>
          </div>
      </div>
      <div>
        <div className='flex gap-3 my-2 p-1 cursor-pointer'>
          <img className='h-8' src='https://static.thenounproject.com/png/697586-200.png'/>
          <p className='p-[5px] whitespace-nowrap'>News</p>
          </div>
      </div>
      <div>
        <div className='flex gap-3 my-2 p-1 cursor-pointer'>
          <img className='h-8' src='https://cdn-icons-png.flaticon.com/512/144/144750.png'/>
          <p className='p-[5px] whitespace-nowrap'>Sports</p>
          </div>
      </div>
      <div>
        <div className='flex gap-3 my-2 p-1 cursor-pointer'>
          <img className='h-8' src='https://cdn-icons-png.flaticon.com/512/3919/3919824.png'/>
          <p className='p-[5px] whitespace-nowrap'>Podcasts</p>
          </div>
      </div>
    

      </div>
        
      
      
    </div>
  )
}

export default SideBar
