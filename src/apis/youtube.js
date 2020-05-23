import axios from 'axios';

const KEY = 'AIzaSyDTRA2IO_VIJ7cjM7AtZdIfVxEG4Fn3yzk';


// tapping information from the youtube database
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});


