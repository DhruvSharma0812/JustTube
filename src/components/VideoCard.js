import React from 'react';

const VideoCard = ({ info }) => {
  if (!info) {
    return null; // Return null if info is not provided
  }

  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;

  const truncateTitle = (title) => {
    const words = title.split(' ');
    if (words.length > 7) {
      return words.slice(0, 5).join(' ');
    }
    return title;
  };

  const formatCount = (count) => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + ' M';
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + ' K';
    }
    return count.toString();
  };
  

  return (
    <div className="cursor-pointer p-4 w-full max-w-xs bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        className="rounded-lg mb-4"
        src={thumbnails.medium.url}
        alt="Thumbnail"
      />
      <ul>
        <li className="font-bold text-lg mb-1">{truncateTitle(title)}</li>
        <li className="text-sm text-gray-600 mb-1">{channelTitle}</li>
        <li className="text-sm text-gray-500">{formatCount(statistics.viewCount)} views</li>
      </ul>
    </div>
  );
}

export default VideoCard;
