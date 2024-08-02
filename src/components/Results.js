import React, { useEffect, useState, useCallback } from 'react';
import { SEARCH_RESULT_API } from '../utils/constants';
import { Link, useSearchParams } from 'react-router-dom';
import ResultShimmer from './ResultShimmer';
import ResultVideoCard from './ResultVideoCard';

const Results = () => {
    const [searchParams] = useSearchParams();
    const search_query = searchParams?.get("search_query");
    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getVideos = useCallback(async () => {
        setIsLoading(true);

        try {
            const data = await fetch(SEARCH_RESULT_API + search_query);
            const json = await data.json();
            console.log(json);
            const onlyVideos = json.items.filter((video) => {
                return video.id.kind === "youtube#video";
            });
            console.log(onlyVideos);
            setVideos(onlyVideos);
        } catch (error) {
            console.log("Error In Fetching The Videos", error);
        } finally {
            setIsLoading(false);
        }
    }, [search_query]);

    useEffect(() => {
        getVideos();
    }, [getVideos]);

    if (isLoading) {
        return <ResultShimmer />;
    }

    if (!videos.length) {
        return (
            <div className="md:flex flex-col md:flex-wrap md:justify-center mx-auto w-fit">
                <div className="mt-48 text-lg text-red-400 bg-gray-100 p-2 rounded-xl shadow-inner">
                    OOPS....Looks Like We Have Exceeded the API limit quota
                </div>
            </div>
        );
    }

    return (
        <div className='md:flex flex-col md:flex-wrap md:justify-center mx-auto w-fit'>
            <h1 className="text-xl font-bold m-4">Search Results for "{search_query}"</h1>
            {videos.map((video) => (
                <Link key={video.id.videoId} to={"/watch?v=" + video.id.videoId}>
                    <ResultVideoCard key={video.id.videoId} info={video} />
                </Link>
            ))}
        </div>
    );
};

export default Results;
