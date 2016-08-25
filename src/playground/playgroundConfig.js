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
      propTypes:['stream'],
      component:'CommentStream',
      order:0
    }
  ],
  commentMenu:[]
};

export default config;
