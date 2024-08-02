import React from 'react'
import { formatDistanceToNow } from 'date-fns';

const ResultVideoCard = ({ info }) => {

    const { snippet } = info;
    const { channelTitle, title, thumbnails, publishedAt, description } = snippet

    return (
        <div className='space-y-2 mb-2 md:h-52 md:m-2 md:my-3 flex flex-col md:flex-row cursor-pointer p-1 rounded-lg'>
            <img
                src={thumbnails.medium.url}
                alt="thumbnail"
                className='rounded-xl md:w-fit w-full'
            />
            <div className='flex flex-col px-2 md:gap-5'>
                <h2 className='font-semibold'> {title} </h2>
                <div className='flex flex-col items-start text-xs gap-2 font-semibold text-gray-500'>
                    <div className='flex items-center gap-2'>
                    <img className='rounded-full w-8 h-8' src={thumbnails.default?.url} alt="" />
                    <p> {channelTitle} </p>
                    </div>
                    <div className=''>
                        <p>{formatDistanceToNow(new Date(publishedAt), { addSuffix: false })}</p>
                    </div>
                </div>
                <p> {description} </p>
            </div>
        </div>
    )
}

export default ResultVideoCard
