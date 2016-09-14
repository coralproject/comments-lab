import React, {Component, PropTypes} from 'react';
import {Icon, Dialog, DialogTitle, DialogContent, DialogActions, Button, Textfield} from 'react-mdl';
import {updateItem} from 'playground/PlaygroundActions';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state={
      showEdit:false,
      content:props.content
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.onSaveClick = this.onSaveClick.bind(this);
  }

  static propTypes = {
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  toggleEdit(e) {
    e.preventDefault();
    this.setState({showEdit:!this.state.showEdit});
  }

  onSaveClick() {
    this.props.dispatch(updateItem(this.props.id, 'comments', 'content', this.state.content));
    this.setState({showEdit:false});
    this.props.dispatch(updateItem(this.props.id, 'comments', 'edited', true));
  }

  render() {
    const styles = this.props.styles || defaultStyles;
    return <div>
    {
      this.props.user === '0' &&
      <Icon style={styles.editIcon} onClick={this.toggleEdit} name="mode_edit"/>
    }
    <Dialog
      style={styles.editModal}
      className="editDialog"
      open={this.state.showEdit}>
      <DialogTitle className="editDialogTitle" style={styles.editDialogTitle}>Edit Comment</DialogTitle>
      <DialogContent>
        <Textfield
          onChange={(e) => {
            this.setState({content:e.target.value});}}
          label=""
          value={this.state.content}
          rows={3}
          style={styles.textField}
          className="editTextfield"
          />
      </DialogContent>
      <DialogActions>
        <Button type='button' onClick={this.onSaveClick}>Save</Button>
      </DialogActions>
    </Dialog>
    </div>;
  }
}

export default Edit;

const defaultStyles = {
  editIcon:{
    cursor:'pointer',
    fontSize:18
  },
  editDialogTitle:{
    fontSize:28
  },
  editModal:{
    width:'50%'
  },
  textField: {
    width:'100%'
  },
  hide: {
    display:'none'
  }
};
