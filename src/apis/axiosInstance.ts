import axios from 'axios';

const instance = axios.create({
  baseURL: 'url',
  timeout: 5000,
  headers: {},
});

instance.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    return Promise.reject(err);
  },
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  err => {
    return Promise.reject(err);
  },
);

export default instance;
