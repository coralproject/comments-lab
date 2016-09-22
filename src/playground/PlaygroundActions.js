import uuid from 'uuid';

export const ADD_COMPONENT = 'ADD_COMPONENT';
export const REMOVE_COMPONENT = 'REMOVE_COMPONENT';
export const UPDATE_COMPONENT = 'UPDATE_COMPONENT';
export const UPSERT_COMPONENT = 'UPSERT_COMPONENT';
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
export const SET_NUM_CHARS = 'SET_NUM_CHARS';
export const SET_SNACKBAR = 'SET_SNACKBAR';
export const ADD_ITEM = 'ADD_ITEM';

export function addItem(item) {
  return {
    type: ADD_ITEM,
    item
  };
}

/*
* Get Items from Query
* Gets a set of items from a predefined query
*
* @params
*   Query - a predefiend query for retreiving items
*
* @returns
*   A promise resolving to a set of items
*
* @dispatches
*   A set of items to the item store  
*/
export function getItemsFromQuery(query) {
  return (dispatch) => {
    //Only 61% of browsers support window.fetch, we should have a polyfill
    return fetch(query)
      .then(
        response => {
          return response.ok ? response.json() : Promise.reject(response.status + ' ' + response.statusText);
        }
      )
      .then((json) => {
        for (var i = 0; i < json.items.length; i++) {
          dispatch(addItem(json.items[i]));
        }
        return (json.items);
      });
  };
}

/*
* Get Items Array
* Gets a set of items from an array of item ids
*
* @params
*   Query - a predefiend query for retreiving items
*
* @returns
*   A promise resolving to a set of items
*
* @dispatches
*   A set of items to the item store  
*/

export function getItemArray(ids) {
  return (dispatch) => {
    return fetch('http://item.ids.query/' + ids)
      .then(
        response => {
          return response.ok ? response.json() : Promise.reject(response.status + ' ' + response.statusText);
        }
      )
      .then((json) => {
        for (var i = 0; i < json.items.length; i++) {
          dispatch(addItem(json.items[i]));
        }
        return json.items;
      });
  };
}

/*
* PutItem
* Puts an item
*
* @params
*   Item - the item to be put
*
* @returns
*   A promise resolving to an item is
*
* @dispatches
*   The newly put item to the item store
*/

export function putItem(item) {
  return (dispatch) => {
    let options = {
      method: 'PUT',
      body: JSON.stringify(item) 
    };
    return fetch('http://item.post/', options)
      .then(
        response => {
          return response.ok ? response.json() : Promise.reject(response.status + ' ' + response.statusText);
        }
      )
      .then((json) => {
        dispatch(addItem(Object.assign({}, item, {id: json.id})));
        return json.id;
      });
  };
}


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

export function upsertComponent(itemType, component, propTypes, order, configProps) {
  return {
    type: UPSERT_COMPONENT,
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
  const id = uuid.v4();
  return {
    type: SEND_COMMENT,
    comment: {
      user: '0',
      content: content,
      likes: 0,
      liked: false,
      reactions: [],
      upvoted: false,
      upvotes: 0,
      id
    },
    id
  };
};

export const replyComment = (content, parents) => {
  const id = uuid.v4();
  return {
    type: REPLY_COMMENT,
    comment: {
      user: 0,
      content: content,
      likes: 0,
      liked: false,
      reactions: [],
      upvoted: false,
      upvotes: 0,
      id: id
    },
    id: id,
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
  };
};

export const setNumChars = (numChars) => {
  return {
    type: SET_NUM_CHARS,
    numChars
  };
};

export const setSnackbar = (snackbar) => {
  return {
    type: SET_SNACKBAR,
    snackbar
  };
};
