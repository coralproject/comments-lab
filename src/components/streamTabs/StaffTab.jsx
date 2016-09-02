import React, {Component, PropTypes} from 'react';
import {addComponent, removeComponent} from 'playground/PlaygroundActions';

class StaffTab extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  render() {
    const styles = this.props.styles || defaultStyles;
    return <a className={'mdl-tabs__tab ' + (this.props.activeTab == 'staff' ? 'is-active' : null)}
      style={styles.streamTab}
      onClick={ this.props.switchTab('staff') }>
      Staff
    </a>;
  }
}

export default StaffTab;

const defaultStyles = {
  streamTab: {
    cursor:'pointer'
  }
};
