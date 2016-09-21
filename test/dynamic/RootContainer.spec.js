import React from 'react';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';

import RootContainer from '../../src/components/dynamic/RootContainer';

describe('<RootContainer/>', () => {
  let items;
  let config;
  beforeEach(() => {
    items = {
      1: {
        type: 'stream',
        comments:[3,4]
      }
    };
    config = [];
  });
  describe('render', () => {
    it('should render child containers with the appropriate id', () => {
      const render = shallow(<RootContainer
          id={1}
          type='stream'
          items={items}
          config={config}>
          <div/>
          <div/>
          </RootContainer>);
      expect(render.hasClass('rootContainer')).to.be.true;
      expect(render.props().children[0].props).to.have.property('id')
        .and.to.equal(1);
      expect(render.props().children[1].props).to.have.property('id')
        .and.to.equal(1);
    });
    it('should render child containers with the appropriate items and config', () => {
      const render = shallow(<RootContainer
          id={1}
          items={items}
          type='stream'
          config={config}>
          <div/>
          <div/>
          </RootContainer>);
      expect(render.props().children[0].props).to.have.property('items')
        .and.to.deep.equal(items);
      expect(render.props().children[0].props).to.have.property('config')
        .and.to.deep.equal(config);
      expect(render.props().children[1].props).to.have.property('items')
        .and.to.deep.equal(items);
      expect(render.props().children[1].props).to.have.property('config')
        .and.to.deep.equal(config);
    });
  });
});
