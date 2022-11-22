import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './Sidebar.css'



function Sidebar() {

    const user = useSelector(selectUser);

    const recentItems = (topics) => {
        return (
            <div className='recent-topics'>
                <span className='recent-item-hash'>#</span>
                <h4>{topics}</h4>
            </div>
        )

    }

    return (
        <div className='sidebar'>
            <div className='sidebar-top'>
                <img src="https://media-exp1.licdn.com/dms/image/C561BAQGMctzPNZKeNA/company-background_10000/0/1573757302870?e=2147483647&v=beta&t=L4btCAGDWgc0LaSmTS--4gHMqHViKA7gCO_Jb7mwd50" />
                <Avatar />
                <h2 className='sidebar-title'>{user.displayName}</h2>
                <h4 className='sidebar-info'>{user.email}</h4>
            </div>
            <div className='sidebar-status'>
                <div className='sidebar-stat'>
                    <p>Who viewed you</p>
                    <p className='stat-number'>2,543</p>
                </div>
                <div className='sidebar-stat'>
                    <p>Views on post</p>
                    <p className='stat-number'>2,448</p>
                </div>

            </div>

            <div className='Sidebar-bottom'>
                <h4>Recent</h4>
                {recentItems("reactjs")}
                {recentItems("softwareengineering")}
                {recentItems("developer")}
                {recentItems("design")}


            </div>
        </div>
    )
}

export default Sidebar