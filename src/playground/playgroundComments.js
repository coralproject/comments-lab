const comments = {
  a:{
    user: '1',
    id:'a',
    content: "Hello, @nobeyonce. Clinton is a smart guy, but I only started to trust or like him was when he was no longer running. And here he is running for his wife, Hillary. For him to lecture Sanders, or the public about Sanders, on the subject of honesty or integrity, is too much. I don't buy it. :smile:",
    likes: 28,
    liked: false,
    reactions: [{name: 'heart', count: 1}, {name: 'ok_woman',count: 2}],
    upvotes: 87,
    downvotes: 10,
    upvoted: false,
    staffPick: true,
    showProfile:true,
    pubdate: 3600000,
    replies: [
      {
        user: '2',
        content: 'This is a reply from another user.',
        likes: 9,
        liked: false,
        reactions: [{name: 'heart', count: 1}, {name: 'ok_woman',count: 2}],
        upvotes: 56,
        upvoted: false,
        pubdate: 4500000,
        replies: [
          {
            user: '1',
            content: 'This is a SECOND reply from another user.',
            likes: 9,
            liked: false,
            reactions: [{name: 'heart', count: 1}, {name: 'ok_woman',count: 2}],
            upvotes: 45,
            upvoted: false,
            pubdate: 6000000
          }
        ]
      }
    ]
  },
  b:{
    user: '1',
    id:'b',
    content: 'Testing some emojis. :ok_woman: :heart: :hankey:  :horse_racing:',
    likes: 11,
    liked: false,
    reactions: [{name: 'heart', count: 1}, {name: 'ok_woman',count: 2}],
    upvotes: 45,
    downvotes: 0,
    upvoted: false,
    pubdate: 7200000
  },
  c:{
    user: '2',
    id:'c',
    content: "Hillary placed a bet a few years ago, that the system was corrupt, that SuperPAC's were the only way to go in the post-Citizens United era, and that she could get speaking fees from Wall St. and still come across as being less in-their-pocket than her Republican rivals.",
    likes: 4,
    liked: false,
    reactions: [{name: 'heart', count: 1}, {name: 'ok_woman',count: 2}],
    upvotes: 82,
    downvotes: 22,
    upvoted: false,
    pubdate: 7200000,
    replies: [
      {
        user: '2',
        content: "HILLARY - This is a reply from another user.",
        likes: 9,
        liked: false,
        reactions: [{name: 'heart', count: 1}, {name: 'ok_woman',count: 2}],
        upvotes: 56,
        upvoted: false,
        pubdate: 10000000,
        replies: [
          {
            user: '1',
            content: "HILLARY - This is a SECOND reply from another user.",
            likes: 9,
            liked: false,
            reactions: [{name: 'heart', count: 1}, {name: 'ok_woman',count: 2}],
            upvotes: 45,
            upvoted: false,
            staffPick: true,
            pubdate: 12000000
          }
        ]
      }
    ]
  },
  d:{
    user: '1',
    id:'d',
    content: "Is it possible that Bill is going off script here? It would be hard to believe the campaign is encouraging this. Maybe he's become a difficult to control wildcard.",
    likes: 7,
    liked: false,
    reactions: [{name: 'heart', count: 1}, {name: 'ok_woman',count: 2}],
    upvotes: 84,
    downvotes: 23,
    upvoted: false,
    pubdate: 10000000
  },
  e:{
    user: '3',
    id:'e',
    content: "Sanders will keep the high road because so many young people are supporting him. Ignore the side show!",
    likes: 2,
    liked: false,
    reactions: [{name: 'heart', count: 1}, {name: 'ok_woman',count: 2}],
    upvotes: 11,
    downvotes: 5,
    upvoted: false,
    pubdate: 10200000
  },
  f:{
    user: '2',
    id:'f',
    content: "Bill's petty and pathetic remarks should be enough to make any undecided voter vote for Bernie. It's sad to see Bill shilling for Hillary in such a vulgar way.",
    likes: 9,
    liked: false,
    reactions: [{name: 'heart', count: 1}, {name: 'ok_woman',count: 2}],
    upvotes: 14,
    downvotes: 0,
    upvoted: false,
    pubdate: 15000000
  },
  g:{
    user: '1',
    id:'g',
    content: "What sickness that the Clintons think they can criticize anybody about anything. They are greedy, hypocritical, untruthful sociopaths who will take those qualities to the White House in less than a year. ",
    likes: 1,
    liked: false,
    reactions: [{name: 'heart', count: 1}, {name: 'ok_woman',count: 2}],
    upvotes: 30,
    downvotes: 15,
    upvoted: false,
    pubdate: 20000000
  },
  h:{
    user: '3',
    id:'h',
    content: "Anybody but Clinton. Heck, I would even vote for Sarah Palin before I would vote for Hillary Clinton. At least Palin appears to be honest, and she is not part of a corrupt political machine.",
    likes: 24,
    liked: false,
    reactions: [{name: 'heart', count: 1}, {name: 'ok_woman',count: 2}],
    upvotes: 22,
    downvotes: 0,
    upvoted: false,
    staffPick: true,
    pubdate: 25000000
  }  
};

export default comments;
