import React, {Component, PropTypes} from 'react';
import {Icon, Dialog, DialogTitle, DialogContent, DialogActions, Button, Textfield} from 'react-mdl';

class Permalink extends Component {
  constructor(props) {
    super(props);
    this.state={showLink:false};
    this.toggleLink = this.toggleLink.bind(this);
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
    console.log(copyTextarea)
    copyTextarea.select();
    try {
      document.execCommand('copy');
    } catch (err) {
      console.log('Browser does not support copying');
    }
  }

  render() {
    const styles = this.props.styles || defaultStyles;
    return <div>
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
            value={'http://playground.coralproject.com/fake/link/to/post/' + this.props.id}/>
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
    cursor:'pointer'
  },
  linkDialog: {
    width:'fit-content'
  },
  permalinkTextArea: {
    width:400
  }
};
