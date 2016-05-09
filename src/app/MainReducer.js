import { combineReducers } from 'redux';
import app from 'app/AppReducer';
import playground from 'playground/PlaygroundReducer';

const rootReducer = combineReducers({
  app,
  playground
});

export default rootReducer;
