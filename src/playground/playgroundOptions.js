import {addComponent, removeComponent, updateComponent} from './PlaygroundActions';

const togglerGroups = {
  'content': {
    name: 'Content',
    togglers: {
      'rich_content': {
        label: 'Rich content is ON',
        offLabel: 'Rich content is OFF',
        description: 'Using bold or italic typefaces, possibly adding images.',
        status: false,
        topic: 'rich_content'
      },
      'emoji': {
        label: 'Emojis are ON',
        offLabel: 'Emojis are OFF',
        description: 'Emojis and other types of emoticons are widely used to convey emotion.',
        status: false,
        topic: 'emoji',
        onFunction:addComponent('comments','EmojiFilter',['id','content']),
        offFunction:removeComponent('comments','EmojiFilter')
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
        onFunction:addComponent('stream','StreamTabs',null,-10,{activeTab:'all'}),
        offFunction:[removeComponent('stream','StreamTabs'),removeComponent('stream','StaffFilter')]
      },
      'muting': {
        label: 'Block/mute is ON',
        offLabel: 'Block/mute is OFF',
        description: 'Blocking users will hide their posts from the comment stream.',
        status: false,
        topic: 'muting',
        pulseTarget: 'commentName',
        onFunction:[updateComponent('comments', 'CommentMenu',['id'], -10),addComponent('commentMenu','Block',['id','comments'],0)],
        offFunction:[removeComponent('commentMenu','Block'), removeComponent('stream','BlockFilter')]
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
        onFunction: updateComponent('authors','DefaultAuthor',null,null,{allowAnon:true}),
        offFunction: updateComponent('authors','DefaultAuthor',null,null,{allowAnon:false})
      },
      'pseudonyms': {
        label: 'Pseudonyms are ON',
        offLabel: 'Pseudonyms are OFF',
        description: 'This means pseudonyms (nicknames) are allowed.',
        status: false,
        topic: 'pseudonyms',
        pulseTarget: 'commentName',
        onFunction: updateComponent('authors','DefaultAuthor',['nickName','anonymous']),
        offFunction: updateComponent('authors','DefaultAuthor',['realName','anonymous'])
      },
      'public_profile': {
        label: 'Public Profile is ON',
        offLabel: 'Public Profile is OFF',
        description: 'Visitors are able click an author\'s name to see a public profile.',
        status: false,
        topic: 'public_profile',
        pulseTarget: 'commentName',
        onFunction:[addComponent('authorProfile','BigProfilePicture',['id'],-10),addComponent('authorProfile','ProfileName',['nickName'],0)],
        offFunction:[removeComponent('authorProfile','BigProfilePicture'),removeComponent('authorProfile','ProfileName')]
      }
    }
  },
  'reputation': {
    name: 'Reputation',
    togglers: {
      'stats': {
        label: 'Statistics are ON',
        offLabel: 'Statistics are OFF',
        description: 'Reputation statistics...',
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
        description: 'Many reputation systems allow certain privileges (as moderating others) as you gain reputation.',
        status: false,
        topic: 'privileges',
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
        topic: 'reactions'
      },
      'likes': {
        label: 'Likes are ON',
        offLabel: 'Likes are OFF',
        description: 'Enables likes on comments, no dislikes, just likes.',
        status: false,
        topic: 'likes'
      },
      'upvotes': {
        label: 'Up/Down voting is ON',
        offLabel: 'Up/Down voting is OFF',
        description: 'Enables up/down voting on comments.',
        status: false,
        topic: 'upvotes'
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
        topic: 'permalinks'
      },
      'replies': {
        label: 'Nested Replies are ON',
        offLabel: 'Nested Replies are OFF',
        description: 'Allows nested replies on comments.',
        status: false,
        topic: 'replies'
      },
      'trolls': {
        label: 'Trolls are ON',
        offLabel: 'Trolls are OFF',
        description: 'Show sample troll-like content in the stream.',
        status: false,
        topic: 'trolls'
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
        description: 'Mentions are often used as...',
        status: false,
        topic: 'mentions'
      },
      'following': {
        label: 'Following is ON',
        offLabel: 'Following is OFF',
        description: 'Allows following users and getting notified of new posts.',
        status: false,
        topic: 'following'
      },
      'privatemessages': {
        label: 'Private messages are ON',
        offLabel: 'Private messages are OFF',
        description: 'Allows sending private messages between users.',
        status: false,
        topic: 'privatemessages'
      }
    }
  },
  'experimental': {
    name: 'Experimental',
    togglers: {
      'replyrating': {
        label: 'Reply Rating is ON',
        offLabel: 'Reply Rating is OFF',
        description: 'Asks for a reply rating before posting a Reply. Enable Nested Replies to see it in action.',
        status: false,
        topic: 'replyrating'
      },
      'topicrelevant': {
        label: 'Topic Relevant Badges are ON',
        offLabel: 'Topic Relevant Badges are OFF',
        description: 'TBD',
        status: false,
        topic: 'topicrelevant'
      }
    }
  }
};

export default togglerGroups;
