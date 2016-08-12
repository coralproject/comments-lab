import { combineReducers } from 'redux';
import app from 'app/AppReducer';
import playground from 'playground/OldPlaygroundReducer';
import newPlayground from 'playground/PlaygroundReducer';

const rootReducer = combineReducers({
  app,
  playground,
  newPlayground
});

export default rootReducer;
