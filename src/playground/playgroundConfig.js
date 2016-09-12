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
      propTypes:['id'],
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
