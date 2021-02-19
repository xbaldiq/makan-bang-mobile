import axios from 'axios';
import {getData} from '../utils';

export const apiInstance = axios.create({
  baseURL: 'https://foodmarket-backend.buildwithangga.id/api/',
  // baseURL: 'https://2c7825842abc.ngrok.io/api/',
  timeout: 10000,
});

export default {
  register: (data) =>
    apiInstance({
      method: 'POST',
      url: '/register',
      data,
    }),
  login: (data) =>
    apiInstance({
      method: 'POST',
      url: '/login',
      data,
    }),
  uploadPhoto: (tokenType, token, data) => {
    console.log({tokenType, token});
    return apiInstance({
      method: 'POST',
      url: '/user/photo',
      headers: {
        Authorization: `${tokenType} ${token}`,
        'Content-Type': 'multipart/form-data',
      },
      data,
    });
  },
  getFoods: () => {
    // const token = await getData('token')
    return apiInstance({
      method: 'GET',
      url: '/food',
      // headers: {
      //   Authorization: token,
      //   'Content-Type': 'multipart/form-data',
      // },
      // data,
    });
  },
  getFoodsByTypes: (types) => {
    return apiInstance({
      method: 'GET',
      url: `/food?types=${types}`,
    });
  },
  checkout: async (data) => {
    const token = await getData('token').then((res) => res.value);
    console.log('token:', token);
    return apiInstance({
      method: 'POST',
      url: '/checkout',
      headers: {
        Authorization: token,
        // 'Content-Type': 'multipart/form-data',
      },
      data,
    });
  },
};

// api.interceptors.request.use(function (config) {
//   config.headers = { ...config.headers, auth_token: getAuthToken() };
//   // you can also do other modification in config
//   return config;
// }, function (error) {
//   return Promise.reject(error);
// });
