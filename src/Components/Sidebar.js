import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

    if (!isMenuOpen) return null;
    return (
        <div className='shadow-lg  flex flex-col sticky'>
            <div className="flex-1 overflow-y-auto ">
                <ul className="mt-6 cursor-pointer w-52">
                    <li className="px-4 py-2 hover:bg-gray-200 font-bold rounded-lg">
                        <Link to="/" className="block"> Home</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 font-bold rounded-lg">
                        <a className="block">Trending</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 font-bold rounded-lg">
                        <a className="block">Subscriptions</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 font-bold rounded-lg">
                        <a className="block">Library</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 font-bold rounded-lg">
                        <a className="block">History</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 font-bold rounded-lg">
                        <a className="block">Youtube Music</a>
                    </li>
                    <hr />
                    <li className="px-4 py-2 hover:bg-gray-200 font-bold rounded-lg">
                        <a className="block">You </a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 rounded-lg">
                        <a className="block">Your Channel</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 rounded-lg">
                        <a className="block">History</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 rounded-lg">
                        <a className="block">Your Videos</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 rounded-lg">
                        <a className="block">Downloads</a>
                    </li>
                    <hr />
                    <li className="px-4 py-2 hover:bg-gray-200 font-bold rounded-lg">
                        <a className="block">Explore</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 rounded-lg">
                        <a className="block">Trending</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 rounded-lg">
                        <a className="block">Shopping</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 rounded-lg">
                        <a className="block">Music</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 rounded-lg">
                        <a className="block">Movies</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 rounded-lg">
                        <a className="block">Gaming</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 rounded-lg">
                        <a className="block">News</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 rounded-lg">
                        <a className="block">Sports</a>
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
