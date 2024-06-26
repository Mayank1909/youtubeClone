import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/slice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResult } from '../utils/searchSlice';
import bell from "../assets/bell.svg"
import create from "../assets/create.svg"
import { BrowserRouter, useNavigate } from 'react-router-dom';

const Head = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState({});
    const [showsuggestion, setShowsuggestions] = useState(false);
    // console.log(searchQuery)
    // debouncing 
    // make an api call after every key press
    // but if the diifference between 2 API calls is <200ms then
    // decline the API call
    const searchCache = useSelector((store) => store.search);
    const navigate = useNavigate();


    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery])
            }
            else
                getsearchSuggestion();
        }, 200);

        return () => {
            clearTimeout(timer);
        };
    }, [searchQuery])

    const getsearchSuggestion = async () => {
        // console.log("API call" + searchQuery)
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
        const json = await data.json();
        // console.log(json[1])
        setSuggestions(json[1]);
        dispatch(cacheResult({
            [searchQuery]: json[1]
        }));

    }
    const handleSearched = (e) => {
        setSearchQuery(e.target.innerText);
        setShowsuggestions(false);
        navigate('/results?search_query=' + encodeURI(e.target.innerText))

    }
    const dispatch = useDispatch();

    const toggleMenuHandeler = () => {
        dispatch(toggleMenu())
    }

    return (

        <div className='grid grid-flow-col p-2  shadow-lg justify-between sticky top-0 bg-white'>
            <div className='flex '>
                <img onClick={() => toggleMenuHandeler()} className='h-8 m-2 cursor-pointer' src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp" alt="hamburger menu" />
                <a href="/"><img className='h-12 w-[120px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG__r_NPZiqT0Og4_E5B9NXLGn1Y0k4rJQYcOka5YtcQ&s" alt="youtube icon" /></a>
            </div>
            <div>
                <div className='text-center col-span-10 flex  h-11'>

                    <input className=' p-4 w-[26rem] border border-gray-400 rounded-l-full'
                        placeholder='Search'
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowsuggestions(true)}
                        onBlur={() => setShowsuggestions(false)}
                    />
                    <button className='border border-gray-400  py-3 px-6 rounded-r-full '><img className='h-6' src="https://static.vecteezy.com/system/resources/thumbnails/009/652/218/small/magnifying-glass-icon-isolated-on-white-background-search-illustration-vector.jpg" alt="" /></button>
                    <button className='rounded px-4'><img className='h-7' src="https://cdn2.iconfinder.com/data/icons/social-messaging-productivity-black-2/1/32-512.png" alt="" /></button>
                </div>
                {
                    showsuggestion &&
                    (<div className='fixed bg-white w-[26rem]   rounded-lg border border-gray-100 '>
                        <ul>{
                            suggestions.map((s) =>
                            (

                                <li key={s} className='py-1 px-2 shadow-sm hover:bg-gray-100' onMouseDown={(e) => handleSearched(e)}> {s}</li>
                            ))
                        }
                        </ul>
                    </div>)}
            </div>

            {/* <div className=''>
                <img className='h-10 cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEEVsfjMFKAVchwojneS0w70o-5aORlgQJ_-o1krOfsg&s" alt="user" />
            </div> */}
            <div className='flex flex-row-reverse justify-around'>
                <div className='w-10 h-10 ml-5 cursor-pointer'>
                    <img className='h-10 cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEEVsfjMFKAVchwojneS0w70o-5aORlgQJ_-o1krOfsg&s" alt="user" />
                </div>
                <div className='w-10 h-10 hover:rounded-full hover:bg-gray-100 ml-5 cursor-pointer relative'>
                    <img className='mt-2 ml-2' alt='bell-icon ' src={bell} />
                    <div className='absolute bg-red-700 text-white w-6 h-5 rounded-2xl border-2 border-white top-[3px] left-5 text-xs text-center'>9+</div>
                </div>
                <div className='w-10 h-10 hover:rounded-full hover:bg-gray-100 ml-5 cursor-pointer'>
                    <img className='mt-2 ml-2' alt='create-icon ' src={create} />
                </div>
            </div>
        </div>


    )
}

export default Head
