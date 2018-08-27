import { combineReducers } from 'redux';

import { authentication } from './auth.reducer';
import { vendor } from './vendor.reducer';


const rootReducer = combineReducers({
  authentication,
  vendor
});

export default rootReducer;
