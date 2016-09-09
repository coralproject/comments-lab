import React from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { Editor, EditorState, RichUtils, Modifier, convertToRaw, SelectionState } from 'draft-js';

import { sendComment, replyComment } from 'playground/PlaygroundActions';

import backdraft from 'backdraft-js';

import EmojiPicker from 'react-emoji-picker';
import emojiMap from 'react-emoji-picker/lib/emojiMap';

import MdFormatBold from 'react-icons/lib/md/format-bold';
import MdFormatItalic from 'react-icons/lib/md/format-italic';
import MdLink from 'react-icons/lib/md/link';
import MdFormatQuote from 'react-icons/lib/md/format-quote';
import FaHeart from 'react-icons/lib/fa/heart';

import { Button, Icon } from 'react-mdl';

import { themes } from 'playgroundSettings';

@connect(state => state.playground)
@Radium
class CommentBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      showEmojiPicker: false,
      selectedRating: null
    };
    this.onChange = (editorState) => this.setState({editorState});
  }

  onToolBarClick(style) {
    const { editorState } = this.state;
    var newState = RichUtils.toggleInlineStyle(editorState, style);
    this.onChange(newState);
  }

  onSendClick() {

    if (this.props.replyMode) {
      this.props.replyCallback();
    }

    var markup = {
      'BOLD': ['<strong>', '</strong>'],
      'ITALIC': ['<em>', '</em>']
    };

    var contentState = this.state.editorState.getCurrentContent();
    var htmlContent = backdraft(convertToRaw(contentState), markup).join('<br />');

    if (this.props.replyMode) {
      this.props.dispatch(replyComment(htmlContent, this.props.parents));
    } else {
      this.props.dispatch(sendComment(htmlContent));
    }

    this.setState({editorState: EditorState.createEmpty()});

  }

  onSelectEmoji(emoji) {
    var { editorState } = this.state;
    var selectionState = editorState.getSelection();
    var contentState = editorState.getCurrentContent();
    var modifiedState = Modifier.replaceText(contentState, selectionState, emoji);
    this.setState({ showEmojiPicker: false, editorState: EditorState.createWithContent(modifiedState) });
  }

  onRatingClick(rating) {
    this.setState({ selectedRating: rating });
  }

  toggleEmojiPicker() {
    this.setState({ showEmojiPicker: !this.state.showEmojiPicker });
  }

  emojiPicker() {
    if(this.state.showEmojiPicker) {
      return (
        <EmojiPicker
          style={styles.emojiPickerStyles} onSelect={this.onSelectEmoji.bind(this)}
          query={this.state.emoji}
        />
      );
    }
  }

  render() {

    const {editorState} = this.state;
    var inlineStyles = [];
    editorState.getCurrentInlineStyle().map((style) => {
      inlineStyles.push(style);
    });

    var toolBar = this.props.togglerGroups['content'].togglers['rich_content'].status
      || this.props.togglerGroups['content'].togglers['emoji'].status
      ?
      <div style={ styles.toolBar }>
          {
            this.props.togglerGroups['content'].togglers['rich_content'].status ?
              <span>
                <button
                  onClick={ this.onToolBarClick.bind(this, 'BOLD') }
                  style={ [ styles.toolBarButton, inlineStyles.indexOf('BOLD') >= 0 ? styles.toolBarActive : "" ] }>
                  <MdFormatBold />
                </button>
                <button
                  onClick={ this.onToolBarClick.bind(this, 'ITALIC') }
                  style={ [ styles.toolBarButton, inlineStyles.indexOf('ITALIC') >= 0 ? styles.toolBarActive : "" ] }>
                  <MdFormatItalic />
                </button>
                <button style={ styles.toolBarButton }><MdLink /></button>
                <button style={ styles.toolBarButton }><MdFormatQuote /></button>
              </span>
            :
              ''
          }
          {
            this.props.togglerGroups['content'].togglers['emoji'].status ?
              <span>
                <button onClick={ this.toggleEmojiPicker.bind(this) } style={ styles.toolBarButton }><Icon name="insert_emoticon" /></button>
              </span>
            :
              ''
          }
        </div>
      : '';

    return (
      <div>
        {
          !this.props.replyMode ?
            <h3 style={ styles.commentBoxTitle }><span style={ styles.postingAs }>Posting as </span><strong style={ styles.strong }>{ this.props.togglerGroups['privacy'].togglers['pseudonyms'].status ? 'bogususer123' : 'Bogus Jones' }</strong></h3>
          :
            null
        }
        <div style={ [ styles.commentBox, this.props.replyMode ? styles.replyMode : '' ] }>
          <ReactCSSTransitionGroup
            transitionName="fade"
            transitionAppear={ false }
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            { toolBar }
          </ReactCSSTransitionGroup>
          <div style={ styles.draftJsEditor }>
            { this.emojiPicker() }
            <Editor ref="draftJsEditor" editorState={editorState} onChange={this.onChange} />
          </div>
          <div style={ styles.commentBoxActions }>
            {
              this.props.replyMode && this.props.togglerGroups['experimental'].togglers['replyrating'].status ?
                <div style={ styles.replyRating }>
                  <span onClick={ this.onRatingClick.bind(this, 'agree') } style={ [ styles.replyAgree, this.state.selectedRating == 'agree' ? styles.activeRating : '' ] }>Agree</span>
                  <span onClick={ this.onRatingClick.bind(this, 'neutral') } style={ [ styles.replyNeutral, this.state.selectedRating == 'neutral' ? styles.activeRating : '' ] }>Neutral</span>
                  <span onClick={ this.onRatingClick.bind(this, 'disagree') } style={ [ styles.replyDisagree, this.state.selectedRating == 'disagree' ? styles.activeRating : '' ] }>Disagree</span>
                </div>
              :
                null
            }
            <Button raised colored ripple onClick={ this.onSendClick.bind(this) }>Post</Button>
          </div>
          {
            // !this.props.replyMode ?
            //   <div style={ styles.safetyTips }>
            //     <span style={ styles.heart }><FaHeart /></span> Dont engage in personal attacks! Remember you can always use the report tools.
            //   </div>
            // : null
          }
        </div>
      </div>
    );

  }
}

