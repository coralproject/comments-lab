import React, {Component, PropTypes} from 'react';
import { setSnackbar, updateItem } from 'playground/PlaygroundActions';
import { IconButton, Dialog, Textfield, DialogTitle, DialogContent, DialogActions, Button} from 'react-mdl';

class DetailFlag extends Component {

  constructor(props) {
    super(props);
    this.state = {showDialog:false};
    this.toggleDialog = this.toggleDialog.bind(this);
    this.onReportClick = this.onReportClick.bind(this);
  }

  toggleDialog() {
    if (!this.props.flagged) {
      this.setState({showDialog: !this.state.showDialog});
    }
  }

  componentDidMount() {
    // Handles dialog display in Firefox and Safari
    dialogPolyfill.registerDialog(document.querySelector('#detailFlag'+this.props.id));
  }


  onReportClick() {
    this.props.dispatch(setSnackbar({
      text:'Thank you for reporting this comment. Our moderation team has been notified and will review it shortly.'
    }));
    this.props.dispatch(updateItem(this.props.id, 'comments', 'flagged', true));      
    this.toggleDialog();
  }




  static propTypes = {
    id: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  render() {
    const styles = this.props.styles || defaultStyles;
    return <div>
      <IconButton
        name='flag'
        style={this.props.flagged ? styles.flagged : styles.unflagged}
        onClick={this.toggleDialog} />
      <Dialog
        id={'detailFlag'+this.props.id}
        open={this.state.showDialog}
        onCancel={this.toggleDialog}
        style={styles.dialog}>
        <DialogTitle style={styles.dialogTitle}>
          What is the reason for your flag?
        </DialogTitle>
        <DialogContent style={styles.dialogContent}>
          <Textfield
              onChange={() => {}}
              label="Optional info for moderation team"
              floatingLabel
              rows={2}
              style={styles.dialogTextfield}/>
        </DialogContent>
        <DialogActions fullWidth>
          <Button style={styles.reportButton} onClick={this.onReportClick}>Disagree</Button>
          <Button style={styles.reportButton} onClick={this.onReportClick}>Spam</Button>
          <Button style={styles.reportButton} onClick={this.onReportClick}>Offensive</Button>
          <Button style={styles.reportButton} onClick={this.onReportClick}>Off Topic</Button>
          <Button style={styles.reportButton} onClick={this.onReportClick}>Other</Button>
        </DialogActions>
      </Dialog>
    </div>;
  }
}

export default DetailFlag;

const defaultStyles = {
  unflagged: {
    color:'#ccc'
  },
  flagged: {
    color:'#f36451'
  },
  dialog: {
    width:400
  },
  dialogTextfield: {
    width:'100%'
  },
  dialogTitle: {
    fontSize:34
  },
  reportButton: {
    textAlign:'center'
  }
};
