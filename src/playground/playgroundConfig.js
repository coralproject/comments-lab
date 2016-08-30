let config = {
  comments:[
    {
      propTypes:['id'],
      component:'CommentMenu'
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
  interactions:[],
  commentMenu:[],
  authorProfile:[]
};

export default config;