// same as the @connect decorator above
export default CommentBox;

var styles = {
  draftJsEditor: {
    padding: '20px',
    background: 'white',
    position: 'relative'
  },
  toolBar: {
    backgroundColor: 'white',
    borderBottom: '1px solid #ddd'
  },
  commentBox: {
    border: '1px solid #ddd',
    marginBottom: 20
  },
  replyMode: {
    padding: '4px',
    boxShadow: '0 0 8px #CCC'
  },
  commentBoxActions: {
    padding: '20px',
    background: 'white',
    textAlign: 'right'
  },
  replyRating: {
    display: 'inline-block',
    marginRight: '10px',
    borderRadius: '4px'
  },
  replyAgree: {
    background: '#BEB',
    color: 'black',
    cursor: 'pointer',
    padding: '13px',
    borderRadius: '4px 0 0 4px',
    opacity: .5
  },
  replyNeutral: {
    background: '#EEE',
    color: 'black',
    cursor: 'pointer',
    padding: '13px',
    opacity: .5
  },
  replyDisagree: {
    background: '#EBB',
    color: 'black',
    cursor: 'pointer',
    padding: '13px',
    borderRadius: '0 4px 4px 0',
    opacity: .5
  },
  activeRating: {
    opacity: 1
  },
  sendButton: {
    padding: '10px 15px',
    color: 'white',
    borderRadius: '4px',
    border: 'none',
    background: 'linear-gradient(to right, rgba(247,114,96,1) 0%, rgba(252,149,70,1) 100%)',
    fontSize: '12pt',
    cursor: 'pointer'
  },
  commentBoxContent: {
    backgroundColor: 'white',
    padding: '20px',
    minHeight: '250px'
  },
  commentBoxTitle: {
    fontSize: '11pt',
    paddingBottom: '10px',
    fontFamily: themes.default.fontFamily
  },
  toolBarButton: {
    cursor: 'pointer',
    padding: '10px',
    borderRight: '1px solid #eee',
    borderTop: '0',
    borderLeft: '0',
    borderBottom: '0',
    background: 'white',
    fontSize: '12pt',
    outline: 'none'
  },
  toolBarActive: {
    background: '#F77260',
    color: '#fff'
  },
  heart: {
    color: '#900',
    position: 'absolute',
    left: '20px',
    top: '20px'
  },
  safetyTips: {
    background: '#fafafa',
    padding: '20px 20px 20px 50px',
    color: '#999',
    borderTop: '1px solid #eee',
    position: 'relative'
  },
  strong: {
    fontWeight: 'bold',
    fontFamily: themes.default.fontFamily
  },
  postingAs: {
    fontFamily: themes.default.fontFamily
  },
  emojiPickerStyles: {
    position: 'absolute',
    left: 0,
    top: '0px',
    backgroundColor: 'white',
    width: '100%',
    padding: '20px',
    border: '1px solid #0074d9',
    borderTop: 'none',
    zIndex: '9999'
  }
};
