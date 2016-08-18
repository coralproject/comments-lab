import React, {Component, PropTypes} from 'react';
import moment from 'moment';

class DefaultComment extends Component {


    filterContent(content) {
      /*
        This pattern searches for tags within comment content,
        those tags relate to the Playground's settings as in:

        {moderation.muting}...something...{/moderation.muting}

        So we can show some mutations inside the content.
      */
      let tagSearchPattern = /{(.+)}(.*){\/(\1)}/;
      let matches = content.match(tagSearchPattern);
      let filteredContent = content;
      if (matches) {
        let togglerGroupAndKey = matches[1].split('.');
        if (this.props.togglerGroups[togglerGroupAndKey[0]].togglers[togglerGroupAndKey[1]].status) {
          filteredContent = content.replace('{' + matches[1] + '}' + matches[2] + '{/' + matches[1] + '}', matches[2]);
        } else {
          filteredContent = content.replace('{' + matches[1] + '}' + matches[2] + '{/' + matches[1] + '}', '');
        }
        return this.filterContent(filteredContent);
      } else {
        return filteredContent;
      }
    }

  // This function should prepare the content to be rendered as HTML
  // within a 'dangerouslySetInnerHTML' call.
  formatContent(content) {   
    if (this.props.showEmoji) {
      content = ReactEmoji.emojify(content);
      // After running emojify, we get an array of strings (which may contain HTML)
      // and objects holding the Emojis
      content = content.map((obj) => {
        if (typeof obj == 'object') {
          // We render the Emojis as plain HTML, 
          // or they would render as "[Object object]"
          return React.renderToString(<span>{ obj }</span>);
        } else {
          return obj;
        }
      }).join('');
    }
    return { __html: content };
  }

  render() {
    const styles = this.props.styles || defaultStyles;

    return (
      <div className='comment'>
        <div style={ styles.commentDate } className='commentDate'>{ moment().fromNow() }</div>
        <div style={ styles.commentContent } dangerouslySetInnerHTML={ this.formatContent(this.filterContent(this.props.content)) }/>
      </div>
    );
  }
}

DefaultComment.propTypes = {
  content:PropTypes.string.isRequired
};

export default DefaultComment;

let defaultStyles =   {
  commentDate: {
    fontSize: '10pt',
    color: '#999',
    marginBottom: '5px'
  },
  commentContent: {
    fontSize: '12pt',
    minHeight: '60px'
  }
};
