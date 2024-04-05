import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomMessage, generaterandomName } from '../utils/helper';


const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("")
    const dispatch = useDispatch();
    const chatmessages = useSelector((store) => store.chat.messages);

    useEffect(() => {
        const i = setInterval(() => {
            // console.log("API polled")
            dispatch(addMessage({
                name: generaterandomName(),
                message: generateRandomMessage()
            }))
        }, 1000);

        return () => clearInterval(i);
    })

    return (
        <>
            <div className='w-[420px] h-[500px] p-4 m-3 rounded-lg bg-slate-100 ml-2 border border-black overflow-y-scroll flex flex-col-reverse'>
                {
                    chatmessages.map((c, index) => (
                        <ChatMessage key={index} name={c.name} message={c.message} />

                    ))
                }
            </div>
            <form className='w-[420px] p-2 ml-2 top-0 border border-black rounded-lg' onSubmit={(e) => {
                console.log(liveMessage);
                e.preventDefault();
                dispatch(addMessage(
                    {
                        name: "Mayank Joshi",
                        message: liveMessage
                    }
                ))
                setLiveMessage("")

            }}>
                <input className='w-80 p-2' type="text"
                    value={liveMessage}
                    onChange={(e) => {
                        setLiveMessage(e.target.value)

                    }} />
                <button className='px-2 mx-2 bg-green-100 font-bold rounded-lg border border-black'>send</button>
            </form>
        </>
    )
}

export default LiveChat;
