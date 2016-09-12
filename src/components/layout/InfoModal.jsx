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

  render() {
    let dialog = null;
    const styles = this.props.styles || defaultStyles;
    if(this.props.modalTopic && this.props.topics[this.props.modalTopic]) {
      dialog = <Dialog open={this.props.modalTopic} style={styles.dialog}>
        <DialogTitle>{ this.props.topics[this.props.modalTopic].title}</DialogTitle>
        <DialogContent style={styles.dialogContent} dangerouslySetInnerHTML={ {__html:this.props.topics[this.props.modalTopic].description }}/>
        <DialogActions>
          <Button type='button' onClick={this.handleCloseDialog.bind(this)}>Got it!</Button>
        </DialogActions>
      </Dialog>;
    }
    return dialog;
  }
}

export default InfoModal;

const defaultStyles = {
  dialog:{
    width:600,
    [mediaQueries.tablet]: {
      width:'100%'
    }
  },
  dialogContent:{
    fontSize:14,
    lineHeight:1.5
  }
};
