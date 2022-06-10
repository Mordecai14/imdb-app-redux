import axios from "axios";

const API_URL = "http://www.omdbapi.com/?apiKey=ffd0c3a5";
// const API_URL = 'http://www.omdbapi.com/?apiKey=ca6291ec';

export const apiCall = (url, data, headers, method) =>
  axios({
    method,
    url: API_URL + url,
    data,
    headers,
  });
