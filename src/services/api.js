import Axios from 'axios';
import {getData} from '../utils';

export const apiInstance = Axios.create({
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
    return apiInstance({
      method: 'POST',
      url: '/checkout',
      headers: {Authorization: token},
      data,
    });
  },
  getOrdersByStatus: async (status) => {
    const token = await getData('token').then((res) => res.value);
    return apiInstance({
      method: 'GET',
      url: `/transaction?status=${status ? status : ''}`,
      headers: {Authorization: token},
    });
  },
  getInProgressOrders: async () => {
    const token = await getData('token').then((res) => res.value);
    return Axios.all([
      apiInstance({
        method: 'GET',
        url: `/transaction?status=PENDING`,
        headers: {Authorization: token},
      }),
      apiInstance({
        method: 'GET',
        url: `/transaction?status=SUCCESS`,
        headers: {Authorization: token},
      }),
      apiInstance({
        method: 'GET',
        url: `/transaction?status=ON_DELIVERY`,
        headers: {Authorization: token},
      }),
    ])
      .then(
        Axios.spread((res1, res2, res3) => {
          const pending = res1.data.data.data;
          const success = res2.data.data.data;
          const onDelivery = res3.data.data.data;
          return {pending, success, onDelivery};
        }),
      )
      .catch((error) => {
        throw error;
      });
  },
  getPastOrders: async () => {
    const token = await getData('token').then((res) => res.value);
    return Axios.all([
      apiInstance({
        method: 'GET',
        url: `/transaction?status=DELIVERED`,
        headers: {Authorization: token},
      }),
      apiInstance({
        method: 'GET',
        url: `/transaction?status=CANCELLED`,
        headers: {Authorization: token},
      }),
    ])
      .then(
        Axios.spread((res1, res2, res3) => {
          const delivered = res1.data.data.data;
          const cancelled = res2.data.data.data;
          return {delivered, cancelled};
        }),
      )
      .catch((error) => {
        throw error;
      });
  },

  /**
   * @param {Number} id orderId
   */
  cancelOrder: async (id) => {
    const token = await getData('token').then((res) => res.value);
    return apiInstance({
      method: 'POST',
      url: '/transaction/' + id,
      headers: {Authorization: token},
      data: {status: 'CANCELLED'},
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
