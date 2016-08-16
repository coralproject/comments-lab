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

const addComponent = (action, state) => {
  let newItemConfig;
  if(state.config[action.itemType]) {
    newItemConfig = state.config[action.itemType].slice();
    newItemConfig.push({component:action.component, propTypes:action.propTypes});
  } else {
    newItemConfig = [{component:action.component, propTypes:action.propTypes}];
  }
  let newConfig = Object.assign({},state.config, {[action.itemType]:newItemConfig});
  return Object.assign({}, state, {config:newConfig});
};

const removeComponent = (action, state) => {
  if(!state.config[action.itemType]) {
    return state;
  }
  let itemConfig = state.config[action.itemType];
  let newItemConfig = itemConfig.slice();
  for(let i=0; i < itemConfig.length; i++) {
    if (itemConfig[i].component == action.component) {
      newItemConfig = itemConfig.slice(0,i).concat(itemConfig.slice(i+1, itemConfig.length));
      break;
    }
  }
  let newConfig = Object.assign({},state.config, {[action.itemType]:newItemConfig});
  return Object.assign({}, state, {config:newConfig});
};

const updateComponent = (action, state) => {
  if(!state.config[action.itemType]) {
    return state;
  }
  let itemConfig = state.config[action.itemType];
  let newItemConfig = itemConfig.slice();
  for(let i=0; i < itemConfig.length; i++) {
    if (itemConfig[i].component == action.component) {
      let newComponentConfig = Object.assign({},itemConfig[i],{propTypes:action.propTypes});
      newItemConfig = itemConfig.slice();
      newItemConfig[i] = newComponentConfig;
      break;
    }
  }
  let newConfig = Object.assign({},state.config, {[action.itemType]:newItemConfig});
  return Object.assign({}, state, {config:newConfig});
};

const playground = (state = initialState, action) => {

  switch (action.type) {
  case types.ADD_COMPONENT:
    return addComponent(action, state);
  case types.REMOVE_COMPONENT:
    return removeComponent(action, state);
  case types.UPDATE_COMPONENT:
    return updateComponent(action, state);
  default:
    console.log('Not a Playground action:', action.type);
    return state;
  }

  return state;

};

export default playground;

