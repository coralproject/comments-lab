import React, {Component, PropTypes} from 'react';
import {updateItem} from '../../playground/PlaygroundActions';

class MentionsFilter extends Component {

  static propTypes = {
    comments:PropTypes.object.isRequired,
    stream:PropTypes.array.isRequired,
    dispatch:PropTypes.func.isRequired
  }

  componentDidMount() {
    for (let i = 0; i < this.props.stream.length; i++) {
      let content = this.props.comments[this.props.stream[i]].content;

      this.setState((prevState) => {
        if (!prevState.originals) {
          prevState.originals = [];
        }
        prevState.originals.push({id:this.props.stream[i],content}) ;
        return prevState;
      });

      let newContent = content.replace(/(@[a-z]+)/g,'<a href=#>$1</a>');
      this.props.dispatch(updateItem(this.props.stream[i],'comments','content',newContent));
    }
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
