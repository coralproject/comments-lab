import React from 'react';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';

import MapContainer from '../../src/components/dynamic/MapContainer';

describe('<MapContainer/>', () => {
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
  it('should map children and pass them the appropriate item ids', () => {
    const map = shallow(<MapContainer
      id={1}
      array="comments"
      items={items}
      config={config}>
        <div/>
        <div/>
      </MapContainer>);
    expect(map.node.props.className).to.equal('mapcomments');
    expect(map.node.props.children.length).to.equal(2);
    expect(map.node.props.children[0]).to.have.property('key')
      .and.to.equal('3');
    expect(map.node.props.children[0].props.children[0].props).to.have.property('id')
      .and.to.equal(3);
    expect(map.node.props.children[1]).to.have.property('key')
      .and.to.equal('4');
    expect(map.node.props.children[1].props.children[0].props).to.have.property('id')
      .and.to.equal(4);
  });
  it('should pass its items and config objects on to its children', () => {
    const map = shallow(<MapContainer
      id={1}
      array="comments"
      items={items}
      config={config}>
        <div/>
        <div/>
      </MapContainer>);
    expect(map.node.props.children[0].props.children[0].props).to.have.property('items')
      .and.to.deep.equal(items);
    expect(map.node.props.children[1].props.children[0].props).to.have.property('items')
      .and.to.deep.equal(items);
    expect(map.node.props.children[0].props.children[0].props).to.have.property('config')
      .and.to.deep.equal(config);
    expect(map.node.props.children[1].props.children[0].props).to.have.property('config')
      .and.to.deep.equal(config);
  });
});
