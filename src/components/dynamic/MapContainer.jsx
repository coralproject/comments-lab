import React, {Children} from 'react';

const MapContainer = (props) => {
  const itemArray = props.items[props.id][props.array];
  return <div className={'map' + this.props.array}>
    {
      itemArray.map((item) => {
        Children.map(props.children, (ChildComponent) => {
          return <ChildComponent id={item}/>;
        });
      })
    }
  </div>;
};

export default MapContainer;
