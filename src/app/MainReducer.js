import { combineReducers } from 'redux';
import app from 'app/AppReducer';
import playground from 'playground/OldPlaygroundReducer';

const rootReducer = combineReducers({
  app,
  playground
});

export default rootReducer;
