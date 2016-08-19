import React, {Component, PropTypes} from 'react';
import ReactEmoji from 'react-emoji';
import {updateItem} from '../../playground/PlaygroundActions';

class EmojiFilter extends Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }

  componentDidMount() {
    this.setState({originalContent:this.props.content});
    let emojiArray = ReactEmoji.emojify(this.props.content);
    // After running emojify, we get an array of strings (which may contain HTML)
    // and objects holding the Emojis
    let emojiContent = emojiArray.map((obj) => {
      if (typeof obj == 'object') {
        // We render the Emojis as plain HTML, 
        // or they would render as "[Object object]"
        return React.renderToString(<span>{ obj }</span>);
      } else {
        return obj;
      }
    }).join('');
    this.props.dispatch(updateItem(this.props.id, 'comments', 'content', emojiContent));
  }

  componentWillUnmount() {
    this.props.dispatch(updateItem(this.props.id, 'comments', 'content', this.state.originalContent));
  }

  render() {
    return null;
  }
}

export default EmojiFilter;
