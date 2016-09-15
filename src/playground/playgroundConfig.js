let config = {
  /*
  * Item that serves as the root of the view and that
  * is passed to children of RootContainer.
  */
  root:{
    type:'stream'
  },
  /*
  * A list of queries that will be called on the backend view. 
  * These can be accessed via some action.
  */
  queries:{
    init:'a_query_string', //Query to initialize
    getItems: 'another_query_string' //Query to get an array of items
  },
  /*
  * A list of components that will be placed in the application's containers.
  * They can appear in any order.
  */
  components: [
    /*
    * This is an example of a simple config object. 
    * It's container recieves an id, it uses that id to look up
    * a comment object, and it passes the 'pubdate' prop of that object
    * to component PubDate.
    * Renders component 'Pubdate' in container 'Comment' with props:
    * this.props === {
    *   pubdate: somedate
    * }
    */
    {
      container:'Comment', //The container in which to instantiate this component
      component:'PubDate', //The component to instantiate
      order:-10,            //The order that this component should appear within the container
      graphQL: '{comment{pubdate}}' //GraphQL for retreiving data for the component from the appropriate item
    },
    /*
    * An example of a config object that traverses a path. The container is passed a comment id 
    * and retrieves that comment's author. All such pathing must be handled in this configuration file
    * so that it is transparent to both the front and back end.
    * Renders component 'DefaultAuthor in container 'Author' with props:
    * this.props === {
    *   name: 'Suzan'
    * }
    */
    {
      container: 'Author',
      component: 'DefaultAuthor',
      order: 10,
      graphQL: '{comment{author{name}}}' //Get the name of the author for this comment
    },
    /*
    * This is an example of a config item which references its children and employs iteration.
    * In this case, the container gets an array called "comments" from an item of type "Stream"
    * and iterates over those items, passing each comment id as prop 'id' to each of its children.
    * Renders the children of the Stream container with props:
    * this.props === {
    *   comments: [
    *     commentId1,
    *     commentId2,
    *     etc
    *   ]
    *  }
    */
    {
      container:'Stream',
      mapChildren: true, //Rather than loading a component, this config item
                        //passes its props to the container's children.
      order:0,
      graphQL: '{stream {comments{id}}}' //Gets an array of comments and returns their ids
    },
    {
      /*
      * This is an example of a component with a one to many relationship: a list of users
      * who like a comment. 
      * The ItemPath encounters a one-to-many relationship between comments and likes. When this
      * happens it splits the remainder of the path into an array. Multidimensional arrays could be
      * created this way.
      * Renders component 'UsersWhoLike' in container 'UsersWhoLikeContainer' with props:
      * this.props === {
      *  users:[
      *   {
      *      name: 'Joe'
      *    },
      *    {
      *      name: 'Sue'
      *    }
      *   ]
      * }
      */
      container: 'UsersWhoLikeContainer',
      component: 'UsersWhoLike',
      order:10,
      graphQL:'{comment{likes{user{name}}}}'
    },
    /*
    * This is an example of a component which which pulls information from multiple item types.
    * This is expessed through multiple item types, and some specification in propTypes.
    * In this example, we're a going to show a graph of likes on the user's comments since
    * they've joined
    * Renders component 'UserLikesGraph' in container 'Stats' with props:
    *
    * this.props === {
    *  user: {
    *   created_at: somedate
    *  },
    *  likes: [
    *   {
    *     created_at: anotherdate
    *   },
    *   {
    *     created_at: yetanotherdate
    *   }
    *   ]
    * }
    *
    */
    {
      container: 'Stats',
      component: 'UserLikesGraph',
      order: 5,
      graphQL:[
        '{user{created_at}}',
        '{user{likes{created_at}}'
      ]                
    }                   
  ] 
};

export default config;
