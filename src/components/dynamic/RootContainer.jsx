import {Children} from 'react';

/*
* Renders a set of dynamic components bases on a root id
*
* @props
*   id- The root id of the application (e.g. an asset with several authors, comments, etc).
*   type- The object type that this id should return (used for confirmation and readability).
*   items- All items in the redux store.
*   config- An array of config objects.
*/

const RootContainer = (props) => {
  if (props.items[props.id].type !== props.type) {
    console.warn('Id passed to RootContainer gets an object of an unexpected type. Expected ' + props.type + ' but got ' + props.items[props.id].type);
  }
  return <div id='rootContainer'>
    {
      Children.map(props.children, (ChildComponent) => {
        return <ChildComponent
          id={props.id}
          items={props.items}
          config={props.config}/>;
      })
    }
  </div>;
};

export default RootContainer;
