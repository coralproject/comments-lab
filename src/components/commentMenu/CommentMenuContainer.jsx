import { connect } from 'react-redux';
import React, {Component, PropTypes} from 'react';
import {IconButton, Menu} from 'react-mdl';
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
      config: state.newPlayground.config.commentMenu,
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
class CommentMenuContainer extends Component {

  static propTypes = {
    id:PropTypes.string.isRequired,
    config:PropTypes.array.isRequired,
    comments: PropTypes.object.isRequired
  }

  mapComponentFromConfig(config) {
    let Component = components[config.component];
    let props = {...config.configProps};
    if (config.propTypes) {
      for (var i = 0; i < config.propTypes.length; i++) {
        props[config.propTypes[i]] = this.props[config.propTypes[i]];
      }      
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
    let menuStyle = styles.hideMenu;
    if (this.props.config && this.props.config.length > 0) {
      menuStyle = styles.showMenu;
    }
    const sortedConfig = this.props.config.sort(sortedConfig);
    return <div className="commentMenu"  style={menuStyle}>
        <IconButton name="more_vert" id={'commentMenu_'+this.props.id} />
        <Menu target={'commentMenu_'+this.props.id} align="right">
          {
            sortedConfig.map(this.mapComponentFromConfig.bind(this))
          }
        </Menu>
    </div>;
  }
}

export default CommentMenuContainer;

const defaultStyles = {
  showMenu: {
    float:'right',
    display:'block'
  },
  hideMenu: {
    float:'none',
    display:'none'
  }
};
