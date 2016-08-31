import React, {Component, PropTypes} from 'react';
import {MenuItem} from 'react-mdl';
import {addComponent} from 'playground/PlaygroundActions';

class Block extends Component {

  static propTypes = {
    id:PropTypes.string.isRequired,
    comments:PropTypes.object.isRequired,
    dispatch:PropTypes.func.isRequired
  }

  onBlockClick(e) {
    e.preventDefault();
    const blockedUser = this.props.comments[this.props.id].user;
    this.props.dispatch(addComponent('stream','BlockFilter',['stream','comments'],-100,{blockedUser: blockedUser}));
  }

  render() {
    return <MenuItem onClick={this.onBlockClick.bind(this)}>Block</MenuItem>;
  }
}

export default Block;
