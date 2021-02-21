import api from '../../services/api';

export const getFoodData = () => (dispatch) => {
  api
    .getFoods()
    .then((res) => {
      const {data} = res.data.data;
      dispatch({type: 'SET_FOOD', value: data});
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getFoodDataByTypes = (types) => (dispatch) => {
  api
    .getFoodsByTypes(types)
    .then((res) => {
      const {data} = res.data.data;

      if (types === 'new_food') {
        dispatch({type: 'SET_NEW_TASTE', value: data});
      }
      if (types === 'popular') {
        dispatch({type: 'SET_POPULAR', value: data});
      }
      if (types === 'recommended') {
        dispatch({type: 'SET_RECOMMENDED', value: data});
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
