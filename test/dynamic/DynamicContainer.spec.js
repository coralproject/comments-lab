import {expect} from 'chai';
import React from 'react';
import DynamicContainer from '../../src/components/dynamic/DynamicContainer';
import {shallow, mount} from 'enzyme';

describe('DynamicContainer', () => {
  let props;
  beforeEach(()=> {
    props = {
      id: 1,
      items: {
        1: {
          id: 1,
          type: 'comment',
          content: 'stuff',
          author: 2,
          likes: [4,5]
        },
        2: {
          id: 2,
          type: 'user',
          name: 'Janice',
          likes: [4,5],
          employer: 3
        },
        3: {
          id: 3,
          type: 'employer',
          name: 'Coral'
        },
        4: {
          id: 4,
          type: 'like',
          name: 'Regina'
        },
        5: {
          id: 5,
          type: 'like',
          name: 'Fatima'
        }
      },
      config: [
        {
          component: 'DefaultComment',
          graphQL: '(type: "comment"){content}'
        },
        {
          component: 'DefaultAuthor',
          graphQL: '(type: "comment"){author(type: "user"){name}}'
        }
      ]
    };
  });
  describe('mapPropsFromItems', () => {
    it('should retrieve objects based on a simple graphQL query', () => {
      let query = '(type: \'comment\'){content}';
      let output = new DynamicContainer(props).getPropsFromItems(query, 1);
      expect(output).to.deep.equal({
        content: 'stuff'
      });
    });
    it('should traverse the graph and return an appropriately formatted set of properties', () => {
      let query = '(type: \'comment\'){content,author(type: \'user\'){name}}';
      let output = new DynamicContainer(props).getPropsFromItems(query, 1);
      expect(output).to.deep.equal({
        content: 'stuff',
        author: {
          name: 'Janice'
        }
      });
    });
    it('should traverse a deeply nested query', () => {
      let query = '(type: \'comment\'){content,author(type:"user"){employer(type:"employer"){name}}}';
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
    it('should traverse a one to many relationship', ()=> {
      const query = '(type: \'comment\'){author(type: \'user\'){likes(type: \'like\'){name}},content}';
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
    it('should traverse complex one to many relationships', () => {
      const query = '(type: "comment"){author(type: "user"){employer(type: "employer"){name},likes(type: "likes"){name},name},content,likes(type: "likes"){id}}';
      const output = new DynamicContainer(props).getPropsFromItems(query, 1);
      expect(output).to.deep.equal({
        author:{
          employer: {
            name:'Coral'
          },
          likes: [
            {
              name: 'Regina'
            },
            {
              name: 'Fatima'
            }
          ],
          name: 'Janice'
        },
        content: 'stuff',
        likes: [
          {
            id: 4
          },
          {
            id: 5
          }
        ]
      });
    });
  });

  describe('mapComponents', () => {
    it ('should return a component with the appropriate props', () => {
      let config = {
        component: 'DefaultComment',
        graphQL: '(type: "comment"){content}'
      };
      let output = new DynamicContainer(props).mapComponents(config);
      expect(output).to.have.property('props').
      and.to.deep.equal({
        content:'stuff'
      });
      expect(output).to.have.property('key').
        and.to.equal('DefaultComment');
    });
  });

  describe('render', () => {
    it('should render a set of components based on the config object', () => {
      const render = shallow(<DynamicContainer {...props}/>);
      expect(render.node.props.children[0].props).to.have.property('content')
        .and.to.equal('stuff');
      expect(render.node.props.children[1].props).to.have.property('author')
          .and.to.deep.equal({name:'Janice'});
    });
  });
});
