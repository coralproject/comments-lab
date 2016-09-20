import {Children} from 'react';

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
