import * as types from './PlaygroundActions';

const initialState = {
  items:{
    comments:[],
    users:[]
  },
  config:[
    {
      comments:[
        {
          dataTypes:['text'],
          component:{
            name:'comment',
            path:'./comment'
          }
        }
      ]
    }
  ]
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

