export const ADD_COMPONENT = 'ADD_COMPONENT';
export const REMOVE_COMPONENT = 'REMOVE_COMPONENT';
export const UPDATE_COMPONENT = 'UPDATE_COMPONENT';
export const SET_TOGGLER = 'SET_TOGGLER';
export const SET_TOPIC = 'SET_TOPIC';

export function addComponent(itemType, component, propTypes) {
  return (dispatch) => {
    dispatch({
      type: ADD_COMPONENT,
      itemType,
      component,
      propTypes
    });
  };
}

export function removeComponent(itemType, component) {
  return (dispatch) => {
    dispatch({
      type: REMOVE_COMPONENT,
      itemType,
      component
    });
  };
}

export function updateComponent(itemType, component, propTypes) {
  return (dispatch) => {
    dispatch({
      type: UPDATE_COMPONENT,
      itemType,
      component,
      propTypes
    });
  };
}

export function setToggler(groupIndex, togglerIndex, status) {
  return (dispatch) => {
    dispatch({
      type: SET_TOGGLER,
      groupIndex,
      togglerIndex,
      status
    });
  };
}

export const setTopic = (topic) => {
  return {
    type: SET_TOPIC,
    topic: topic
  };
};
