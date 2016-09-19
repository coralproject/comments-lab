import React, {Component, PropTypes} from 'react';

class DynamicContainer extends Component {

  constructor(props) {
    super(props);
    this.getPropsFromItems = this.getPropsFromItems.bind(this);
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    config: PropTypes.array.isRequired,
    items: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
  }

  getPropsFromItems(query) {
    let idStack = [this.props.id];
    let relationshipStack = [];
    let result = {};



    query.split('').reduce((string, char) => {
      const id = idStack[idStack.length - 1];
      let object = relationshipStack.reduce((object, relationship) => {
        return object[relationship];
      }, result);
      if (/[a-z0-9]/i.exec(char)) {
        return string + char;
      }
      if (char === '{') {
        if (!string) return string;
        idStack.push(this.props.items[id][string]);
        relationshipStack.push(string);
        object[string] = {};
      }
      if (char === '}') {
        if (!string) return string; 
        object[string] = this.props.items[id][string];
        idStack.pop();
        relationshipStack.pop();
      }
      if (char === ',') {
        object[string] = this.props.items[id][string];
      }
      return '';
    },'');
    return result;
  }


  render() {

  }
}

export default DynamicContainer;
  
