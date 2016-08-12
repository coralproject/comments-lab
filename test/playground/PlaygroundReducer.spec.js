import {expect} from 'chai';
import PlaygroundReducer from '../../src/playground/PlaygroundReducer';

describe('PlaygroundReducer', () => {
  it ('should return an initial state if none is defined', () => {
    let newState = PlaygroundReducer(undefined, {type:'FAKE_ACTION'});
    expect(newState).to.have.property('config');
    expect(newState).to.have.property('items');
  });
});