import React from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';

import {RootContainer, Container, MapContainer} from 'react-dynamic-containers';

@connect(state => state.playground)
@Radium
class Preview extends React.Component {

  render() {

    return (
        <div>
        {
          /*
          * RootContainer takes an ID of a root component used to kick off a query
          * for the view.
          */
        }
        <RootContainer type="stream" id={this.props.params.streamId}>
          {
            /*
            * These components are then each passed the id of the stream object.
            * That id is used as a starting place for graphQL queries for that container.
            */
          }
          <Container name='Guidelines' />
          <Container name='CommentBox' />
          {
            /*
            * This component has children, which can be rendered in config along with
            * other components.
            */
          }
          <Container name='Stream'>
            {
              /*
              * MapContainer looks for an array in props (in this case "comments")
              * and maps its children to that array.
              * 
              *  If MapContainer is passed props like so:
              *  
              *   this.props === {
              *     comments:[
              *         {
              *           id:1
              *         },
              *         {
              *           id:2
              *         }
              *      ]
              *   }
              * Then it will render an Author and Comment container with id=1, then with id=2, etc.
              */
            }
            <MapContainer array="comments">
              {
                /*
                * These containers will be passed an ID for a item of type comment.
                */
              }
              <Container name='Author'/>
              <Container name='Comment' />
            </MapContainer>
          </Container>
        </RootContainer>
      </div>
    );
  }
}

export default Preview;
