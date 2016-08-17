import uuid from 'uuid';

export const ADD_COMPONENT = 'ADD_COMPONENT';
export const REMOVE_COMPONENT = 'REMOVE_COMPONENT';
export const UPDATE_COMPONENT = 'UPDATE_COMPONENT';
export const SET_TOGGLER = 'SET_TOGGLER';
export const SET_TOPIC = 'SET_TOPIC';
export const SEND_COMMENT = 'SEND_COMMENT';
export const REPLY_COMMENT = 'REPLY_COMMENT';

export function addComponent(itemType, component, propTypes) {
  return {
    type: ADD_COMPONENT,
    itemType,
    component,
    propTypes
  };
}

export function removeComponent(itemType, component) {
  return {
    type: REMOVE_COMPONENT,
    itemType,
    component
  };
}

export function updateComponent(itemType, component, propTypes) {
  return {
    type: UPDATE_COMPONENT,
    itemType,
    component,
    propTypes
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
      user: 1,
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
      user: 1,
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
