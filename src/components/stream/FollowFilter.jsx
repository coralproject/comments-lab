import React, {Component, PropTypes} from 'react';
import {setStream} from '../../playground/PlaygroundActions';

class FollowFilter extends Component {

  static propTypes = {
    comments:PropTypes.object.isRequired,
    users:PropTypes.object.isRequired,
    stream:PropTypes.array.isRequired,
    dispatch:PropTypes.func.isRequired
  }

  componentDidMount() {
    this.setState({original:this.props.stream});
    let filteredStream = [];
    for (var i = 0; i < this.props.stream.length; i++) {
      let author = this.props.comments[this.props.stream[i]].user;
      if (this.props.users[author].following) {
        filteredStream.push(this.props.stream[i]);
      }
    }
    this.props.dispatch(setStream(filteredStream));
  }

  componentWillUnmount() {
    this.props.dispatch(setStream(this.state.original));
  }

  render() {
    return null;
  }
}

export default FollowFilter;
