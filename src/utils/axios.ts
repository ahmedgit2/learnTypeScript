import axios from 'axios';
import {useSelector} from 'react-redux';
import {store} from '../store';

const instance = axios.create({
  baseURL: 'http://159.65.190.62:3333/api/v1/',
});

instance.interceptors.request.use(
  config => {
    config.headers = {
      ...config.headers,
      'Accept-Language': store.getState().lang.value,
      Authorization: `Bearer ${store.getState().user.token}`,
    };
    // console.log('interceptors config ==>', config);
    return config;
  },
  error => {
    // console.log('interceptors error ==>', error);
    return Promise.reject(error);
  },
);
export default instance;
