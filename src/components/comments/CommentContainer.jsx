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
      config: state.newPlayground.config.comments,
      items: state.newPlayground.items.comments
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
class CommentContainer extends Component {
  mapComponentFromConfig(config) {
    let Component = components[config.component];
    let props = {...config.configProps};
    for (var i = 0; i < config.propTypes.length; i++) {
      props[config.propTypes[i]] = this.props.items[this.props.id][config.propTypes[i]];
    }
    return <Component {...props} dispatch={this.props.dispatch} key={config.component}/>;
  }

  render() {
    return <div>{
      this.props.config.map(this.mapComponentFromConfig.bind(this))
    }
    </div>;
  }
}

CommentContainer.propTypes = {
  id:PropTypes.string.isRequired
};

export default CommentContainer;
