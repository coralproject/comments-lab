import * as types from './PlaygroundActions';
import comments from './playgroundComments';
import users from './playgroundUsers';

const initialState = {
  items:{
    comments:comments,
    users:users
  },
  config:
    {
      comments:[
        {
          propTypes:['content'],
          component:'DefaultComment'
        }
      ],
      authors:[
        {
          propTypes:['nickName'],
          component:'DefaultAuthor'
        }
      ]
    },
  stream:['a','b','c','d','e','f','g','h']
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

