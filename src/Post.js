import { Avatar } from '@mui/material'
import React from 'react'
import InputOptions from './InputOptions'
import './Post.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';

function Post( {name , description, messages}) {
    return (
        <div className='Posts'>
            <div className='Post-top'>
                <Avatar>{name[0]}</Avatar>
                <div className='Post-info'>
                    <h2>{name}</h2>
                    <h4>{description}</h4>
                </div>
            </div>
            <div className='post-body'>
                <h3>{messages}</h3>
            </div>
            
            <div className='post-bottom'>
                <InputOptions Icon={ThumbUpIcon} title="Like" color="gray"/>
                <InputOptions Icon={CommentIcon} title="Comment" color="gray"/>
                <InputOptions Icon={ShareIcon} title="Share" color="gray"/>
                <InputOptions Icon={SendIcon} title="Send" color="gray"/>
            </div>
        </div>
    )
}

export default Post