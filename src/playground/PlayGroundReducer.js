import * as types from './PlaygroundActions';
import comments from './playgroundComments';
import users from './playgroundUsers';
import config from './playgroundConfig';
import togglerGroups from './playgroundOptions';
import topics from './playgroundTopics';

const initialState = {
  items:{
    comments:comments,
    users:users
  },
  config:config,
  stream:['a','b','c','d','e','f','g','h']
};

initialState.togglerGroups = togglerGroups;
initialState.topics = topics;

const addComponent = (action, state) => {
  let newItemConfig;
  if(state.config[action.itemType]) {
    newItemConfig = state.config[action.itemType].slice();
    newItemConfig.push({
      component: action.component,
      propTypes: action.propTypes,
      configProps: action.configProps,
      order: action.order
    });
  } else {
    newItemConfig = [{
      component: action.component,
      propTypes: action.propTypes,
      configProps: action.configProps,
      order: action.order
    }];
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
  let exists = false;
  const update = (action, component) => {
    let newComponentConfig = {};
    if (action.propTypes) {
      newComponentConfig = Object.assign({},component,{propTypes:action.propTypes});
    }
    if (action.configProps) {
      let newConfigProps = Object.assign({}, component.configProps, action.configProps);
      newComponentConfig = Object.assign({}, component,newComponentConfig, {configProps:newConfigProps});
    }
    if (action.order != undefined && action.order != null) {
      newComponentConfig = Object.assign({}, component, newComponentConfig, {order:action.order});     
    }
    return newComponentConfig;
  };
  for(let i=0; i < itemConfig.length; i++) {
    if (itemConfig[i].component == action.component) {
      exists = true;
      newItemConfig[i] = update(action, itemConfig[i]);
      break;
    }
  }
  if (!exists) {
    newItemConfig.push(update(action, {component:action.component}));
  }
  let newConfig = Object.assign({},state.config, {[action.itemType]:newItemConfig});
  return Object.assign({}, state, {config:newConfig});
};

const setToggler = (action, state) => {
  let newTogglerGroups = JSON.parse(JSON.stringify(state.togglerGroups));
  newTogglerGroups[action.groupIndex].togglers[action.togglerIndex].status = action.status;

  let animate = false;
  let target = '';
  if (action.status && newTogglerGroups[action.groupIndex].togglers[action.togglerIndex].pulseTarget) {
    animate = true,
    target = newTogglerGroups[action.groupIndex].togglers[action.togglerIndex].pulseTarget;
  }

  return Object.assign({}, state, { togglerGroups: newTogglerGroups, pulseAnimation: animate, pulseTarget: target });
};

const togglerFromURL = (action, state) => {
  if (!action.url) {
    return state;
  }
  let togglerObj = JSON.parse(decodeURIComponent(action.url));
  let newTogglerGroups = JSON.parse(JSON.stringify(state.togglerGroups));
  for (let group in newTogglerGroups) {
    let toggleGroup = newTogglerGroups[group];
    for (let toggle in toggleGroup.togglers) {
      if (togglerObj[toggle]) {
        toggleGroup.togglers[toggle].status = togglerObj[toggle];
      }
    }
  }
  return Object.assign({}, state, { togglerGroups: newTogglerGroups});
};



const replyComment = (action, state) => {
  let commentsCopy = state.items.comments.slice();
  let repliedComment = findComment(commentsCopy, action.parents, 0);
  if (!repliedComment.replies) repliedComment.replies = [];
  repliedComment.replies.push(action.comment);
  let newItems = Object.assign({}, state.items, { comments: commentsCopy });
  return Object.assign({}, state, newItems);
};

function findComment(comments, parents, i) {
  if (parents && i < (parents.length - 1)) {
    return findComment(comments[parents[i]].replies, parents, i + 1);
  } else {
    return comments[parents[i]];
  }
}

function sendComment(action, state) {
  let newComments = Object.assign({}, state.items.comments, {[action.id]:action.comment});
  let newItems = Object.assign({}, state.items, {comments:newComments});
  let newStream = [action.id].concat(state.stream);
  return Object.assign({}, state, {items:newItems, stream:newStream});
}

function updateItem(action, state) {
  if (!state.items[action.itemType] || !state.items[action.itemType][action.id]) {
    return state;
  }
  let newItem = Object.assign({}, state.items[action.itemType][action.id],{[action.propType]:action.propVal});
  let newItemType = Object.assign({}, state.items[action.itemType],{[action.id]:newItem});
  let newItems = Object.assign({}, state.items, {[action.itemType]:newItemType});
  return Object.assign({}, state, {items:newItems});
}


const playground = (state = initialState, action) => {

  switch (action.type) {
  case types.ADD_COMPONENT:
    return addComponent(action, state);
  case types.REMOVE_COMPONENT:
    return removeComponent(action, state);
  case types.UPDATE_COMPONENT:
    return updateComponent(action, state);
  case types.SET_TOGGLER:
    return setToggler(action, state);
  case types.SET_TOPIC:
    return Object.assign({}, state, { modalTopic: action.topic });
  case types.REPLY_COMMENT:
    return replyComment(action, state);
  case types.SEND_COMMENT:
    return sendComment(action, state);
  case types.UPDATE_ITEM:
    return updateItem(action,state);
  case types.SET_STREAM:
    return Object.assign({}, state, {stream:action.stream});
  case types.URL_FROM_TOGGLER:
    return urlFromToggler(action, state);
  case types.TOGGLER_FROM_URL:
    return togglerFromURL(action, state);
  case types.SET_TOGGLER_GROUP:
    return Object.assign({}, state, {selectedTogglerGroup:action.group});
  default:
    console.log('Not a Playground action:', action.type);
    return state;
  }

  return state;

};

export default playground;

