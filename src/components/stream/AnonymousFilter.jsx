import React, {Component, PropTypes} from 'react';
import {updateItem} from '../../playground/PlaygroundActions';

class AnonymousFilter extends Component {

  static propTypes = {
    comments:PropTypes.object.isRequired,
    users: PropTypes.object.isRequired,
    stream:PropTypes.array.isRequired,
    dispatch:PropTypes.func.isRequired
  }

  filterProps(props) {
    const anonUser = {
      nickName: 'anonymous',
      realName: 'Anonymous',
      party: null,
      comments: 1,
      membershipAge: null,
      location: null,
      education: null,
      badges: [],
      id:'anon'
    };
    props.stream.reduce((prev, commentId) => {
      const authorId = props.comments[commentId].user;
      if (props.users[authorId].anonymous) {
        Object.keys(anonUser).reduce((prev, key) =>{
          props.dispatch(updateItem(authorId, 'users',key, anonUser[key]));
        },{});
      }
      return prev;
    },{});
  }

  componentDidMount() {
    this.props.stream.reduce((prev, commentId) => {
      const authorId = this.props.comments[commentId].user;
      const author = this.props.users[authorId];
      this.setState((prevState) => {
        if (!prevState.originals) {
          prevState.originals = [];
        }
        prevState.originals.push({id:authorId, author}) ;
        return prevState;
      });
    },{});
    this.filterProps(this.props);
  }

  shouldComponentUpdate(nextProps) {
    let newContent = nextProps.stream.length !== this.props.stream.length;
    nextProps.stream.reduce((prev, commentId) => {
      if (!this.props.comments[commentId] ||
        nextProps.comments[commentId].author !== this.props.comments[commentId].author) {
        newContent = true;
      }
    },{});
    return newContent;
  }

  componentWillUpdate(nextProps) {
    this.filterProps(nextProps);
  }

  componentWillUnmount() {
    for (let i = 0; i < this.state.originals.length; i++) {
      Object.keys(this.state.originals[i].author).reduce((prev, key) => {
        this.props.dispatch(updateItem(this.state.originals[i].id,'users',key,this.state.originals[i].author[key]));
      },{});
    }
  }

  render() {
    return null;
  }
}

export default AnonymousFilter;
