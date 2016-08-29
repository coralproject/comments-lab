import React, {Component, PropTypes} from 'react';
import {MenuItem} from 'react-mdl';
import {updateItem} from 'playground/PlaygroundActions';

class Follow extends Component {

  static propTypes = {
    id:PropTypes.string.isRequired,
    comments:PropTypes.object.isRequired,
    dispatch:PropTypes.func.isRequired
  }

  onFollowClick(e) {
    e.preventDefault();
    const followedUser = this.props.comments[this.props.id].user;
    this.props.dispatch(updateItem(followedUser,'users','following',true));
  }

  render() {
    return <MenuItem onClick={this.onFollowClick.bind(this)}>Follow</MenuItem>;
  }
}

export default Follow;
