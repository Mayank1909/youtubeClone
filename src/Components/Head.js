import React from 'react'

const Head = () => {
    return (

        <div className='grid grid-flow-col p-2 m-2 shadow-lg'>
            <div className='flex col-span-1'>
                <img className='h-10 m-2' src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp" alt="hamburger menu" />
                <img className='h-14 w-[120px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG__r_NPZiqT0Og4_E5B9NXLGn1Y0k4rJQYcOka5YtcQ&s" alt="youtube icon" />
            </div>
            <div className='col-span-10  text-center'>
                <input className=' p-2 w-1/2 border border-gray-400 rounded-l-full' type="text" />
                <button className='border border-gray-400  py-3 px-6 rounded-r-full'><img className='h-4' src="https://static.vecteezy.com/system/resources/thumbnails/009/652/218/small/magnifying-glass-icon-isolated-on-white-background-search-illustration-vector.jpg" alt="" /></button>
                <button className='rounded px-2'><img className='h-5' src="https://cdn2.iconfinder.com/data/icons/social-messaging-productivity-black-2/1/32-512.png" alt="" /></button>
            </div>

            <div className=' col-span-1'>
                <img className='h-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEEVsfjMFKAVchwojneS0w70o-5aORlgQJ_-o1krOfsg&s" alt="user" />
            </div>
        </div>
    )
}

export default Head
