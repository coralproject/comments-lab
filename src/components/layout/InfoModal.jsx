import React, {Component, PropTypes} from 'react';
import {Dialogue, DialogueTitle, DialogueContent, DialogueActions, Button} from 'react-mdl';
import { connect } from 'react-redux';
import {setModalTopic} from '/playground/PlaygroundActions';

@connect(
  (state) => {
    return {
      modalTopic:state.modalTopic,
      topics:state.topics
    };
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
    this.props.dispatch(setModalTopic(null));
  }

  render() {
    return <Dialog open={this.props.modalTopic}>
      <DialogTitle>Learn more about { this.props.topics[this.props.modalTopic].title}</DialogTitle>
      <DialogContent>
        <p>{ this.props.topics[this.props.modalTopic].description }</p>
      </DialogContent>
      <DialogActions>
        <Button type='button' onClick={this.handleCloseDialog.bind(this)}>Got it!</Button>
      </DialogActions>
    </Dialog>;
  }
}

export default InfoModal;
