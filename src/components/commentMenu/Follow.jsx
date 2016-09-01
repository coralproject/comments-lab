import React, {Component, PropTypes} from 'react';
import {MenuItem} from 'react-mdl';
import {updateItem} from 'playground/PlaygroundActions';

class Follow extends Component {

  static propTypes = {
    id:PropTypes.string.isRequired,
    user:PropTypes.string.isRequired,
    dispatch:PropTypes.func.isRequired
  }

  onFollowClick(e) {
    e.preventDefault();
    this.props.dispatch(updateItem(this.props.user,'users','following',true));
  }

  render() {
    return <MenuItem onClick={this.onFollowClick.bind(this)}>Follow</MenuItem>;
  }
}

export default Follow;
