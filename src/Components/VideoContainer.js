import React, { useEffect, useState } from 'react'
import { MY_KEY } from '../utils/constants';
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';



const VideoContainer = () => {
    const [videoes, setVideoes] = useState([]);
    const [nextPageToken, setNextPageToken] = useState("");


    useEffect(() => {
        getVideoes();
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', infiniteScroll, true);
        return () => {
            window.removeEventListener('scroll', infiniteScroll, true)
        }
    }, [nextPageToken])


    const getVideoes = async () => {
        const url = nextPageToken !== "" ? `${MY_KEY}&pageToken=${nextPageToken}` : MY_KEY;

        const data = await fetch(url)
        const json = await data.json();
        console.log(json?.nextPageToken)
        setNextPageToken(json?.nextPageToken);
        // console.log(json);
        setVideoes([...videoes, ...json?.items])
    };
    const infiniteScroll = async () => {
        if (window.innerHeight + Math.round(document.documentElement.scrollTop) >= document.documentElement.offsetHeight - 300) {
            getVideoes();
        }
    }
    if (!videoes.length) return <Shimmer />
    return (
        <div className=' p-2 m-2 flex flex-wrap ml-14'>

            {
                videoes.map((video) =>
                (
                    <Link to={"/watch?v=" + video.id} key={video.id} ><VideoCard info={video} /></Link>
                ))
            }

        </div >
    )
}

export default VideoContainer;
