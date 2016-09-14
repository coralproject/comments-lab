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
      config: state.playground.config.flag,
      comments: state.playground.items.comments
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
class FlagContainer extends Component {
  constructor(props) {
    super(props);
    this.mapComponentFromConfig = this.mapComponentFromConfig.bind(this);
    this.getItem = this.getItem.bind(this);
  }

  static propTypes = {
    id:PropTypes.string.isRequired,
    config:PropTypes.array.isRequired,
    comments: PropTypes.object.isRequired
  }

  getItem() {
    return this.props.comments[this.props.id];
  }

  mapComponentFromConfig(config) {
    let Component = components[config.component];
    let props = {...config.configProps};
    if (config.propTypes) {
      config.propTypes.reduce((props, propType) => {
        props[propType] = this.getItem()[propType];
        return props;
      },props);   
    }
    return <Component {...props} dispatch={this.props.dispatch} key={config.component}/>;
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
    return <div className="flag" style={styles.flag} >
      {
        sortedConfig.map(this.mapComponentFromConfig)
      }
    </div>;
  }
}

export default FlagContainer;

const defaultStyles = {
  flag: {
    float:'right',
    display:'inline-block'
  }
}
