import * as types from './PlaygroundActions';
import comments from './playgroundComments';
import users from './playgroundUsers';
import config from './playgroundConfig';

const initialState = {
  items:{
    comments:comments,
    users:users
  },
  config:config,
  stream:['a','b','c','d','e','f','g','h']
};

const playground = (state = initialState, action) => {

  switch (action.type) {
  case types.ADD_COMPONENT:
    let newItemConfig;
    if(state.config[action.itemType]) {
      newItemConfig = Object.assign({},state.config[action.itemType]);
      newItemConfig.push({component:action.component, propTypes:action.propTypes});
    } else {
      newItemConfig = [{component:action.component, propTypes:action.propTypes}];
    }
    let newConfig = Object.assign({},state.config, {[action.itemType]:newItemConfig});
    return Object.assign({}, state, {config:newConfig});
  default:
    console.log('Not a Playground action:', action.type);
    return state;
  }

  return state;

};

export default playground;

