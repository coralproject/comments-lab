import React, {Component, PropTypes} from 'react';
import {setStream} from '../../playground/PlaygroundActions';

class TrollFilter extends Component {

  static propTypes = {
    comments:PropTypes.object.isRequired,
    stream:PropTypes.array.isRequired,
    dispatch:PropTypes.func.isRequired
  }

  componentDidMount() {
    this.setState({original:this.props.stream});
    let filteredStream = [];
    for (var i = 0; i < this.props.stream.length; i++) {
      if (!this.props.comments[this.props.stream[i]].troll) {
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

export default TrollFilter;
