import uuid from 'uuid';

export const ADD_COMPONENT = 'ADD_COMPONENT';
export const REMOVE_COMPONENT = 'REMOVE_COMPONENT';
export const UPDATE_COMPONENT = 'UPDATE_COMPONENT';
export const SET_TOGGLER = 'SET_TOGGLER';
export const SET_TOPIC = 'SET_TOPIC';
export const SEND_COMMENT = 'SEND_COMMENT';
export const REPLY_COMMENT = 'REPLY_COMMENT';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const SET_STREAM = 'SET_STREAM';
export const URL_FROM_TOGGLER = 'URL_FROM_TOGGLER';
export const TOGGLER_FROM_URL = 'TOGGLER_FROM_URL';
export const SET_TOGGLER_GROUP = 'SET_TOGGLER_GROUP';
export const TOGGLE_WELCOME_HERO = 'TOGGLE_WELCOME_HERO';

export function addComponent(itemType, component, propTypes, order, configProps) {
  return {
    type: ADD_COMPONENT,
    itemType,
    component,
    propTypes,
    order,
    configProps
  };
}

export function removeComponent(itemType, component) {
  return {
    type: REMOVE_COMPONENT,
    itemType,
    component
  };
}

export function updateComponent(itemType, component, propTypes, order, configProps) {
  return {
    type: UPDATE_COMPONENT,
    itemType,
    component,
    propTypes,
    configProps,
    order
  };
}

export function setToggler(groupIndex, togglerIndex, status) {
  return {
    type: SET_TOGGLER,
    groupIndex,
    togglerIndex,
    status
  };
}

export const setTopic = (topic) => {
  return {
    type: SET_TOPIC,
    topic: topic
  };
};

export const sendComment = (content) => {
  return {
    type: SEND_COMMENT,
    comment: {
      user: 0,
      content: content,
      likes: 0,
      liked: false,
      reactions: [],
      upvoted: false,
      upvotes: 0
    },
    id:uuid.v4()
  };
};

export const replyComment = (content, parents) => {
  return {
    type: REPLY_COMMENT,
    comment: {
      user: 0,
      content: content,
      likes: 0,
      liked: false,
      reactions: [],
      upvoted: false,
      upvotes: 0
    },
    id:uuid.v4(),
    parents: parents
  };
};

export const updateItem = (id, itemType, propType, propVal) => {
  return {
    type: UPDATE_ITEM,
    id,
    itemType,
    propType,
    propVal
  };
};

export const setStream = (stream) => {
  return {
    type: SET_STREAM,
    stream
  };
};

export const togglerFromURL = (url) => {
  return {
    type:TOGGLER_FROM_URL,
    url
  };
};

export const setTogglerGroup = (group) => {
  return {
    type:SET_TOGGLER_GROUP,
    group
  };
};

export const toggleWelcomeHero = () => {
  return {
    type:TOGGLE_WELCOME_HERO
  }
}
