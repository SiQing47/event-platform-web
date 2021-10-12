import axios from 'axios';

// create an axios instance
const publicService = axios.create({
  baseURL: 'https://cloud.culture.tw/frontsite', // url = base url + request url
});


// 節慶活動 api
// eslint-disable-next-line import/prefer-default-export
export const getFestival = data => publicService.get('/trans/SearchShowAction.do?method=doFindFestivalTypeJ', data);

// 主題推薦 api
export const getTopic = data => publicService.get('/trans/SearchShowAction.do?method=doFindIssueTypeJ', data);
