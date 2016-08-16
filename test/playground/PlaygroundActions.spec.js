import {expect} from 'chai';
import * as actions from '../../src/playground/PlaygroundActions';

import configureStore from 'redux-mock-store';
 
const mockStore = configureStore();

describe('PlaygroundActions', () => {
  describe('ADD_COMPONENT', () => {
    it('should dispatch an ADD_COMPONENT action', () => {
      let store = mockStore({});
      actions.addComponent(
        'comments',
        'AwesomeComponent',
        ['awesomeText']
      )(store.dispatch, store.getState);
      let action = store.getActions()[0];
      expect(action).to.have.property('type')
        .and.to.equal(actions.ADD_COMPONENT);
      expect(action).to.have.property('itemType')
        .and.to.equal('comments');
      expect(action).to.have.property('component')
        .and.to.equal('AwesomeComponent');
      expect(action).to.have.property('propTypes')
        .and.to.deep.equal(['awesomeText']);
    });
  });

  describe('REMOVE_COMPONENT', ()=> {
    it('should dispatch a REMOVE_COMPONENT action', () => {
      let store = mockStore({});
      actions.removeComponent(
        'comments',
        'SillyComponent'
        )(store.dispatch, store.getState);
      let action = store.getActions()[0];
      expect(action).to.have.property('type')
        .and.to.equal(actions.REMOVE_COMPONENT);
      expect(action).to.have.property('itemType')
        .and.to.equal('comments');
      expect(action).to.have.property('component')
        .and.to.equal('SillyComponent');
    });
  });
});
