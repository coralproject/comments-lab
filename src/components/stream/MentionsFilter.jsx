import React, {Component, PropTypes} from 'react';
import {updateItem} from '../../playground/PlaygroundActions';

class MentionsFilter extends Component {

  static propTypes = {
    comments:PropTypes.object.isRequired,
    stream:PropTypes.array.isRequired,
    dispatch:PropTypes.func.isRequired
  }

  filterProps(props) {
    for (let i = 0; i < props.stream.length; i++) {
      let content = props.comments[props.stream[i]].content;
      let newContent = content.replace(/(@[a-z0-9_-]+)(?![^<]*<\/a>)/gi,'<a href=#>$1</a>');
      props.dispatch(updateItem(props.stream[i],'comments','content',newContent));
    }
  }

  componentDidMount() {
    this.props.stream.reduce((prev, commentId) => {
      let content = this.props.comments[commentId].content;
      this.setState((prevState) => {
        if (!prevState.originals) {
          prevState.originals = [];
        }
        prevState.originals.push({id:commentId, content}) ;
        return prevState;
      });
    },{});
    this.filterProps(this.props);
  }

  shouldComponentUpdate(nextProps) {
    let newContent = false;
    nextProps.stream.reduce((prev, commentId) => {
      if (!this.props.comments[commentId] ||
        nextProps.comments[commentId].content !== this.props.comments[commentId].content) {
        newContent = true;
      }
    },{});
    return newContent;
  }

  componentWillUpdate(nextProps) {
    this.filterProps(nextProps);
  }

  componentWillUnmount() {
    for (let i = 0; i < this.state.originals.length; i++) {
      this.props.dispatch(updateItem(this.state.originals[i].id,'comments','content',this.state.originals[i].content));
    }
  }

  render() {
    return null;
  }
}

export default MentionsFilter;
