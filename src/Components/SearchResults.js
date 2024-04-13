import React, { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import { YOUTUBE_SEARCH_VIDEO_WITH_QUERY_API } from '../utils/constants';

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const [searchedVideos, setSearchedVideos] = useState([]);
    let searchQuery = searchParams.get('search_query');

    useEffect(() => {
        getSearchedVideos();
    }, [searchQuery])

    const getSearchedVideos = async () => {
        const data = await fetch(YOUTUBE_SEARCH_VIDEO_WITH_QUERY_API + searchQuery);
        const datajson = await data.json();
        setSearchedVideos(datajson?.items)
        console.log(datajson.items)
    }

    return (
        <div>
            <div className=' px-3  mt-4'>
                <div className='flex flex-col  px-3 ml-48 items-center'>
                    <div className='p-2 m-2'>
                        {searchedVideos?.map(video =>
                            <Link key={video?.id?.videoId} to={'/watch?v=' + video?.id?.videoId} >
                                <div className='px-3 m-4 flex'>
                                    <img className='rounded-lg w-[400px] h-[210px] ' alt='thumbnail' src={video?.snippet?.thumbnails?.medium?.url} />
                                    <ul className='flex flex-col justify-start ml-5 w-96'>
                                        <li className=' py-2 text-2xl '>{video?.snippet?.title}</li>
                                        <li className='text-gray-500 text-[18px]'>{video?.snippet?.channelTitle}</li>
                                        <li className='text-gray-500 text-[18px]'>100 views  {(Math.abs(new Date(video?.snippet?.publishedAt) - new Date()) / (60 * 60 * 24 * 1000)).toFixed(1)} days ago</li>
                                        {/* <li className='text-gray-500 mt-2 text-[15px]'>{video?.snippet?.description}</li> */}
                                    </ul>
                                </div>
                            </Link>
                        )}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SearchResults;
