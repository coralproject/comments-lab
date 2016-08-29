import React, {Component, PropTypes} from 'react';
import {setStream} from '../../playground/PlaygroundActions';

class UpDownVoteOrderFilter extends Component {

  static propTypes = {
    comments:PropTypes.object.isRequired,
    stream:PropTypes.array.isRequired,
    dispatch:PropTypes.func.isRequired
  }

  componentDidMount() {
    this.setState({original:this.props.stream});
    let reorderedStream = this.props.stream.slice();
    reorderedStream.sort((a,b) => {
      let c1 = this.props.comments[a];
      let c2 = this.props.comments[b];
      return (c2.upvotes - c2.downvotes) - (c1.upvotes - c1.downvotes);
    });
    this.props.dispatch(setStream(reorderedStream));
  }

  componentWillUnmount() {
    this.props.dispatch(setStream(this.state.original));
  }

  render() {
    return null;
  }
}

export default UpDownVoteOrderFilter;
