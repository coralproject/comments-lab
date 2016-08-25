import React, {Component, PropTypes} from 'react';
import {addComponent, removeComponent, updateComponent} from '../../playground/PlaygroundActions';


class StreamTabs extends Component {

  static propTypes = {
    activeTab:PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  onStaffClick() {
    this.props.dispatch(updateComponent('stream','StaffFilter',['stream','items']));
    this.props.dispatch(updateComponent('stream','StreamTabs',null,null,{activeTab:'staff'}));
  }

  onAllClick() {
    this.props.dispatch(removeComponent('stream','StaffFilter'));
    this.props.dispatch(updateComponent('stream','StreamTabs',null,null,{activeTab:'all'}));
  }

  render() {
    let styles = this.props.styles || defaultStyles;
    return <div className="mdl-tabs mdl-js-tabs is-upgraded" >
      <div className="mdl-tabs__tab-bar" style={styles.tabBar}>
        <a className={'mdl-tabs__tab ' + (this.props.activeTab == 'all' ? 'is-active' : null)}
          style={styles.streamTab}
          onClick={ this.onAllClick.bind(this) }>
          All
        </a>
        <a className={'mdl-tabs__tab ' + (this.props.activeTab == 'staff' ? 'is-active' : null)}
          style={styles.streamTab}
          onClick={ this.onStaffClick.bind(this) }>
          Staff Picks
        </a>
      </div>
    </div>;
  }
}

const defaultStyles = {
  tabBar: {
    justifyContent:'flex-start'
  },
  streamTab: {
    cursor:'pointer'
  }
};

export default StreamTabs;
