import {Children} from 'react';

/*
* Maps a set of children onto an array of item ids
* e.g. Displaying a stream of comments
*
* @props
*   id- The id of the item with the property to be mapped.
*   array- The property to be mapped. Should be an array of ids.
*   items- All items in the redux store.
*   config- An array of config objects.
*/

const MapContainer = (props) => {
  const itemArray = props.items[props.id][props.array];
  return <div className={'map' + props.array}>
    {
      itemArray.map((item) => {
        return Children.map(props.children, (ChildComponent) => {
          return <ChildComponent
            id={item}
            config={props.config}
            items={props.items}/>;
        });
      })
    }
  </div>;
};

export default MapContainer;
