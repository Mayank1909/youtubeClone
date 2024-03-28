import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/slice';


const Head = () => {
    const dispatch = useDispatch();

    const toggleMenuHandeler = () => {
        dispatch(toggleMenu())
    }

    return (

        <div className='flex flex-row p-2 m-2 shadow-lg justify-between  '>
            <div className='flex '>
                <img onClick={() => toggleMenuHandeler()} className='h-10 m-2 cursor-pointer' src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp" alt="hamburger menu" />
                <a href="/"><img className='h-14 w-[120px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG__r_NPZiqT0Og4_E5B9NXLGn1Y0k4rJQYcOka5YtcQ&s" alt="youtube icon" /></a>
            </div>
            <div className='text-center flex w-3/4 h-11'>
                <input className=' p-4 w-1/2 border border-gray-400 rounded-l-full' placeholder='Search' type="text" />
                <button className='border border-gray-400  py-3 px-6 rounded-r-full '><img className='h-6' src="https://static.vecteezy.com/system/resources/thumbnails/009/652/218/small/magnifying-glass-icon-isolated-on-white-background-search-illustration-vector.jpg" alt="" /></button>
                <button className='rounded px-4'><img className='h-7' src="https://cdn2.iconfinder.com/data/icons/social-messaging-productivity-black-2/1/32-512.png" alt="" /></button>
            </div>

            <div className=''>
                <img className='h-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEEVsfjMFKAVchwojneS0w70o-5aORlgQJ_-o1krOfsg&s" alt="user" />
            </div>
        </div>


    )
}

export default Head
