let config = {
  comments:[
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
      propTypes:['realName'],
      component:'DefaultAuthor',
      order:10
    }
  ],
  stream:[
    {
      propTypes:['stream'],
      component:'CommentStream',
      order:0
    }
  ]
};

export default config;
