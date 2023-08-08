const BE_ENDPOINT = 'http://localhost:1108/api';

import axios from 'axios';
import { toast } from 'react-toastify';

export const axiosGet = (path = '', params = {}) => {
  let result = axios
    .get(`${BE_ENDPOINT}/${path}`, {
      params: params,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
    .then(response => response.data);
  return result;
};

export const axiosPost = (path = '', body = {}, uploadFunc = () => {}) => {
  let result = axios.post(`${BE_ENDPOINT}/${path}`, body, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      // "Content-Type": "application/json"
    },
    onUploadProgress: uploadFunc,
  });

  return result;
};
