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
      config: state.newPlayground.config.interactions,
      comments: state.newPlayground.items.comments
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
class InteractionsContainer extends Component {

  getItem() {
    if (this.props.replyIndex) {
      let comment = this.props.comments[this.props.id];
      return this.props.replyIndex.reduce((priorComment, replyIndex) => {
        return priorComment.replies[replyIndex];
      }, comment);
    }
    return this.props.comments[this.props.id];
  }

  mapComponentFromConfig(config) {
    let Component = components[config.component];
    let props = {...config.configProps};
    if (config.propTypes) {
      for (var i = 0; i < config.propTypes.length; i++) {
        props[config.propTypes[i]] = this.getItem()[config.propTypes[i]];
      }      
    }
    const styles = this.props.styles || defaultStyles;
    return <div style={styles.interaction}>
      <Component {...props} dispatch={this.props.dispatch} key={config.component}/>
    </div>;
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
    const sortedConfig = this.props.config.sort(this.sortConfig);
    return <div>{
      sortedConfig.map(this.mapComponentFromConfig.bind(this))
    }
    </div>;
  }
}

InteractionsContainer.propTypes = {
  id:PropTypes.string.isRequired,
  replyIndex: PropTypes.array
};

export default InteractionsContainer;

const defaultStyles = {
  interaction: {
    display:'inline-block',
    margin:5
  }
};
