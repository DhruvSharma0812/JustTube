export const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const YOUTUBE_VIDEO_API = process.env.REACT_APP_YOUTUBE_VIDEO_API + GOOGLE_API_KEY

export const VIDEO_INFO_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics';

export const COMMENT_API = 'https://youtube.googleapis.com/youtube/v3/comments?part=snippet&parentId=UgzDE2tasfmrYLyNkGt4AaABAg&key=[YOUR_API_KEY]'

export const YOUTUBE_SEARCH = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="