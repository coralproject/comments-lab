export const ADD_COMPONENT = 'ADD_COMPONENT';
export const REMOVE_COMPONENT = 'REMOVE_COMPONENT';
export const UPDATE_COMPONENT = 'UPDATE_COMPONENT';

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
