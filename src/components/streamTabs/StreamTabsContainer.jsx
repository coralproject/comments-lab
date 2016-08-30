import { connect } from 'react-redux';
import React, {Component, PropTypes} from 'react';
import components from './';
import {addComponent, removeComponent} from 'playground/PlaygroundActions';


/*
* Config provides information about how data is rendered
*  including which component is used, and what the
*  default style should be.
*
* Items includes information about the specific items to be displayed
*  (e.g. the text of a comment). This is passed to the item listed in config
*  as props.
*/
@connect(
  (state) => {
    return {
      comments: state.newPlayground.items.comments,
      config: state.newPlayground.config.streamTabs,
      stream: state.newPlayground.stream
    };
  },
  (dispatch) => {
    return {
      dispatch
    };
  }
)

/*
* Iterate through each component in config
* and pass it the appropriate props from items
*/
class StreamTabsContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {activeTab:'all'};
  }

  static propTypes = {
    config:PropTypes.array.isRequired,
    dispatch:PropTypes.func.isRequired
  }

  switchTab(newTab) {
    return (e) => {
      e.preventDefault();
      this.setState({activeTab:newTab});
      this.props.dispatch(removeComponent('stream','StaffFilter'));
      this.props.dispatch(removeComponent('stream','FollowFilter'));
      switch(newTab) {
      case 'staff':
        this.props.dispatch(addComponent('stream','StaffFilter', ['comments', 'stream']));
        break;
      case 'follow':
        this.props.dispatch(addComponent('stream','FollowFilter', ['comments','stream','users']));
        break;
      }
    };
  }

  mapComponentFromConfig(config,j) {
    let Component = components[config.component];
    let props = {...config.configProps};
    return  <Component
      {...props}
      dispatch={this.props.dispatch}
      activeTab={this.state.activeTab}
      switchTab={this.switchTab.bind(this)}
      key={config.component + '_' + j} />;
  }

  sortConfig(a,b) {
    if (a.order > b.order) {
      return 1;
    }
    if (a.order < b.order) {
      return -1;
    }
    return 0;
  }

  render() {
    const styles = this.props.styles || defaultStyles;
    const sortedConfig = this.props.config.sort(this.sortConfig);
    return <div>
    {
      this.props.config.length > 1 ?
      <div className="mdl-tabs mdl-js-tabs is-upgraded" >
        <div className="mdl-tabs__tab-bar" style={styles.tabBar}>
          {
            sortedConfig.map(this.mapComponentFromConfig.bind(this))
          }
        </div>
      </div> : null
    }
  </div>;
  }
}


export default StreamTabsContainer;

const defaultStyles = {
  tabBar: {
    justifyContent:'flex-start'
  }
};
