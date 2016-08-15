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
* and pass it props listed in item
*/
class CommentContainer extends Component {
  mapConfig(config) {
    let Component = components[this.props.config[0].component];
    return <Component {...this.props.items[this.props.id]} />;
  }

  render() {
    return <div>{
      this.props.config.map(this.mapConfig.bind(this))
    }
    </div>;
  }
}

CommentContainer.propTypes = {
  id:PropTypes.string.isRequired
};

export default CommentContainer;
