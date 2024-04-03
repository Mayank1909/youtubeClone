import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/slice';
import { useLocation, useSearchParams } from 'react-router-dom';
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';
import Comments from './Comments';




const WatchPage = () => {

    const [searchParrams] = useSearchParams();
    console.log(searchParrams.get("v"))
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu())
    })
    return (
        <div>
            <div className='px-5 py-3 flex'>
                <iframe className='rounded-lg' width="1000" height="515" src={`https://www.youtube.com/embed/` + searchParrams.get("v")}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen></iframe>
                {/* <h1>{channelTitle}</h1> */}
            </div>
            <div>
                <Comments />
            </div>
        </div>

    )
}

export default WatchPage
