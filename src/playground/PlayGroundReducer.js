import * as types from './PlaygroundActions';
import comments from './PlaygroundComments';

const initialState = {
  items:{
    comments:comments,
    users:[]
  },
  config:
    {
      comments:[
        {
          dataTypes:['content'],
          component:'DefaultComment'
        }
      ]
    }
};

const playground = (state = initialState, action) => {

  switch (action.type) {
  default:
    console.log('Not a Playground action:', action.type);
    return state;
  }

  return state;

};

export default playground;

