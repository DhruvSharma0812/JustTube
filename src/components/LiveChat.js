import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { generateRandomName, makeRandomMessage } from '../utils/helper'
import { addMessages } from '../utils/chatSlice'

const LiveChat = () => {

    const dispatch = useDispatch();
    const [liveMessage, setLiveMessage] = useState();
    const chatMessage = useSelector((store) => store.chat.messages)

    useEffect(() => {
        const i = setInterval(() => {
            // API Polling
            dispatch(
                addMessages({
                    name: generateRandomName(),
                    message: makeRandomMessage(20),
                })
            );

        }, 2000);

        return () => { clearInterval(i) }
    }, [])


    return (
        <>
            <div className='m-2 p-2 mt-0 mb-0 border border-black h-[480px] w-full bg-slate-100 overflow-y-scroll flex flex-col-reverse'>
                <div>
                    {
                        chatMessage.map((c, i) => (

                            <ChatMessage key={i} name={c.name} message={c.message} />

                        ))
                    }
                </div>
            </div>

            <form 
                className='border border-black p-2 m-2 mt-0 w-full rounded-b-lg bg-white'
                onSubmit={(e) => {
                    e.preventDefault();

                    dispatch (
                        addMessages ({
                            name: "Dhruv Sharma",
                            message: liveMessage,
                        })
                    );
                    setLiveMessage("");
                }}
            >
                <input
                    type="text" 
                    className='px-2 w-3/4 border border-slate-700 '
                    value={liveMessage}
                    onChange={(e) => {
                        setLiveMessage (e.target.value)
                    }}
                />
                <button className='px-2 mx-2 bg-green-100'>Send</button>
            </form>
        </>
    )
}

export default LiveChat
