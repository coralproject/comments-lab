import {expect} from 'chai';
import PlaygroundReducer from '../../src/playground/PlaygroundReducer';

describe('PlaygroundReducer', () => {
  it ('should return an initial state if none is defined', () => {
    let newState = PlaygroundReducer(undefined, {type:'FAKE_ACTION'});
    expect(newState).to.have.property('config');
    expect(newState).to.have.property('items');
  });

  describe('ADD_COMPONENT', () => {
    let action;
    beforeEach(() => {
      action = {
        type: 'ADD_COMPONENT',
        itemType:'comments',
        component: 'NYTContent',
        propTypes: ['content']
      };
    });

    it('should not morph state', () => {
      let state = {
        config:{},
        donot:'changeme'
      };
      PlaygroundReducer(state, action);
      expect(state).to.deep.equal({
        config:{},
        donot:'changeme'
      });
    });

    it('should add a component to config if the itemType does not yet exist', () => {
      let state = {config:{}};
      let newState = PlaygroundReducer(state, action);
      expect(newState.config).to.have.property('comments')
        .and.to.deep.equal([{
          propTypes:['content'],
          component:'NYTContent'
        }]);
    });

    it('should add a component to config if the itemType already exists', () => {
      let state = {
        config:{
          comments:[{
            component:'FancyDate',
            propTypes:['pubdate']
          }]
        }
      };
      let newState = PlaygroundReducer(state, action);
      expect(newState.config).to.have.property('comments')
        .and.to.deep.equal([
          {
            component:'FancyDate',
            propTypes:['pubdate']
          },
          {
            propTypes:['content'],
            component:'NYTContent'
          }]);
    });

  });

  describe('REMOVE_COMPONENT', () => {
    let action;
    beforeEach(() => {
      action = {
        type: 'REMOVE_COMPONENT',
        itemType:'comments',
        component: 'SillyComponent'
      };
    });

    it('should not morph state', () => {
      let state = {
        config:{},
        donot:'changeme'
      };
      PlaygroundReducer(state, action);
      expect(state).to.deep.equal({
        config:{},
        donot:'changeme'
      });
    });

    it('should remove a component from config', () => {
      let state = {
        config:{
          comments:[
            {
              component:'SillyComponent',
              propTypes:['content']
            }
          ]
        }
      };
      let newState = PlaygroundReducer(state, action);
      expect(newState.config).to.have.property('comments')
        .and.to.deep.equal([]);
    });

    it('should take no action if the itemType does not exist',() => {
      let state = {
        config:{
          authors:[
            {
              component:'SillyComponent',
              propTypes:['content']
            }
          ]
        }
      };
      let newState = PlaygroundReducer(state, action);
      expect(newState).to.deep.equal(state);
    });
    it('should take no action if the component does not exist',() => {
      let state = {
        config:{
          authors:[
            {
              component:'KeepMeComponent',
              propTypes:['content']
            }
          ]
        }
      };
      let newState = PlaygroundReducer(state, action);
      expect(newState).to.deep.equal(state);
    });
  });

  describe('UPDATE_COMPONENT', () => {
    let action;
    beforeEach(() => {
      action = {
        type: 'UPDATE_COMPONENT',
        itemType:'comments',
        component: 'UpdateMe',
        propTypes: ['changed']
      };
    });

    it('should not morph state', () => {
      let state = {
        config:{},
        donot:'changeme'
      };
      PlaygroundReducer(state, action);
      expect(state).to.deep.equal({
        config:{},
        donot:'changeme'
      });
    });

    it('should update the appropriate component', () => {
      let state = {
        config:{
          comments:[
            {
              component:'UpdateMe',
              propTypes:['content']
            }
          ]
        }
      };
      let newState = PlaygroundReducer(state, action);
      expect(newState.config).to.have.property('comments')
        .and.to.deep.equal([
          {
            component:'UpdateMe',
            propTypes:['changed']
          }]);
    });

    it('should take no action if the itemType does not exist',() => {
      let state = {
        config:{
          authors:[
            {
              component:'UpdateMe',
              propTypes:['content']
            }
          ]
        }
      };
      let newState = PlaygroundReducer(state, action);
      expect(newState).to.deep.equal(state);
    });
    it('should take no action if the component does not exist',() => {
      let state = {
        config:{
          authors:[
            {
              component:'KeepMeComponent',
              propTypes:['content']
            }
          ]
        }
      };
      let newState = PlaygroundReducer(state, action);
      expect(newState).to.deep.equal(state);
    });
  });
});
