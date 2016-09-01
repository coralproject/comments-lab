import React, {Component, PropTypes} from 'react';
import {setStream} from '../../playground/PlaygroundActions';

class BlockFilter extends Component {

  static propTypes = {
    blockedUser:PropTypes.string.isRequired,
    stream:PropTypes.array.isRequired,
    comments:PropTypes.object.isRequired,
    dispatch:PropTypes.func.isRequired
  }

  componentDidMount() {
    this.setState({original:this.props.stream});
    let filteredStream = [];
    for (var i = 0; i < this.props.stream.length; i++) {
      if (this.props.comments[this.props.stream[i]].user != this.props.blockedUser) {
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

export default BlockFilter;
