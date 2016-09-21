import React, {Component, PropTypes} from 'react';
import components from '../components';

class DynamicContainer extends Component {

  constructor(props) {
    super(props);
    this.getPropsFromItems = this.getPropsFromItems.bind(this);
    this.mapComponents = this.mapComponents.bind(this);
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    config: PropTypes.array.isRequired,
    items: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
  }

  traverseEdges(edges, index, query) {
    let bracketCount = 0;
    let subqueryLength = 0;
    let subquery = query.slice(index).reduce((subquery, char, i) => {
      if (bracketCount === 0 && i !== 0) {
        return subquery;
      }
      subqueryLength ++;
      switch (char) {
      case '{':
        bracketCount ++;
        break;
      case '}':
        bracketCount --;
        break;
      }
      return subquery += char;
    },'');
    query.splice(index, subqueryLength-1);
    return edges.reduce((array, edge) => {
      array.push(this.getPropsFromItems(subquery,edge));
      return array;
    },[]);
  }

  getPropsFromItems(query, id) {
    let idStack = [id];
    let relationshipStack = [];
    let result = {};

    query.split('').reduce((string, char, i, q) => {
      const id = idStack[idStack.length - 1];
      let object = relationshipStack.reduce((object, relationship) => {
        return object[relationship];
      }, result);
      if (/[a-z0-9]/i.test(char)) {
        return string + char;
      }
      switch (char) {
      case '{':
        if (!string) {
          return string;
        }
        idStack.push(this.props.items[id][string]);
        relationshipStack.push(string);
        let val = this.props.items[id][string]; 
        if (val.constructor === Array) {
          object[string] = this.traverseEdges(val, i, q);
          idStack.pop();
          relationshipStack.pop();
        } else {
          object[string] = {};          
        }
        break;
      case '}':
        idStack.pop();
        relationshipStack.pop();
        if (!string) {
          return string;
        }
        object[string] = this.props.items[id][string];
        break;
      case ',':
        if (!string) {
          return string;
        }
        object[string] = this.props.items[id][string];
        break;
      }
      return '';
    },'');
    return result;
  }

  mapComponents(config) {
    let Component = components[config.component];
    let props = this.getPropsFromItems(config.graphQL, this.props.id);
    return <Component {...props} {...config.props} key={config.component}/>;
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

  filterConfig(name) {
    return (configObj) => configObj.container === name;
  }


  render() {
    let config = this.props.config
      .filter(this.filterConfig(this.props.name))
      .sort(this.sortConfig);
    return <div className={this.props.name}>
      {
        config.map(this.mapComponents)
      }
    </div>;
  }
}

export default DynamicContainer;
  
