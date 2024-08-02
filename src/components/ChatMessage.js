import React from 'react'

const ChatMessage = ({ name, message }) => {
    return (
        <div className='flex items-center gap-2 shadow-sm p-2 mt-2'>
            <img
                className="h-6 text-2xl"
                alt="user"
                src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            />

            <span className='font-medium text-sm' > {name} </span>
            <span className='text-sm break-all'> {message} </span>
        </div>
    )
}

export default ChatMessage
