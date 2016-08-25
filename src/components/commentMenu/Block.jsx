import React, {Component, PropTypes} from 'react';
import {MenuItem} from 'react-mdl';
import {addComponent} from 'playground/PlaygroundActions';

class Block extends Component {

  static propTypes = {
    id:PropTypes.string.isRequired,
    items:PropTypes.object.isRequired,
    dispatch:PropTypes.func.isRequired
  }

  onBlockClick(e) {
    e.preventDefault();
    const blockedUser = this.props.items[this.props.id].user;
    this.props.dispatch(addComponent('stream','BlockFilter',['stream','items'],-100,{blockedUser: blockedUser}));
  }

  render() {
    return <MenuItem onClick={this.onBlockClick.bind(this)}>Block</MenuItem>;
  }
}

export default Block;
