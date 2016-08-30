import { connect } from 'react-redux';
import React, {Component, PropTypes} from 'react';
import components from './';


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
      config: state.newPlayground.config.stream,
      stream: state.newPlayground.stream,
      users: state.newPlayground.items.users
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
class StreamContainer extends Component {

  static propTypes = {
    comments:PropTypes.object.isRequired,
    config:PropTypes.array.isRequired,
    stream:PropTypes.array.isRequired,
    dispatch:PropTypes.func.isRequired
  }

  mapComponentFromConfig(config,j) {
    let Component = components[config.component];
    let props = {...config.configProps};

    if (config.propTypes) {
      for (var i = 0; i < config.propTypes.length; i++) {
        props[config.propTypes[i]] = this.props[config.propTypes[i]];
      }
    }
    return <Component {...props} dispatch={this.props.dispatch} key={config.component + '_' + j} />;
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
    let sortedConfig = this.props.config.sort(this.sortConfig);
    return <div>{
      sortedConfig.map(this.mapComponentFromConfig.bind(this))
    }
    </div>;
  }
}


export default StreamContainer;

