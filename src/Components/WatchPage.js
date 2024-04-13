import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/slice';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import Comments from './Comments';
import LiveChat from './LiveChat';
import { MY_KEY, YOUTUBE_RECOMENDED_VIDEO_LIST_API, YOUTUBE_VIDEO_WATCH_API } from '../utils/constants';
import { formatCompactNumber } from '../utils/helper';
import like from "../assets/like.svg"
import disLike from "../assets/dislike.svg"
import download from "../assets/download.svg"
import more from "../assets/more.svg"
import share from "../assets/share.svg"






const WatchPage = () => {

    const [searchParrams] = useSearchParams();
    const [video, setVideo] = useState({});
    const [relatedVideos, setRelatedVideoes] = useState([]);
    let videoId = searchParrams.get("v");
    // console.log(searchParrams.get("v"))
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
        getVideoDetails();
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    const getVideoDetails = async () => {
        const data = await Promise.all([fetch(YOUTUBE_VIDEO_WATCH_API + videoId), fetch(MY_KEY)]);
        const watchjson = await data[0].json();
        const recVideojson = await data[1].json();//recommended videoes
        // console.log(watchjson);
        // console.log(recVideojson);
        setVideo(watchjson?.items[0]);
        setRelatedVideoes(recVideojson?.items);
        console.log(relatedVideos);
    }
    return (
        <div className='col-span-10 pt-3 flex w-full mt-[40px]'>
            <div className=' px-3 flex-grow-6'>
                <div>
                    <iframe className='rounded-lg' width="1000" height="515" src={`https://www.youtube.com/embed/` + videoId}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen></iframe>
                </div>

                <div className='p-2 m-2'>
                    <div>
                        <div className='font-medium text-[18px]'>{video?.snippet?.title}</div>
                        <div className='mt-2 flex justify-between'>
                            <div className='flex'>
                                <div className='flex'>
                                    <img className='rounded-full w-10 h-10' alt='thumbnail' src={video?.snippet?.thumbnails?.default?.url} />
                                    <div className='flex flex-col justify-center ml-2'>
                                        <div className='font-bold text-[16px]'>{video?.snippet?.channelTitle}</div>
                                        <div className='text-gray-500 text-[12px]'>{formatCompactNumber(video?.statistics?.viewCount)} Subscriber</div>
                                    </div>
                                </div>
                                <button className='bg-black rounded-full px-4 ml-2 text-white'>Subscribe</button>
                            </div>
                            <div className='flex'>
                                <button className='bg-gray-100 rounded-l-full px-4 hover:bg-gray-200'><img alt='likeBtn' className='inline-block' src={like} /> 65K</button>
                                <button className='bg-gray-100 rounded-r-full px-4 border-l-2 border-gray-300 hover:bg-gray-200'><img alt='dislikeBtn' className='inline-block' src={disLike} /></button>
                                <button className='bg-gray-100 rounded-full px-4 ml-2 hover:bg-gray-200'><img alt='shareBtn' className='inline-block' src={share} /> Share</button>
                                <button className='bg-gray-100 rounded-full px-4 ml-2 hover:bg-gray-200'><img alt='downloadBtn' className='inline-block' src={download} /> Download</button>
                                <button className='bg-gray-100 rounded-full w-10 h-10 ml-2 hover:bg-gray-200'><img alt='moreBtn' className='inline-block' src={more} /></button>
                            </div>
                        </div>
                    </div>
                    <div className='p-2 m-2'>
                        <Comments />
                    </div>
                </div>
            </div>
            <div className='flex-grow-3'>
                <div className='flex flex-col w-full'>
                    <div className='px-3 m-1   w-full '>
                        <LiveChat />
                    </div>
                    {relatedVideos?.map(video =>
                        <Link key={video?.id} to={'/watch?v=' + video?.id} onClick={() => window.scroll(0, 0)}>
                            <div className='px-3 m-2 mt-[20px] flex'>
                                <img className='rounded-xl w-[168px] h-[94px] ' alt='thumbnail' src={video?.snippet?.thumbnails?.medium?.url} />
                                <ul className='flex flex-col justify-start ml-2 w-60'>
                                    <li className='font-medium py-2 text-[14px] line-clamp-2 max-h-[50px] leading-5'>{video?.snippet?.title}</li>
                                    <li className='text-gray-500 text-[12px]'>{video?.snippet?.channelTitle}</li>
                                    <li className='text-gray-500 text-[12px]'>100 views  {(Math.abs(new Date(video?.snippet?.publishedAt) - new Date()) / (60 * 60 * 24 * 1000)).toFixed(1)} days ago</li>
                                </ul>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </div>

    )
}

export default WatchPage
