import React, {Component, PropTypes} from 'react';
import {setStream} from '../../playground/PlaygroundActions';

class ReplyFilter extends Component {

  static propTypes = {
    comments:PropTypes.object.isRequired,
    stream:PropTypes.array.isRequired,
    dispatch:PropTypes.func.isRequired
  }

  filterProps(props) {
    let filteredStream = [];
    for (var i = 0; i < props.stream.length; i++) {
      if (!props.comments[props.stream[i]].reply) {
        filteredStream.push(props.stream[i]);
      }
    }
    this.props.dispatch(setStream(filteredStream)); 
  }

  componentDidMount() {
    this.setState({original:this.props.stream});
    this.filterProps(this.props);
  }

  shouldComponentUpdate(nextProps) {
    let newContent = false;
    console.log(nextProps.stream)
    console.log(this.props.stream)
    if (nextProps.stream.length != this.props.stream.length) {
      newContent = true;
    }
    for (var i = 0; i < nextProps.length; i++) {
      if (nextProps.stream[i] !== this.props.stream[i]) {
        newContent = true;
      }
    }
    console.log(newContent)
    return newContent;
  }

  componentWillUpdate(nextProps) {
    this.filterProps(nextProps);
  }

  componentWillUnmount() {
    this.props.dispatch(setStream(['a','b','c','d','e','f','g','h','i','j']));
  }

  render() {
    return null;
  }
}

export default ReplyFilter;
