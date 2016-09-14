let newConfig = [
  {
    container:'Comment',
    component:'PubDate',
    order:-10,
    propTypes:['pubdate'],
    itemType:'comment'
  },
  {
    container:'Comment',
    propTypes:['content'],
    component:'DefaultComment',
    order: 0,
    itemPath:[
      {
        type:'comment',
        id:'id'
      }
    ]
  },
  {
    container: 'Author',
    propTypes: ['realName','anonymous'],
    component: 'DefaultAuthor',
    order: 10,
    itemPath: [
      {
        type:'comment',
        id:'id'
      },
      {
        type:'user',
        id:'author'
      }
    ]
  },
  {
    container:'Stream',
    propTypes:['comments'],
    iterateOver:'comments',
    mapChildren: true,
    order:0,
    itemPath:[
      {
        type:'stream',
        id:'id'
      }
    ]
  },
  {
    container: 'UsersWhoLikeContainer',
    proptypes: ['like_user','user_id', 'user_name'],
    iterateOver: ['like_user'],
    component: 'UsersWhoLike',
    order:10,
    itemPath:[
      [
        {
          type: 'comment',
          id:'id'
        },
        {
          type: 'like',
          id:'likes',
          many: true
        }
      ],
      [
        {
          type: 'comment',
          id: 'id'
        },
        {
          type: 'like',
          id: 'likes',
          many: true
        },
        {
          type: 'user',
          id: 'user'
        }
      ]
    ]
  }
];

let config = {
  comments:[
    {
      propTypes:['pubdate'],
      component:'PubDate',
      order: -10
    },
    {
      propTypes:['content'],
      component:'DefaultComment',
      order: 0
    }
  ],
  authors:[
    {
      propTypes:['realName','anonymous'],
      component:'DefaultAuthor',
      order:10
    }
  ],
  stream:[
    {
      propTypes:['stream','comments'],
      component:'CommentStream',
      order:0
    },
    {
      propTypes:['stream','comments'],
      component:'TrollFilter',
      order:10
    }
  ],
  streamTabs:[
    {
      component:'AllTab',
      propTypes:['activeTab'],
      order:0  
    }
  ],
  flag:[
    {
      propTypes:['id', 'flagged'],
      component:'DefaultFlag',
      order:0
    }
  ],
  interactions:[],
  commentMenu:[],
  authorProfile:[],
  replies:[]
};

export default config;
