import {expect} from 'chai';
import DynamicContainer from '../../src/components/dynamic/DynamicContainer';

describe('DynamicContainer', () => {
  let props;
  beforeEach(()=> {
    props = {
      id: 1,
      items: {
        1: {
          type: 'comment',
          content: 'stuff',
          author: 2
        },
        2: {
          type: 'user',
          name: 'Janice',
          likes: [4,5],
          employer: 3
        },
        3: {
          type: 'employer',
          name: 'Coral'
        },
        4: {
          type: 'like',
          name: 'Regina'
        },
        5: {
          type: 'like',
          name: 'Fatima'
        }
      }
    };
  });
  it('should retrieve objects based on a simple graphQL query', () => {
    let query = '{content}';
    let output = new DynamicContainer(props).getPropsFromItems(query, 1);
    expect(output).to.deep.equal({
      content: 'stuff'
    });
  });
  it('should traverse the graph and return an appropriately formatted set of properties', () => {
    let query = '{content,author{name}}';
    let output = new DynamicContainer(props).getPropsFromItems(query, 1);
    expect(output).to.deep.equal({
      content: 'stuff',
      author: {
        name: 'Janice'
      }
    });
  });
  it('should traverse a deeply nested query', () => {
    let query = '{content,author{employer{name}}}';
    let output = new DynamicContainer(props).getPropsFromItems(query, 1);
    expect(output).to.deep.equal({
      content: 'stuff',
      author: {
        employer:{
          name: 'Coral'
        }
      }
    });
  });
  it('should traverse a one to may relationship', ()=> {
    const query = '{author{likes{name}},content}';
    const output = new DynamicContainer(props).getPropsFromItems(query, 1);
    expect(output).to.deep.equal({
      content: 'stuff',
      author: {
        likes: [
          {
            name: 'Regina'
          },
          {
            name: 'Fatima'
          }
        ]
      }
    });
  });
});
