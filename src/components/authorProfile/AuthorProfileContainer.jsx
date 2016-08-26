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
      config: state.newPlayground.config.authorProfile,
      authors: state.newPlayground.items.users,
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
class AuthorProfileContainer extends Component {

  static propTypes = {
    commentId:PropTypes.string.isRequired
  }

  getItem() {
    console.log(this.props.comments);
    let authorId = this.props.comments[this.props.commentId].user;
    return this.props.authors[authorId];
  }

  mapComponentFromConfig(config) {
    let Component = components[config.component];
    let props = {...config.configProps};
    for (var i = 0; i < config.propTypes.length; i++) {
      props[config.propTypes[i]] = this.getItem()[config.propTypes[i]];
    }
    return <Component {...props} key={config.component} />;
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
    return <div>
        {
          sortedConfig.map(this.mapComponentFromConfig.bind(this))
        }
    </div>;
  }
}


export default AuthorProfileContainer;
