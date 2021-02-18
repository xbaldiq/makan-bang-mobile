import api from '../../services/api';

export const getFoodData = () => (dispatch) => {
  api
    .getFoods()
    .then((res) => {
      const {data} = res.data.data;
      console.log('getFoodData: ', data);
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
      console.log('getFoodDataByTypes: ', data);

      if (types === 'new_food') {
        dispatch({type: 'SET_NEW_TASTE', value: res.data.data.data});
        // dispatch(setLoading(false));
      }
      if (types === 'popular') {
        dispatch({type: 'SET_POPULAR', value: res.data.data.data});
        // dispatch(setLoading(false));
      }
      if (types === 'recommended') {
        dispatch({type: 'SET_RECOMMENDED', value: res.data.data.data});
        // dispatch(setLoading(false));
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
