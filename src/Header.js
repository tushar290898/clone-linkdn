import React from 'react'
import './Header.css'
import HeaderMenu from './HeaderMenu';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';


function Header() {

  const dispatch = useDispatch();

  const logOutApp = () =>{
      dispatch(logout());
      auth.signOut();
  }

  return (
    <div className='header'>
      <div className='header-left'>
        <img src='https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw' />
        <div className='header-search'>
          <SearchIcon />
          <input type='text' placeholder='Search' />
        </div>

      </div>

      <div className='header-right'>
        <HeaderMenu Icon={HomeIcon} title="Home" />
        <HeaderMenu Icon={SupervisorAccountIcon} title="Network" />
        <HeaderMenu Icon={WorkOutlineIcon} title="Jobs" />
        <HeaderMenu Icon={MessageIcon} title="Messages" />
        <HeaderMenu Icon={NotificationsIcon} title="Notifications" />
        <HeaderMenu onClick={logOutApp} avatar="https://images.squarespace-cdn.com/content/v1/52e98a04e4b0cd6997b3d0df/1568467922259-1RRKLPVBIV44ZAGP80W7/adult-blue-businessman-1043473.jpg?format=1000w" title="Logout" />
      </div>
    </div>
  )
}

export default Header