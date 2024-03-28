import React, { useEffect, useState } from 'react'
import { MY_KEY } from '../utils/constants';
import VideoCard from './VideoCard'

const VideoContainer = () => {
    const [videoes, setVideoes] = useState([]);
    useEffect(() => {
        getVideoes();
    }, [])
    const getVideoes = async () => {

        const data = await fetch(MY_KEY)
        const json = await data.json();
        console.log(json);
        setVideoes(json.items)
    };
    return (
        <div className=' p-2 m-2 flex flex-wrap'>

            {
                videoes.map((video) => <VideoCard key={video.id} info={video} />)
            }
        </div>
    )
}

export default VideoContainer;
