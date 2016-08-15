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

    it('should add a component to config', () => {
      let state = {config:{}};
      let newState = PlaygroundReducer(state, action);
      expect(newState.config).to.have.property('comments')
        .and.to.deep.equal([{
          propTypes:['content'],
          component:'NYTContent'
        }]);
    });
  });
});
