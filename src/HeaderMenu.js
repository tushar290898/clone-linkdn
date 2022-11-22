import React from 'react'
import './HeaderMenu.css'
import { Avatar } from '@mui/material';

function HeaderMenu({ avatar, Icon, title, onClick }) {
  return (
    <div className='header-Menu'>
      {Icon && <Icon classname="header-icons" />}
      {avatar && <Avatar onClick={onClick} className="header-avatar" src={avatar} />}
      <h3 className='header-option-title'>{title}</h3>

    </div>
  )
}

export default HeaderMenu