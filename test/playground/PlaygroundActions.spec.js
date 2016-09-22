import {expect} from 'chai';
import fetchMock from 'fetch-mock';
import * as actions from '../../src/playground/PlaygroundActions';


import configureStore from 'redux-mock-store';
 
const mockStore = configureStore();

describe('PlaygroundActions', () => {
  let store;
  
  beforeEach(() => {
    store = mockStore({});
    fetchMock.restore();
  });

  describe('getItemsFromQuery', () => {
    const query = 'http://a.test.query';
    const response = {items:['item1', 'item2']};

    it('should get an item from a query and send the appropriate dispatches', () => {
      fetchMock.get(query, JSON.stringify(response));
      return actions.getItemsFromQuery(query)(store.dispatch)
        .then((res) => {
          expect(res).to.deep.equal(response.items);
          expect(store.getActions()[0]).to.deep.equal({
            type: actions.ADD_ITEM,
            item: 'item1'
          });
          expect(store.getActions()[1]).to.deep.equal({
            type: actions.ADD_ITEM,
            item: 'item2'
          });
        });
    });
    it('should handle an error', () => {
      fetchMock.get(query, 404);
      return actions.getItemsFromQuery(query)(store.dispatch)
        .catch((err) => {
          expect(err).to.be.truthy;
        });
    });
  });

  describe('getItemArray', () => {
    const response = {items:['item1', 'item2']};
    const ids = [1,2];

    it('should get an item from an array of ids and send the appropriate dispatches', () => {
      fetchMock.get('*', JSON.stringify(response));
      return actions.getItemArray(ids)(store.dispatch)
        .then((res) => {
          expect(res).to.deep.equal(response.items);
          expect(store.getActions()[0]).to.deep.equal({
            type: actions.ADD_ITEM,
            item: 'item1'
          });
          expect(store.getActions()[1]).to.deep.equal({
            type: actions.ADD_ITEM,
            item: 'item2'
          });
        });
    });
    it('should handle an error', () => {
      fetchMock.get('*', 404);
      return actions.getItemArray(ids)(store.dispatch)
        .catch((err) => {
          expect(err).to.be.truthy;
        });
    });
  });

  describe('putItem', () => {
    const item = {
      type: 'comment',
      content: 'stuff'
    };

    it ('should put an item, return an id, then dispatch that item to the store', () => {
      fetchMock.put('*', {id: '123'});
      return actions.putItem(item)(store.dispatch)
        .then((id) => {
          expect(fetchMock.calls().matched[0][1]).to.deep.equal(
            { 
              method: 'PUT',
              body: JSON.stringify(item)
            }
          );
          expect(id).to.equal('123');
          expect(store.getActions()[0]).to.deep.equal({
            type: actions.ADD_ITEM,
            item: {
              type: 'comment',
              content: 'stuff',
              id: '123'
            }
          });
        });
    });
    it('should handle an error', () => {
      fetchMock.put('*', 404);
      return actions.putItem(item)(store.dispatch)
        .catch((err) => {
          expect(err).to.be.truthy;
        });
    });
  });
});
