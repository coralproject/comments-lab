import React, {Component, PropTypes} from 'react';
import {setStream, updateComponent} from '../../playground/PlaygroundActions';

class TrollFilter extends Component {

  static propTypes = {
    comments:PropTypes.object.isRequired,
    stream:PropTypes.array.isRequired,
    dispatch:PropTypes.func.isRequired
  }

  filterProps() {
    let filteredStream = [];
    for (var i = 0; i < this.props.stream.length; i++) {
      if (!this.props.comments[this.props.stream[i]].troll) {
        filteredStream.push(this.props.stream[i]);
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
    this.props.dispatch(setStream(this.state.original));
    this.props.dispatch(updateComponent('replies','Replies',null,null,{showTrolls:true}));
  }

  render() {
    return null;
  }
}

export default TrollFilter;
