import React, { useEffect } from 'react'

const ChatMessage = ({ name, message }) => {

    return (
        <>
            <div className='flex items-center p-2'>
                <img className='h-5 cursor-pointer'
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEEVsfjMFKAVchwojneS0w70o-5aORlgQJ_-o1krOfsg&s"
                    alt="user" />
                <span className='font-bold px-4'>{name}</span>
                <span>{message}</span>

            </div>

        </>
    )
}

export default ChatMessage
