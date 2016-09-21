import React from 'react';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';

import MapContainer from '../../src/components/dynamic/MapContainer';

describe('<MapContainer/>', () => {
  it('should render an children with an array of item ids', () => {
    const items = {
      1: {
        type: 'stream',
        comments:[3,4]
      }
    };
    const map = shallow(<MapContainer
      id={1}
      array="comments"
      items={items}>
        <div/>
        <div/>
      </MapContainer>);
    expect(map.node.props.className).to.equal('mapcomments');
    expect(map.node.props.children.length).to.equal(2);
    expect(map.node.props.children[0]).to.have.property('key')
      .and.to.equal('3');
    expect(map.node.props.children[0].props.children[0].props).to.have.property('id')
      .and.to.equal(3);
    expect(map.node.props.children[0].props.children[0].props).to.have.property('items')
      .and.to.deep.equal(items);
  });
});
