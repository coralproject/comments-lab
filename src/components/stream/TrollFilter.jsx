import React, {Component, PropTypes} from 'react';
import {setStream, updateComponent} from '../../playground/PlaygroundActions';

class TrollFilter extends Component {

  static propTypes = {
    comments:PropTypes.object.isRequired,
    stream:PropTypes.array.isRequired,
    dispatch:PropTypes.func.isRequired
  }

  filterProps(props) {
    let filteredStream = [];
    for (var i = 0; i < props.stream.length; i++) {
      if (!props.comments[props.stream[i]].troll) {
        filteredStream.push(props.stream[i]);
      }
    }
    this.props.dispatch(setStream(filteredStream));
    this.props.dispatch(updateComponent('replies','Replies',null,null,{showTrolls:false}));
  }

  componentDidMount() {
    this.setState({original:this.props.stream});
    this.filterProps(this.props);
  }

  shouldComponentUpdate(nextProps) {
    let newContent = false;
    if (nextProps.stream.length != this.props.stream.length) {
      newContent = true;
    }
    for (var i = 0; i < nextProps.length; i++) {
      if (nextProps.stream[i] !== this.props.stream[i]) {
        newContent = true;
      }
    }
    return newContent;
  }

  componentWillUpdate(nextProps) {
    this.filterProps(nextProps);
  }

  componentWillUnmount() {
    this.props.dispatch(setStream(['a','b','c','d','e','f','g','h','i','j']));
    this.props.dispatch(updateComponent('replies','Replies',null,null,{showTrolls:true}));
  }

  render() {
    return null;
  }
}

export default TrollFilter;
