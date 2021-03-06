import {addComponent, removeComponent, upsertComponent} from './PlaygroundActions';

const togglerGroups = {
  'content': {
    name: 'Content',
    togglers: {
      'rich_content': {
        label: 'Rich content is ON',
        offLabel: 'Rich content is OFF',
        description: 'Using bold or italic typefaces, possibly adding images.',
        status: false,
        topic: 'richcontent'
      },
      'emoji': {
        label: 'Emojis are ON',
        offLabel: 'Emojis are OFF',
        description: 'Emojis and other types of emoticons are widely used to convey emotion.',
        status: false,
        topic: 'emoji',
        onFunction:addComponent('comments','EmojiFilter',['id','content'], -100),
        offFunction:removeComponent('comments','EmojiFilter')
      },
      'editing': {
        label: 'Comment editing is ON',
        offLabel: 'Comment editing is OFF',
        description: 'Comment editing can be helpful to correct typos, can be abused. You can only edit comments that you post.',
        status: false,
        topic: 'editing',
        onFunction:[addComponent('interactions','Edit',['id','content', 'user']), addComponent('comments', 'Edited', ['edited'], -9)],
        offFunction:removeComponent('interactions','Edit')
      }
    }
  },
  'layout': {
    name: 'Layout',
    togglers: {
      'hiddenbydefault': {
        label: 'Hidden by default is ON',
        offLabel: 'Hidden by default is OFF',
        description: 'Hides comments until a user clicks to read them.',
        status: false,
        topic: 'hiddenbydefault'
      },
      'profilepictures': {
        label: 'Profile pictures are ON',
        offLabel: 'Profile pictures are OFF',
        description: 'Whether to show profile pictures or not.',
        status: false,
        topic: 'profilepictures',
        onFunction:addComponent('authors','ProfilePicture',['id'], 5),
        offFunction:removeComponent('authors','ProfilePicture')
      },
      'commentcount': {
        label: 'Comment count is ON',
        offLabel: 'Comment count is OFF',
        description: 'Shows the total number of comments displayed.',
        status: false,
        topic: 'commentcount',
        onFunction:addComponent('stream','CommentCount',['stream'], -10),
        offFunction:removeComponent('stream','CommentCount')
      }
    }
  },
  'moderation': {
    name: 'Moderation',
    togglers: {
      'staffpicks': {
        label: 'Staff Picks is ON',
        offLabel: 'Staff Picks is OFF',
        description: 'Shows a tab separating staff picks from other comments.',
        status: false,
        topic: 'staffpicks',
        onFunction:addComponent('streamTabs','StaffTab',null,10),
        offFunction:[removeComponent('streamTabs','StaffTab'),removeComponent('stream','StaffFilter')]
      },
      'muting': {
        label: 'Block/mute is ON',
        offLabel: 'Block/mute is OFF',
        description: 'Blocking users will hide their posts from the comment stream.',
        status: false,
        topic: 'muting',
        pulseTarget: 'commentName',
        onFunction:[addComponent('commentMenu','Block',['id','user'],0)],
        offFunction:[removeComponent('commentMenu','Block'), removeComponent('stream','BlockFilter')]
      },
      'flag': {
        label: 'Detailed Flags is ON',
        offLabel: 'Detailed Flags is OFF',
        description: 'When a user flags a comment they will be asked to provide information about why they have flagged it.',
        status: false,
        topic: 'flags',
        onFunction:[addComponent('flag','DetailFlag',['id','flagged']), removeComponent('flag','DefaultFlag')],
        offFunction:[removeComponent('flag','DetailFlag'),addComponent('flag','DefaultFlag',['id','flagged'])]

      }
    }
  },
  'privacy': {
    name: 'Privacy',
    togglers: {
      'anonymity': {
        label: 'Anonymity is ON',
        offLabel: 'Anonymity is OFF',
        description: 'Enabling users to remain completely anonymous (no real names or nicknames).',
        status: false,
        topic: 'anonymity',
        pulseTarget: 'commentName',
        onFunction: addComponent('stream','AnonymousFilter',['comments','users','stream']),
        offFunction: removeComponent('stream','AnonymousFilter')
      },
      'pseudonyms': {
        label: 'Pseudonyms are ON',
        offLabel: 'Pseudonyms are OFF',
        description: 'This means pseudonyms (nicknames) are allowed.',
        status: false,
        topic: 'pseudonyms',
        pulseTarget: 'commentName',
        onFunction: upsertComponent('authors','DefaultAuthor',['nickName','anonymous']),
        offFunction: upsertComponent('authors','DefaultAuthor',['realName','anonymous'])
      },
      'public_profile': {
        label: 'Public Profile is ON',
        offLabel: 'Public Profile is OFF',
        description: 'Visitors are able click an author\'s name to see a public profile.',
        status: false,
        topic: 'publicprofile',
        pulseTarget: 'commentName',
        onFunction:[addComponent('authorProfile','BigProfilePicture',['id'],-10),addComponent('authorProfile','ProfileBio',['nickName','membershipAge','location','education'],0)],
        offFunction:[removeComponent('authorProfile','BigProfilePicture'),removeComponent('authorProfile','ProfileBio')]
      }
    }
  },
  'reputation': {
    name: 'Reputation',
    togglers: {
      'stats': {
        label: 'Statistics are ON',
        offLabel: 'Statistics are OFF',
        description: 'Display basic data about the commenters',
        status: false,
        topic: 'stats',
        onFunction:addComponent('authors','Statistics',['comments'],20),
        offFunction:removeComponent('authors','Statistics')
      },
      'badges': {
        label: 'Badges are ON',
        offLabel: 'Badges are OFF',
        description: 'Badges are common in discussion boards to show reputation achievements of a user.',
        status: false,
        topic: 'badges',
        onFunction:addComponent('authors','Badges',['badges'],15),
        offFunction:removeComponent('authors','Badges')
      },
      'privileges': {
        label: 'Moderation Privileges are ON',
        offLabel: 'Moderation Privileges are OFF',
        description: 'Many reputation systems allow certain privileges (such as moderating others) as you gain reputation.',
        status: false,
        topic: 'moderation',
        pulseTarget: 'commentTools',
        onFunction:[addComponent('commentMenu','Warn',[],10), addComponent('commentMenu','Ban',[],20)],
        offFunction:[removeComponent('commentMenu','Warn'),removeComponent('commentMenu','Ban')]
      }
    }
  },
  'interaction': {
    name: 'Interaction',
    togglers: {
      'reactions': {
        label: 'Reactions are ON',
        offLabel: 'Reactions are OFF',
        description: 'Enables Reactions (other than likes) on comments.',
        status: false,
        topic: 'reactions',
        onFunction:addComponent('interactions','Reactions',['id','reactions'],0),
        offFunction:removeComponent('interactions','Reactions')
      },
      'likes': {
        label: 'Likes are ON',
        offLabel: 'Likes are OFF',
        description: 'Enables likes on comments, no dislikes, just likes.',
        status: false,
        topic: 'likes',
        onFunction:addComponent('interactions','LikeButton',['id', 'likes','liked'],10),
        offFunction:removeComponent('interactions','LikeButton')
      },
      'upvotes': {
        label: 'Up/Down voting is ON',
        offLabel: 'Up/Down voting is OFF',
        description: 'Enables up/down voting on comments.',
        status: false,
        topic: 'upvotes',
        onFunction:[
          addComponent('interactions','UpDownVoting',['id', 'upvotes','downvotes','updownvoted'],20),
          addComponent('stream','UpDownVoteOrderFilter',['stream','comments'],20)
        ],
        offFunction:[removeComponent('interactions','UpDownVoting'),removeComponent('stream','UpDownVoteOrderFilter')]
      }
    }
  },
  'stream': {
    name: 'Stream',
    togglers: {
      'permalinks': {
        label: 'Permalinks are ON',
        offLabel: 'Permalinks are OFF',
        description: 'Displays a link to a specific comment on a thread.',
        status: false,
        topic: 'permalinks',
        onFunction:addComponent('comments','Permalink',['id'],-5),
        offFunction:removeComponent('comments','Permalink')
      },
      'replies': {
        label: 'Nested Replies are ON',
        offLabel: 'Nested Replies are OFF',
        description: 'Allows nested replies on comments.',
        status: false,
        topic: 'replies',
        onFunction:[addComponent('replies','Replies',['id', 'replyIndex','comments'],0,{showTrolls:true}),addComponent('stream','ReplyFilter',['stream','comments'])],
        offFunction:[removeComponent('replies','Replies'), removeComponent('stream','ReplyFilter')]
      },
      'trolls': {
        label: 'Trolls are ON',
        offLabel: 'Trolls are OFF',
        description: 'Show sample troll-like content in the stream.',
        status: false,
        topic: 'trolls',
        onFunction:removeComponent('stream','TrollFilter'),
        offFunction:addComponent('stream','TrollFilter',['stream','comments'])
      }
    }
  },
  'community': {
    name: 'Community',
    togglers: {
      'guidelines': {
        label: 'Guidelines are ON',
        offLabel: 'Guidelines are OFF',
        description: 'Show community guidelines on top of the comment box.',
        status: false,
        topic: 'guidelines'
      },
      'mentions': {
        label: 'Mentions are ON',
        offLabel: 'Mentions are OFF',
        description: 'Inform users when they\'re mentioned in a comment, and highlight in the text.',
        status: false,
        topic: 'mentions',
        onFunction:addComponent('stream','MentionsFilter',['comments','stream']),
        offFunction:removeComponent('stream','MentionsFilter')
      },
      'following': {
        label: 'Following is ON',
        offLabel: 'Following is OFF',
        description: 'Allow following of other users, separating their comments into another tab.',
        status: false,
        topic: 'following',
        onFunction:[
          addComponent('commentMenu','Follow',['id','user'],-10),
          addComponent('streamTabs','FollowTab',[],20)
        ],
        offFunction:[
          removeComponent('commentMenu', 'Follow'),
          removeComponent('streamTabs','FollowTab')
        ]
      }
    }
  }
};

export default togglerGroups;
