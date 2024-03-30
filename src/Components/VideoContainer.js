import React, { useEffect, useState } from 'react'
import { MY_KEY } from '../utils/constants';
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom';


const VideoContainer = () => {
    const [videoes, setVideoes] = useState([]);
    useEffect(() => {
        getVideoes();
    }, [])
    const getVideoes = async () => {

        const data = await fetch(MY_KEY)
        const json = await data.json();
        // console.log(json);
        setVideoes(json.items)
    };
    return (
        <div className=' p-2 m-2 flex flex-wrap ml-14'>

            {
                videoes.map((video) =>
                (
                    <Link to={"/watch?v=" + video.id} key={video.id} ><VideoCard info={video} /></Link>
                ))
            }
        </div>
    )
}

export default VideoContainer;
