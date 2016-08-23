import React, {Component, PropTypes} from 'react';
import {addComponent, removeComponent, updateComponent} from '../../playground/PlaygroundActions';


class StreamTabs extends Component {

  static propTypes = {
    activeTab:PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  onStaffClick() {
    this.props.dispatch(addComponent('stream','StaffFilter',['stream','items']));
    this.props.dispatch(updateComponent('stream','StreamTabs',null,{activeTab:'staff'}));
  }

  onAllClick() {
    this.props.dispatch(removeComponent('stream','StaffFilter'));
    this.props.dispatch(updateComponent('stream','StreamTabs',null,{activeTab:'all'}));
  }

  render() {
    let styles = this.props.styles || defaultStyles;
    return <div className="mdl-tabs mdl-js-tabs is-upgraded">
      <div className="mdl-tabs__tab-bar">
        <a className={'mdl-tabs__tab ' + (this.props.activeTab == 'all' ? 'is-active' : null)}
          style={styles.streamTabs}
          onClick={ this.onAllClick.bind(this) }>
          All
        </a>
        <a className={'mdl-tabs__tab ' + (this.props.activeTab == 'staff' ? 'is-active' : null)}
          style={styles.streamTabs}
          onClick={ this.onStaffClick.bind(this) }>
          Staff Picks
        </a>
      </div>
    </div>;
  }
}

const defaultStyles = {
  streamTabs: {
    cursor:'pointer'
  },
  streamTab: {
    borderTop: '3px solid #ccc',
    borderRight: '1px solid #ddd',
    borderLeft: '1px solid #ddd',
    borderBottom: '1px solid #ddd',
    padding: '15px',
    fontSize: '14pt',
    fontWeight: '600',
    background: '#f0f0f0',
    marginTop: '10px',
    marginRight: '-1px',
    marginBottom: '-1px',
    cursor: 'pointer',
    outline: 'none'
  },
  activeTab: {
    borderTop: '3px solid red',
    borderBottom: '1px solid white',
    background: 'white'
  }
};

export default StreamTabs;
