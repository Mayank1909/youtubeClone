const API_KEY = "AIzaSyBOlymI5fsEA8CgtICUE7mFGMHg7qwI-zQ"

export const MY_KEY = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=' + API_KEY;
export const YOUTUBE_VIDEO_WATCH_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${API_KEY}&id=`;
export const LIVE_CHAT_COUNT = 20
export const COMMENTS_API = "https://youtube.googleapis.com/youtube/v3/comments?part=parentid%2Csnippet&key=" + API_KEY;

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";