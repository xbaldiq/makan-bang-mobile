import {combineReducers} from 'redux';
import {globalReducer} from './global';
import {registerReducer, photoReducer} from './auth';
import {homeReducer} from './home';

const reducer = combineReducers({
  registerReducer,
  globalReducer,
  photoReducer,
  homeReducer,
});

export default reducer;
