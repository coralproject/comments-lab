import React, {Component, PropTypes} from 'react';
import ReactEmoji from 'react-emoji';
import { Icon } from 'react-mdl';
import {updateItem} from 'playground/PlaygroundActions';
import EmojiPicker from 'react-emoji-picker';
import emojiMap from 'react-emoji-picker/lib/emojiMap';


class Reactions extends Component {

  constructor(props) {
    super(props);
    this.reactionClick = this.reactionClick.bind(this);
    this.toggleEmojiPicker = this.toggleEmojiPicker.bind(this);
    this.onSelectEmoji = this.onSelectEmoji.bind(this);
    this.state = {
      showEmojiPicker:false
    };
  }

  static propTypes = {
    reactions: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired
  }

  toggleEmojiPicker() {
    this.setState({ showEmojiPicker: !this.state.showEmojiPicker });
  }

  onSelectEmoji(emoji) {
    let reactions = this.props.reactions.slice();
    reactions.push({
      name: emoji,
      count:1
    });
    this.props.dispatch(updateItem(this.props.id,'comments','reactions',reactions));
    this.setState({showEmojiPicker:false});
  }

  reactionClick(name) {
    return (e) => {
      e.preventDefault();
      let reactions = this.props.reactions.slice();
      reactions.reduce((prev, reaction) => {
        if (reaction.name == name) {
          if (reaction.clicked) {
            return;
          }
          reaction.count++;
          reaction.clicked = true;
        }
      },null);
      this.props.dispatch(updateItem(this.props.id,'comments','reactions',reactions));
    };
  }

  render() {
    const styles = this.props.styles || defaultStyles;
    return <div className="reactions">
      {
        this.props.reactions.map((reaction) => {
          return <div className='reactionEmoji' style={styles.reactionEmoji} key={reaction.name} onClick = {this.reactionClick(reaction.name)}> 
              {ReactEmoji.emojify(reaction.name)}
              <span style={styles.interactionCount} className='interactionCount'>{reaction.count}</span>
            </div>;

        })
      }
        <div      
          style={styles.toggleEmojiPicker}
          className="toggleEmojiPicker">
          <Icon
            onClick={ this.toggleEmojiPicker }
            name="insert_emoticon"/>
        </div>
      {
        this.state.showEmojiPicker &&
          <EmojiPicker
          style={styles.emojiPickerStyles} onSelect={this.onSelectEmoji}
          />
      }
    </div>;
  }
}

export default Reactions;

const defaultStyles = {
  reactionEmoji: {
    padding:1,
    borderRadius: 3,
    display: 'inline-block',
    opacity:.75,
    margin: 2,
    cursor: 'pointer'
  },
  interactionCount:{
    fontSize:10
  },
  emojiPickerStyles: {
    position: 'relative',
    backgroundColor: 'white',
    width: '100%',
    borderTop: 'none',
    zIndex: '9999'
  },
  toggleEmojiPicker:{
    padding:1,
    cursor:'pointer',
    display:'inline-block'
  }
};
