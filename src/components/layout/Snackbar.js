import React, {Component, PropTypes} from 'react';
import { Snackbar } from 'react-mdl';
import { connect } from 'react-redux';
import {setSnackbar} from 'playground/PlaygroundActions';
import { mediaQueries } from '../../playgroundSettings';

@connect(
  (state) => {
    return state.playground.snackbar;
  },
  (dispatch) => {
    return {
      dispatch
    };
  }
)

class Snack extends Component {

  static propTypes = {
    text:PropTypes.string,
    action:PropTypes.string
  }
  
  render() {
    return <Snackbar
        active={this.props.text}
        onTimeout={()=>this.props.dispatch(setSnackbar({}))}
        action={this.props.actionName}>{this.props.text}</Snackbar>
  }
}  

export default Snack;
