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
  ]
};

export default config;
