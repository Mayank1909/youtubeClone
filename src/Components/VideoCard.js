import React from 'react'

const VideoCard = ({ info }) => {
    // console.log(info)
    const { snippet, statistics } = info;
    // console.log(snippet)
    const { channelTitle, title, thumbnails } = snippet;
    const { viewCount } = statistics;

    return (

        <div>
            <div className=' p-4 w-96 h-[22rem]'>
                <img className='border-black shadow-lg rounded-lg h-52 w-96' src={thumbnails.medium.url} alt="video" />
                <h1 className='font-bold line-clamp-2'>{title}</h1>
                <p>{channelTitle}</p><span>{parseInt(viewCount / 1000)}k views</span>
            </div>

        </div>
    )
}

export default VideoCard;
