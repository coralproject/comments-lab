let config = {
  comments:[
    {
      propTypes:['content'],
      component:'DefaultComment'
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
