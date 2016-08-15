import React, {Component, PropTypes} from 'react'; 

class DefaultComment extends Component {
  render() {

    return (
      <div className="comment">
        <div className="content">
          {this.props.content}
        </div>
      </div>
    );
  }
}

DefaultComment.propTypes = {
  content:PropTypes.string.isRequired
};

export default DefaultComment;
