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
    },
    {
      component:'CommentDivider',
      order:1000
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
  commentMenu:[],
  authorProfile:[
    {
      propTypes:['id'],
      component:'BigProfilePicture',
      order:-10
    },
    {
      propTypes:['nickName'],
      component:'ProfileName',
      order:0
    }
  ]
};

export default config;
