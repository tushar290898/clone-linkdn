import React from 'react'
import './News.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function News() {

    const newsContent = (title, content) => {
        return (
            <div className='News-content'>
                <div className='News-left'>
                    <FiberManualRecordIcon className='newsArticle-icon'/>
                </div>
                <div className='News-right'>
                    <h4>{title}</h4>
                    <p>{content}</p>
                </div>

            </div>
        )


    }




    return (
        <div className='News'>
            <div className='News_header'>
                <h3>Linkedin News</h3>
                < InfoIcon />
            </div>
            {newsContent("Coronavirus updates india", "Top News - readers 2998 ")}
            {newsContent("Tesla hits New heights", "Car & auto - readers 336 ")}
            {newsContent("Bitcoin Breaks $22k", "Crypto - 8000 reader ")}
            {newsContent("is redux is good", "Code - 456 reader")}
        </div>
    )
}

export default News