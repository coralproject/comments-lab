import React, {Component, PropTypes} from 'react';
import {Icon, Dialog, DialogTitle, DialogContent, DialogActions, Button, Textfield} from 'react-mdl';

class Permalink extends Component {
  constructor(props) {
    super(props);
    this.state={showLink:false};
    this.toggleLink = this.toggleLink.bind(this);
    this.copyToClipBoard = this.copyToClipBoard.bind(this);
  }

  static propTypes = {
    id: PropTypes.string.isRequired
  }

  toggleLink(e) {
    e.preventDefault();
    this.setState({showLink:!this.state.showLink});
  }

  copyToClipBoard() {
    var copyTextarea = document.querySelector('.permalinkTextArea input');
    copyTextarea.select();
    try {
      let success = document.execCommand('copy');
      if (success) {
        this.setState({copiedAlert:'Copied!'});
      } else {
        this.setState({copiedAlert:'Browser does not support copying.'});
      }
    } catch (err) {
      this.setState({copiedAlert:'Browser does not support copying.'});
    }
  }

  render() {
    const styles = this.props.styles || defaultStyles;
    return <div className="permalinkContainer" style={styles.permalinkContainer}>
      <Icon style={styles.permalink} onClick={this.toggleLink} name="link"/>
      <Dialog
        style={styles.linkDialog}
        className="linkDialog"
        open={this.state.showLink}>
        <DialogTitle className="linkDialogTitle">Permalink</DialogTitle>
        <DialogContent>
          <Textfield 
            className="permalinkTextArea"
            style={styles.permalinkTextArea}
            label="permalink"
            value={'/fake/link/to/post/' + this.props.id}/>
          <p>{this.state.copiedAlert}</p>
        </DialogContent>
        <DialogActions>
          <Button type='button' onClick={this.toggleLink}>Done</Button>
          <Button type='button' onClick={this.copyToClipBoard}>Copy to Clipboard</Button>
        </DialogActions>
      </Dialog>
    </div>;
  }
}

export default Permalink;

const defaultStyles = {
  permalink: {
    cursor:'pointer',
    fontSize:18
  },
  linkDialog: {
    width:'fit-content'
  },
  permalinkTextArea: {
    width:400
  },
  permalinkContainer:{
    display:'inline-block',
    marginLeft:5
  }
};
