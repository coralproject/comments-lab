import React, {Component, PropTypes} from 'react';
import {MenuItem} from 'react-mdl';
import {addComponent} from 'playground/PlaygroundActions';

class Block extends Component {

  static propTypes = {
    id:PropTypes.string.isRequired,
    user:PropTypes.string.isRequired,
    dispatch:PropTypes.func.isRequired
  }

  onBlockClick(e) {
    e.preventDefault();
    this.props.dispatch(addComponent('stream','BlockFilter',['stream','comments'],-100,{blockedUser: this.props.user}));
  }

  render() {
    return <div>
      {
       this.props.user!== '0' && 
       <MenuItem onClick={this.onBlockClick.bind(this)}>Block</MenuItem>
      }
    </div>;
  }
}

export default Block;
