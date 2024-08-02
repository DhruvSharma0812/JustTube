import React from 'react';

const VideoCard = ({ info }) => {
  if (!info) {
    return null; // Return null if info is not provided
  }

  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;

  const formatCount = (count) => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + ' M';
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + ' K';
    }
    return count.toString();
  };


  return (

    <div className="space-y-2 mb-2 md:w-[19.5rem] md:m-2 md:my-3 cursor-pointer p-1 rounded-lg">
      <img
        className="rounded-xl w-full"
        src={thumbnails.medium.url}
        alt="Thumbnail"
      />
      <div className="flex flex-col px-2">
        <h2 className="font-semibold">{(title)}</h2>
        <div className="flex items-center text-xs font-semibold text-gray-500">
          <p>{channelTitle}</p> 
          <p className='ml-2'>{formatCount(statistics.viewCount)} views</p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
