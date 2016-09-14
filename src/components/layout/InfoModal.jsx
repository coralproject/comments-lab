import React, {Component, PropTypes} from 'react';
import {Dialog, DialogTitle, DialogContent, DialogActions, Button} from 'react-mdl';
import { connect } from 'react-redux';
import {setTopic} from 'playground/PlaygroundActions';
import { mediaQueries } from '../../playgroundSettings';

@connect(
  (state) => {
    return state.playground;
  },
  (dispatch) => {
    return {
      dispatch
    };
  }
)
class InfoModal extends Component {

  static propTypes = {
    modalTopic:PropTypes.string,
    topics:PropTypes.object.isRequired,
    dispatch:PropTypes.func.isRequired
  }

  handleCloseDialog() {
    this.props.dispatch(setTopic(null));
  }

  componentDidMount() {
      // Handles dialog display in Firefox and Safari
      dialogPolyfill.registerDialog(document.querySelector('#infoModal'));
  }

  render() {
    let dialog = null;
    const styles = this.props.styles || defaultStyles;
    const topic =this.props.topics[this.props.modalTopic] || {};
    return <Dialog 
        open={this.props.modalTopic}
        style={styles.dialog}
        id='infoModal'
        onCancel={this.handleCloseDialog}>
        <DialogTitle style={styles.title}>{ topic.title}</DialogTitle>
        <DialogContent style={styles.dialogContent} dangerouslySetInnerHTML={ {__html:topic.description }}/>
        {
          topic.links &&
            <DialogContent className='additionalReading'>
              <h3>Additional Reading</h3>
              <ul style={styles.links}>
              {
                topic.links.map((link) => 
                <li style={styles.link}><a href={link.href} target="_blank">{link.title}</a></li>
                )              
              }
              </ul>
              </DialogContent>
        }
        <DialogActions>
          <Button type='button' onClick={this.handleCloseDialog.bind(this)}>Got it!</Button>
        </DialogActions>
      </Dialog>;
  }
}

export default InfoModal;

const defaultStyles = {
  dialog:{
    width:600
  },
  dialogContent:{
    fontSize:14,
    lineHeight:1.5
  },
  title:{
    fontSize:34
  },
  links: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 14
  },
  link: {
    marginTop:5
  }
};
