import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import { GOOGLE_API_KEY, VIDEO_INFO_API } from '../utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComment, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import CmntContainer from './CmntContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const [info, setInfo] = useState({});
    const [isDescriptionVisible, SetIsDescriptionVisible] = useState(false);

    const formatCount = (count) => {
        if (count >= 1000) {
            return (count / 1000).toFixed(1) + 'K';
        }
        return count.toString();
    };

    const getVideoInfo = async () => {
        try {
            const videoId = searchParams.get("v");
            const response = await fetch(`${VIDEO_INFO_API}&id=${videoId}&key=${GOOGLE_API_KEY}`);
            const json = await response.json();

            if (json.items && json.items.length > 0) {
                setInfo(json.items[0]);
            } else {
                console.error("No video information found");
            }
        } catch (error) {
            console.error("Error fetching video info:", error);
        }
    };

    useEffect(() => {
        dispatch(closeMenu());
        getVideoInfo();
    }, [dispatch, searchParams]);

    const { snippet = {}, statistics = {} } = info || {};
    const { channelTitle = '', title = '', description = '', thumbnails = {} } = snippet || {};
    const { viewCount = 0, likeCount = 0, commentCount = 0 } = statistics || {};

    const toggleDescription = () => {
        SetIsDescriptionVisible(!isDescriptionVisible);
    };

    return (
        <div className='md:flex md:flex-wrap md:justify-start  ml-24 md:w-full mt-6 '>
            <div className='  flex flex-col md:w-3/5 md:mr-3 mb-4' >
                <div className=''>
                    <iframe
                        className="md:h-[30rem] h-60 w-full rounded-lg"
                        src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </div>
                <div className='mt-4'>
                    <div className='p-4'>
                        <h2 className='text-2xl font-semibold text-gray-800 mb-2'>{title}</h2>
                        <div className='flex justify-between items-center mb-4'>
                            <div className='flex items-center space-x-4'>
                                <img
                                    className='w-10 h-10 rounded-full'
                                    src={thumbnails.default?.url || "https://via.placeholder.com/40"}
                                    alt="Channel Thumbnail"
                                />
                                <div>
                                    <p className='font-medium'>{channelTitle}</p>
                                    <p className='text-sm text-gray-600'>{formatCount(viewCount)} views</p>
                                </div>
                            </div>
                            <div className='flex items-center space-x-4'>
                                <div className='flex items-center'>
                                    <FontAwesomeIcon icon={faThumbsUp} className='text-gray-600' />
                                    <p className='ml-1'>{formatCount(likeCount)}</p>
                                </div>
                                <div className='flex items-center'>
                                    <FontAwesomeIcon icon={faComment} className='text-gray-600' />
                                    <p className='ml-1'>{formatCount(commentCount)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center p-4'>
                        <button onClick={toggleDescription} className='text-gray-600 focus:outline-none'>
                            Description {!isDescriptionVisible ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronUp} />}
                        </button>
                    </div>
                    {isDescriptionVisible && <p className='text-gray-700 p-4 bg-gray-100 whitespace-pre-line'>{description}</p>}
                </div>
                <CmntContainer />
            </div>
            <div className='w-1/4'>
                <div className='text-black bg-white w-full rounded-t-lg p-2 m-2 mb-0 border border-black'>
                    <h2 className='text-lg font-semibold'>Live Chat</h2>
                </div>
                <LiveChat />
            </div>
        </div>
    );
};

export default WatchPage;
