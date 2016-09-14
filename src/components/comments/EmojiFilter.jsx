import React, {Component, PropTypes} from 'react';
import ReactDOMServer from 'react-dom/server';
import ReactEmoji from 'react-emoji';
import {updateItem} from '../../playground/PlaygroundActions';

class EmojiFilter extends Component {

  constructor(props) {
    super(props);
    this.state = {originalContent:null};
  }

  static propTypes = {
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }

  filterProps(props) {
    if (!props.content) {
      return;
    }
    let emojiArray = ReactEmoji.emojify(props.content);
    // After running emojify, we get an array of strings (which may contain HTML)
    // and objects holding the Emojis
    let emojiContent = emojiArray.map((obj) => {
      if (typeof obj == 'object') {
        // We render the Emojis as plain HTML, 
        // or they would render as "[Object object]"
        return ReactDOMServer.renderToString(<span>{ obj }</span>);
      } else {
        return obj;
      }
    }).join('');
    props.dispatch(updateItem(props.id, 'comments', 'content', emojiContent));
  } 

  componentDidMount() {
    this.setState({originalContent:this.props.content});
    this.filterProps(this.props);
    
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.content !== this.props.content;
  }

  componentWillUpdate(nextProps) {
    this.filterProps(nextProps);
  }

  componentWillUnmount() {
    this.props.dispatch(updateItem(this.props.id, 'comments', 'content', this.state.originalContent));
  }

  render() {
    return null;
  }
}

export default EmojiFilter;
