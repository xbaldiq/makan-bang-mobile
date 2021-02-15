import {combineReducers} from 'redux';
import {globalReducer} from './global';
import {registerReducer, photoReducer} from './auth';

const reducer = combineReducers({registerReducer, globalReducer, photoReducer});

export default reducer;
