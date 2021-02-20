import api from '../../services/api';

export const orderAction = (status) => (dispatch) => {
  console.log('orderAction');
  api
    .getOrdersByStatus(status)
    .then((res) => {
      const data = res.data.data.data;
      dispatch({type: 'SET_ORDER', value: data});
    })
    .catch((err) => console.log(err));
};

export const orderInProgressAction = () => (dispatch) => {
  console.log('orderInProgressAction');
  api
    .getInProgressOrders()
    .then((res) => {
      const {pending, success, onDelivery} = res;
      dispatch({
        type: 'SET_IN_PROGRESS_ORDER',
        value: [...pending, ...success, ...onDelivery],
      });
    })
    .catch((err) => console.log(err));
};

export const orderPastAction = () => (dispatch) => {
  console.log('orderPastAction');
  api
    .getPastOrders()
    .then((res) => {
      const {delivered, cancelled} = res;
      dispatch({
        type: 'SET_PAST_ORDER',
        value: [...delivered, ...cancelled],
      });
    })
    .catch((err) => console.log(err));
};
