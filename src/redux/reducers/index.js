import {combineReducers} from 'redux';
import {globalReducer} from './global';
import {registerReducer, photoReducer} from './auth';
import {homeReducer} from './home';
import {orderReducer} from './order';

const reducer = combineReducers({
  registerReducer,
  globalReducer,
  photoReducer,
  homeReducer,
  orderReducer,
});

export default reducer;
