import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

    if (!isMenuOpen) return null;
    return (
        <div className='flex  shadow-lg'>
            <div className="flex-1 overflow-y-auto ">
                <ul className="mt-6 cursor-pointer w-52">
                    <li className="px-4 py-2 hover:bg-gray-200 font-bold">
                        <a className="block">Home</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 font-bold">
                        <a className="block">Trending</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 font-bold">
                        <a className="block">Subscriptions</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 font-bold">
                        <a className="block">Library</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 font-bold">
                        <a className="block">History</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 font-bold">
                        <a className="block">Youtube Music</a>
                    </li>
                    <hr />
                    <li className="px-4 py-2 hover:bg-gray-200 font-bold">
                        <a className="block">`You ` </a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200">
                        <a className="block">Your Channel</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200">
                        <a className="block">History</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200">
                        <a className="block">Your Videos</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200">
                        <a className="block">Downloads</a>
                    </li>
                    <hr />
                    <li className="px-4 py-2 hover:bg-gray-200 font-bold">
                        <a className="block">Explore</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200">
                        <a className="block">Trending</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200">
                        <a className="block">Shopping</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200">
                        <a className="block">Music</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200">
                        <a className="block">Movies</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200">
                        <a className="block">Gaming</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200">
                        <a className="block">News</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200">
                        <a className="block">Sports</a>
                    </li>


                </ul>
            </div>

        </div>
    )
}

export default Sidebar
