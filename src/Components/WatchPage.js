import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/slice';
import { useLocation, useSearchParams } from 'react-router-dom';
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';
import Comments from './Comments';
import LiveChat from './LiveChat';




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
                <div>
                    <iframe className='rounded-lg' width="1000" height="515" src={`https://www.youtube.com/embed/` + searchParrams.get("v")}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen></iframe>
                </div>
                <div>
                    <LiveChat />
                </div>
            </div>
            <div>
                <Comments />
            </div>
        </div>

    )
}

export default WatchPage
