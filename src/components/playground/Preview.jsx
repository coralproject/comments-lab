import React from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';

import CommentBox from './CommentBox';
import Stream from '../stream/StreamContainer';

import MdComment from 'react-icons/lib/md/comment';

import { themes, mediaQueries } from '../../playgroundSettings';

import {Card, CardText} from 'react-mdl';

@connect(state => state.playground)
@Radium
class Preview extends React.Component {

  constructor(props) {
    super(props);
    this.state = { commentsAreVisible: this.props.togglerGroups.layout.togglers.hiddenbydefault.status };
  }

  onClickToReadClick() {
    this.setState({ commentsAreVisible: true });
  }

  onHideCommentsClick() {
    this.setState({ commentsAreVisible: false });
  }

  render() {


    var guidelines = this.props.togglerGroups['community'].togglers['guidelines'].status ?
        <Card shadow={1} style={styles.guidelines}>
          <CardText>
            We aim to create a safe and sustainable environment for discussion.
            <br/>
            <br/>
            That means:
            <ul style={styles.communityNorms}>
              <li>Be supportive of each other</li>
              <li>Criticize ideas, not people</li>
              <li>Flag bad behavior</li>
              <li>Follow the rules</li>
            </ul>

            <br/>
            <p>The best contributions will be featured on the site and in our newsletter.</p>
            <a href="#">Click here to read our community guidelines and harassment policy.</a>
          </CardText>
        </Card>
      :
        null;

    return (
      <div style={ styles.preview } id="preview">
        <div style={ styles.previewBar }>
          {
            this.props.togglerGroups.layout.togglers.hiddenbydefault.status &&
            this.state.commentsAreVisible ?
              <button style={ styles.hideComments } onClick={ this.onHideCommentsClick.bind(this) }>Hide comments</button>
            : null
          }
        </div>

        {
          !this.props.togglerGroups.layout.togglers.hiddenbydefault.status ||
            this.state.commentsAreVisible ?

            <div style={ styles.sandBox }>
              {guidelines}
              <CommentBox />
              <Stream />
            </div>

          :

            <div style={ styles.clickToRead } onClick={ this.onClickToReadClick.bind(this) }>
              <MdComment /> Click here to <strong>read the comments.</strong>
            </div>
        }
      </div>
    );
  }
}

// same as the @connect decorator above
export default Preview;

var styles = {
  preview: {
    background: 'white',
    padding: '0px 40px 40px 40px',
    color: '#3d3d3d',
    minHeight: '500px',
    width:'65%',
    display:'inline-block',
    overflowY: 'auto',
    [mediaQueries.tablet]: {
      'float': 'none',
      width: '100%',
      height: 'auto',
      padding: '20px 20px 120px 20px'
    }
  },
  previewIcon: {
    marginTop: '-10px',
    marginRight: '10px'
  },
  clickToRead: {
    cursor: 'pointer',
    padding: '20px',
    border: '1px solid #ddd',
    margin: '10px 0',
    fontSize: '20pt',
    color: '#444'
  },
  sandBox: {
  },
  sandBoxIntro: {
    padding: '20px',
    color: '#AAA',
    textAlign: 'center',
    fontSize: '11pt'
  },
  previewBar: {
    position: 'relative',
    fontSize: '16pt',
    paddingBottom: '10px'
  },
  previewTitleSpan: {
    fontFamily: themes.default.fontFamily,
    fontWeight: '300',
    fontSize: '24pt'
  },
  hideComments: {
    position: 'absolute',
    right: '0px',
    top: '0px',
    background: '#eee',
    padding: '5px 10px',
    border: '1px solid #aaa'
  },
  guidelines: {
    width:'90%',
    padding: 10,
    lineHeight: '1.1',
    color: '#222',
    marginBottom: '20px'
  },
  communityNorms: {
    marginLeft:20
  }
};
