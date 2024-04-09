import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import library from "../assets/library.svg"
import trending from "../assets/trending.svg"
import music from "../assets/music.svg"
import movies from "../assets/movies.svg"
import gaming from "../assets/gaming.svg"
import sports from "../assets/sports.svg"
import download from "../assets/download.svg"
import redlive from "../assets/red-live.svg"
import shopping from "../assets/shopping.svg"
import news from "../assets/news.svg"
import subscription from '../assets/subscriptions.svg'
import likedVideos from "../assets/likedVideos.svg"
import ytmusic from "../assets/yt-music.svg"
import history from "../assets/history.svg"
import setting from "../assets/settings.svg"

const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

    if (!isMenuOpen) return null;
    return (
        <div className='p-2 max-h-screen hover:overflow-y-scroll overflow-hidden overscroll-contain fixed top-[54px] z-50 bg-white text-left w-[220px]'>
            <div className="flex-1 overflow-y-auto ">
                <ul className="mt-6 cursor-pointer w-52">
                    <li className="px-4 py-2 hover:bg-gray-200 font-bold rounded-lg">
                        <Link to="/" className="block"><img className='inline-block align-bottom mr-3' src={library} alt="Library" /> Home</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 font-bold rounded-lg">
                        <NavLink className="block" ><img className='inline-block align-bottom mr-3' src={trending} alt="Library" />Trending</NavLink>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 font-bold rounded-lg">
                        <NavLink className="block" ><img className='inline-block align-bottom mr-3' src={subscription} alt="Library" />Subscriptions</NavLink>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 font-bold rounded-lg">
                        <NavLink className="block" ><img className='inline-block align-bottom mr-3' src={library} alt="Library" />Library</NavLink>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 font-bold rounded-lg">
                        <NavLink className="block" ><img className='inline-block align-bottom mr-3' src={ytmusic} alt="Library" />Youtube Music</NavLink>
                    </li>
                    <hr />
                    <li className="px-4 py-2 hover:bg-gray-200 font-bold rounded-lg">
                        <NavLink className="block" >You</NavLink>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 rounded-lg">
                        <NavLink className="block" ><img className='inline-block align-bottom mr-3' src={likedVideos} alt="Library" />Liked Videos</NavLink>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 rounded-lg">
                        <NavLink className="block" ><img className='inline-block align-bottom mr-3' src={history} alt="Library" />History</NavLink>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 rounded-lg">
                        <NavLink className="block" ><img className='inline-block align-bottom mr-3' src={setting} alt="Library" />Setting</NavLink>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 rounded-lg">
                        <NavLink className="block" ><img className='inline-block align-bottom mr-3' src={download} alt="Library" />Downloads</NavLink>
                    </li>
                    <hr />
                    <li className="px-4 py-2 hover:bg-gray-200 font-bold rounded-lg">
                        <NavLink className="block" ><img className='inline-block align-bottom mr-3' src={redlive} alt="Library" />Live</NavLink>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 rounded-lg">
                        <NavLink className="block" ><img className='inline-block align-bottom mr-3' src={trending} alt="Library" />Trending</NavLink>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 rounded-lg">
                        <NavLink className="block" ><img className='inline-block align-bottom mr-3' src={shopping} alt="Library" />Shopping</NavLink>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 rounded-lg">
                        <NavLink className="block" ><img className='inline-block align-bottom mr-3' src={music} alt="Library" />Music</NavLink>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 rounded-lg">
                        <NavLink className="block" ><img className='inline-block align-bottom mr-3' src={movies} alt="Library" />Movies</NavLink>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 rounded-lg">
                        <NavLink className="block" ><img className='inline-block align-bottom mr-3' src={gaming} alt="Library" />Gaming</NavLink>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 rounded-lg">
                        <NavLink className="block" ><img className='inline-block align-bottom mr-3' src={news} alt="Library" />News</NavLink>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 rounded-lg">
                        <NavLink className="block" ><img className='inline-block align-bottom mr-3' src={sports} alt="Library" />Sports</NavLink>
                    </li>
                    <hr />
                    <p className='font-medium opacity-50 hover:opacity-70 p-2'>About Press Copyright Contact usCreators Advertise Developers
                        Terms Privacy Policy & SafetyHow YouTube worksTest new features</p>


                </ul>
            </div>

        </div>
    )
}

export default Sidebar
