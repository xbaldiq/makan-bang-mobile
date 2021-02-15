import axios from 'axios';

export const apiInstance = axios.create({
  baseURL: 'https://360a90bf6d0e.ngrok.io/api/',
  // baseURL: 'http://192.168.1.110/api/',
  timeout: 10000,
});

export default {
  // getData: () =>
  //   api({
  //     method: 'GET',
  //     url: '/query',
  //     params: {
  //       search: 'parameter',
  //     },
  //   }),
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
};

// api.interceptors.request.use(function (config) {
//   config.headers = { ...config.headers, auth_token: getAuthToken() };
//   // you can also do other modification in config
//   return config;
// }, function (error) {
//   return Promise.reject(error);
// });
