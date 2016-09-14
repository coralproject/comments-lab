const topics = {
  'richcontent':{
    title:'Rich Content',
    description: 'Allowing italics/bold/colors allows community members to express themselves more freely. It can even create new community norms (see Green Text Stories below). But if you allow too many options, it could easily make the page into a visual nightmare. It can also be used maliciously to get around auto moderation: just as parentheses have been used to hide antisemitism, so could bolding certain letters be used to spell out abuse.',
    hashtag: 'richcontent',
    links: [
      {
        title: 'Alt-Right parentheses',
        href: 'http://nymag.com/selectall/2016/06/understanding-the-alt-rights-jew-parentheses.html'
      },
      {
        title: 'Green Text Stories',
        href: 'http://knowyourmeme.com/memes/green-text-stories'
      }
    ]
  },
  'editing':{
    title:'Editing your comments',
    description: 'Sometimes community members make mistakes - typos, or phrasing something poorly. Facebook, for instance, allows its users to edit posts forever, but that option could lead to confusion, and at worst gaslighting, i.e. people saying something provocative or abusive, then replacing it with something more innocuous and claiming it never happened. A short edit window of, say, five minutes, might make more sense.',
    hashtag: 'edit',
    links: [
      {
        title: 'Pros and cons of edit',
        href: 'http://meta.stackexchange.com/questions/459/should-we-be-allowed-to-edit-comments'
      }
    ]
  },
  'hiddenbydefault': {
    title: 'Hidden by default',
    description: 'Some sites are hiding their comments behind a “Show comments” button. It makes comments an opt-in feature, saves in page loading time, and makes it easier to track who wants to read the comments. However, it often reduces casual engagement, as well as hiding how many users are engaging and the conversations users are having. Without another point of entry, e.g. highlighted comments in a box within the piece, readers may quickly forget that the community exists at all.',
    hashtag: 'hidden'
  },
  'permalinks': {
    title: 'Permalinks',
    description: 'It’s important to be able to share a link to a single comment. You should also think about what the experience will be for a potential contributor - if they choose to reply after receiving a direct link, will they see the community guidelines that you pinned to the top of your stream?'
  },
  'guidelines': {
    title: 'Guidelines',
    description: 'According to the book Building Successful Online Communities: Evidence-Based Social Design, “simple communication choices—ways of framing what the community is and what happens there—can have a big impact on how the community functions.” If you don’t state clearly and visibly what the community is for and what its rules are, then you can’t expect that its members understand its purpose. Clear messaging of the community boundaries - followed by prompt and predictable enforcement of the rules - are essential to its success.',
    links: [
      {
        title: 'Building Successful Online Communities',
        href: 'https://mitpress.mit.edu/books/building-successful-online-communities'
      }
    ]
  },
  'profilepictures': {
    title: 'Profile pictures',
    description: 'Community members feel more attached to their onsite identity if they’ve been able to customize it. Pictures can also help users quickly scan streams for people they know. However, allowing images brings the risk of using photos without permission, or uploading pornographic, fake or harassing images. Enabling profile images can add significantly to moderators’ workload - and systems should add a “Report photo” in case of rule violations.',
    links: [
      {
        title: 'When image uploads turn ugly',
        href: 'http://www.adn.com/crime-justice/article/anchorage-man-charged-hundreds-harassment-counts-creating-fake-facebook-accounts/2014/01/05/'
      },
      {
        title: 'Avatars added to Wordpress Comments',
        href: 'https://en.blog.wordpress.com/2007/07/04/avatar-powered-recent-comments/'
      },
      {
        title: 'Profile pictures in Blogger',
        href: 'https://blogger.googleblog.com/2009/09/show-your-face.html'
      },
      {
        title: 'Gravatar tips',
        href: 'http://www.blogtyrant.com/gravatar-tips-get-comments-clicked/'
      }
    ]
  },
  'commentcount': {
    title: 'Comment count',
    description: 'A high total comment count could mean two people are arguing, or a lot of people are posting once. “Most commented on” might not be something you want to highlight on your site - a successful moderation policy could see the number of comments on a site drop. We’ve also heard in our research that some commenters won’t enter a space that has too many comments. Imzy displays both number of comments and number of participants in discussion. Facebook doesn’t include replies in its total comment count. Quora focuses on up votes more than number of comments.',
    links: [
      {
        title: 'Imzy',
        href: 'https://www.imzy.com'
      },
      {
        title: 'Quora',
        href: 'http://quora.com'
      }
    ]
  },
  'staffpicks': {
    title: 'Staff picks',
    description: 'The benefits are clear: you want to highlight the best of what’s there. But that route leads to other questions: do you also display the replies in that view? How do you make it scale? Some pin the best comments to the top of the stream. Others, including the New York Times, put them in a separate tab.'
  },
  'upvotes': {
    title: 'Up/Down voting',
    description: 'Down votes aren’t the same as up votes or Likes. Negative options can lead to groups choosing to down vote together mobbing), and a large-scale study on the effect of down votes showed that down-voted commenters posted worse comments as a result. Quora offers a middle ground - you can click “Downvote” but it doesn’t display the number of down votes a post has received.',
    hashtag: 'upvotes',
    links: [
      {
        title: 'Against negative votes',
        href: 'https://community.uservoice.com/blog/declining-negative-votes/'
      },
      {
        title: 'Vicious cycle of negative feedback',
        href: 'https://medium.com/the-physics-arxiv-blog/data-mining-reveals-how-the-down-vote-leads-to-a-vicious-circle-of-negative-feedback-aad9d49da238#.7x5yar8ko)'
      },
      {
        title: 'Academic paper on the impact of down votes in news communities',
        href: 'https://cs.stanford.edu/people/jure/pubs/disqus-icwsm14.pdf'
      },
      {
        title: 'Reddit on their sorting algorithms',
        href: 'http://www.redditblog.com/2009/10/reddits-new-comment-sorting-system.html'
      },
      {
        title: 'Jeff Atwood on downvoting',
        href: 'https://blog.stackoverflow.com/2009/03/the-value-of-downvoting-or-how-hacker-news-gets-it-wrong/'
      }
    ]
  },
  'replies': {
    title: 'Threaded Replies',
    description: 'Threaded, or nested, comment display is a contentious question. It shows the path of various discussions, but it also confuses chronology and can easily become unwieldy. It comes down to the intentions of your community - single posts or conversation. Stack Overflow, for example, focuses on answering questions posted at the top of the stream, and its creator is firmly against threading because of its particular community goals.',
    hashtag: 'threadedreplies',
    links: [
      {
        title: 'Why Stack Overflow avoids threading',
        href: 'https://blog.codinghorror.com/web-discussions-flat-by-design/'
      },
      {
        title: 'How to display threaded conversations',
        href: 'http://www.elezea.com/2015/09/how-to-display-threaded-discussions-on-the-web/'
      },
      {
        title: 'Threaded comments in Blogger',
        href: 'https://blogger.googleblog.com/2012/01/engage-with-your-readers-through.html'
      },
      {
        title: 'Threaded comments in Wordpress',
        href: 'https://en.blog.wordpress.com/2009/02/19/comment-threading-is-here-plus-other-cool-comment-settings/'
      }
    ]
  },
  'mentions': {
    title: 'Mentions',
    description: 'Allowing mentions, such as those on Twitter and Facebook, can lead to more conversation - but also can be used by trolls to force people to pay attention to their abuse. One option could be to make your default that mentions are only visible by the recipient if you both follow each other.',
    hashtag: 'mentions',
    links: [
      {
        title: 'Twitter "Replies"',
        href: 'https://blog.twitter.com/2008/how-replies-work-on-twitter-and-how-they-might'
      },
      {
        title: 'Twitter replies are now "Mentions"',
        href: 'https://blog.twitter.com/2009/replies-are-now-mentions'
      },
      {
        title: 'Mentions in Drupal',
        href: 'https://www.drupal.org/project/mentions'
      }
    ]
  },
  'directmessages': {
    title: 'Direct Messages',
    description: 'Direct messaging is a community tool that goes beyond the comment thread, building community amongst the users of a given platform. Some platforms allow messaging between any two users, regardless of they following each other or not. This led to some controversy, as unsolicited direct messages can be troublesome and prone to spam, harassment, and other types of abuse entering the private space.',
    hashtag: 'directmessages',
    links: [
      {
        title: 'Direct messaging first enabled on Twitter',
        href: 'https://blog.twitter.com/2006/six-more-twitter-updates'
      },
      {
        title: 'Direct messaging from anyone on Twitter',
        href: 'https://blog.twitter.com/2015/easier-than-ever-to-have-private-conversations'
      }
    ]
  },
  'following': {
    title: 'Following',
    description: 'If another community member who you like posts a new contribution, you might want to know about it. You might also only want the option to follow someone for that particular conversation, but not across the site. ‘Follow’ options can also help in the creation of social network analysis to better map behaviors across the site.',
    hashtag: 'following',
    links: [
      {
        title: 'Social Network Analysis',
        href: 'https://en.wikipedia.org/wiki/Social_network_analysis'
      }
    ]
  },
  'anonymity': {
    title: 'Anonymity',
    description: 'Some people consider anonymity to be the single biggest enabler of bad behavior online. However, research doesn’t bear this out. It can empower a bully to be aggressive - or a shy person to share their true feelings. A 2016 study found that the more aggressive comments on social media came from people using their real names. Dr. Whitney Phillips argues that “anonymity isn\'t the culprit; it\'s just the backdrop.” More important than your name policy are your community norms, and how you enforce them.',
    hashtag: 'Anonymity',
    links: [
      {
        title: 'What the Stanford Prison Experiment got wrong',
        href: 'http://motherboard.vice.com/blog/you-are-as-evil-as-your-social-network-alexander-haslam-on-what-the-prison-experiment-got-wrong'
      },
      {
        title: 'Academic paper on real-name abuse',
        href: 'http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0155923'
      },
      {
        title: 'Interview about internet trolls',
        href: 'http://www.latimes.com/opinion/op-ed/la-oe-morrison-phillips-20150701-column.html'
      },
      {
        title: 'Anonymity - Electronic Frontier Foundation',
        href: 'https://www.eff.org/es/issues/anonymity'
      },
      {
        title: 'NY Times - Using your real name in comments',
        href: 'http://www.nytimes.com/content/help/site/usercontent/usercontent.html#usercontent-name'
      },
      {
        title: 'NY Times - Verified identity',
        href: 'http://www.nytimes.com/content/help/site/usercontent/verified/verified-commenters.html'
      }
    ]
  },
  'publicprofile': {
    title: 'Public Profiles',
    description: 'If you want community members to create a public profile, you need to be transparent about the dangers as well as the benefits. By revealing too much personal information, they might be unintentionally doxxing themselves. Profile text can also be used for trolling - as with all user-created information, you’ll need to have a report button for abuse.',
    hashtag: 'publicprofiles',
    links: [
      {
        title: 'Academic paper on the impact of profile options',
        href: 'https://pdfs.semanticscholar.org/1fbb/f6be9000a7be96a78338e4c51c66a0f87ffe.pdf'
      }
    ]
  },
  'pseydonyms': {
    title: 'Pseudonyms',
    description: 'While you might have the community member’s information especially if they’re a paying subscriber), you might want to let them use a pseudonym on your site, or even to choose a new name each time they chat. The moderators will know their identity, even if the room members won’t. What’s wrong with real names? The Internet of Garbage wrote about a 2006 study with silent bots on Internet Relay Chat. The ‘female-named’ bots received 25x the amount of abuse received by ‘male-named’ bots.',
    hashtag: 'pseydonyms',
    links: [
      {
        title: 'Academic study on bots and gender',
        href: 'https://ai2-s2-pdfs.s3.amazonaws.com/52df/7994bed85827f40f2041eb0832370256eb8f.pdf'
      },
      {
        title: 'The Internet of Garbage',
        href: 'http://www.forbes.com/ebooks/the-internet-of-garbage/'
      }
    ]
  },
  'stats': {
    title: 'Stats',
    description: 'Basic statistics on other users, such as the number of comments they’ve left and when they joined, can give you a sense of how active they are in the community. A more advanced filtering system based on this information, such as “Don’t show me new users,” might be useful for people who are trolled by new anonymous accounts - though they also might disincentivize new community members from joining the conversation.'
  },
  'moderation': {
    title: 'Moderation privileges',
    description: 'Some users are as good as staff at moderation practices. You could give the precious few more moderation powers, or try meta moderation concepts that enforce all users to help through software that presents small obstacles to posting in return for crowdsourced judgement.',
    hashtag: 'moderation',
    links: [
      {
        title: 'Academic paper on Slashdot’s Meta Moderation',
        href: 'http://presnick.people.si.umich.edu/papers/chi04/LampeResnick.pdf'
      },
      {
        title: 'Discussion of Meta Moderation',
        href: 'http://meatballwiki.org/wiki/MetaModeration'
      },
      {
        title: 'Civil Comments has its own meta mod civility system',
        href: 'http://www.civilcomments.com'
      }
    ]
  },
  'reactions': {
    title: 'Reactions',
    description: 'It’s hard to troll with a very limited series of responses - while providing reactions allows for more subtle one-touch interaction than simply “Like.” It also may remove very short responses saying “yes!” or with single emojis. Buzzfeed has used limited reactions for several years as both a response mechanism and a way of navigating their content. Facebook’s introduction of reactions took their visibility to another level.',
    hashtag: 'reactions',
    links: [
      {
        title: 'The design of Facebook’s reactions',
        href: 'https://www.wired.com/2016/02/facebook-reactions-totally-redesigned-like-button/'
      },
      {
        title: 'Facebook’s reactions patent for social media use',
        href: 'http://www.google.com.ar/patents/US8918339'
      }
    ]
  },
  'likes': {
    title: 'Likes',
    description: 'Almost everyone knows the Like button today. You might not want to use them as a sole metric for finding good comments, though - not all Likes have the same value. “Like” also means different things for different people - one person might mean “I agree” while another wants to say “I like how you phrased that.”',
    hashtag: 'likes'
  },
  'emoji': {
    title: 'Emojis',
    description: 'Emojis as comments have taken over Instagram, as well as Twitter and other platforms. It might be a simplified visual character set, but it’s still a language - and like any other language, can be used for abuse. The gun emoji has been used to make threats, the eggplant to represent genitalia, the snake to attack Taylor Swift. Enabling emojis could also alienate some older users - maybe ask them if they’d like the option to hide them.',
    hashtag: 'emojis',
    links: [
      {
        title: 'Emojipedia',
        href: 'http://emojipedia.org/'
      },
      {
        title: 'Eggplant dangers',
        href: 'http://www.vocativ.com/culture/society/the-eggplant-emoji-is-the-next-frontline-of-online-harassment/'
      },
      {
        title: 'Emoji death threats',
        href: 'http://mashable.com/2014/01/16/emoji-death-threat/'
      },
      {
        title: 'Taylor and the snake',
        href: 'https://www.buzzfeed.com/elliewoodward/people-are-spamming-taylor-swifts-instagram-with-the-snake-e'
      }
    ]
  },
  'badges': {
    title: 'Badges',
    description: 'Badges have been used by many systems - some of which have discarded them. They can show a level of achievement, commitment, or interaction - but if you give out too many, they can lose their value. Also, if they are algorithmically generated, some people might game the system to receive a badge. If manually assigned, however, badges can take a lot of effort to maintain. Some badges - staff member, article author - might be useful for identifying newsroom personnel.',
    hashtag: 'Badges',
    links: [
      {
        title: 'Academic paper on steering user behavior with badges',
        href: 'https://www.cs.cornell.edu/home/kleinber/www13-badges.pdf'
      },
      {
        title: 'Cross-platform badge protocol',
        href: 'http://www.badgealliance.org/why-badges/'
      },
      {
        title: 'Do badges work?',
        href: 'http://www.peerwise-community.org/2013/11/19/do-badges-work/'
      }
    ]
  },
  'muting': {
    title: 'Muting Users',
    description: 'Muting someone means that you won’t see their comments when you’re logged in. Some sites also offer Block - your comments can’t be seen by them either. The danger of Block is that a recipient can log out and see the difference, leading to further conflict. While laws regarding free speech aren’t relevant in private spaces, some people are also concerned about the effects of blocking and muting on free expression. ',
    hashtag: 'muting'
  },
  'flags': {
    title: 'Flags',
    description: 'Flags are user-generated signals of potential problems in your community. But if used incorrectly - either maliciously or due to misunderstanding - then moderators can easily become overwhelmed. It’s important that your moderation system both offers a range of definitions of flag, and also that it doesn’t treat all flags identically. Otherwise you might be unintentionally handing over responsibility for your content to people whose community goals are very different from your own.',
    hashtag: 'flags',
    links: [
      {
        title: 'How flags can be used as tools to silence people',
        href: 'http://www.cpeterson.org/2013/07/22/a-brief-guide-to-user-generated-censorship/'
      }
    ]
  },
  'trolls': {
    title: 'Trolls',
    description: 'There’s a difference between trolls who see themselves as pranksters and people committing abuse that is intended to hurt, and may be illegal - though sometimes the line between them can be very thin. Abuse is overwhelmingly aimed at women of all ethnicities, and people of color including women - those more traditionally marginalized by society. Though in the USA, website owners aren’t legally responsible for what’s in the comments with a few exceptions), these days you have to prepare for bad behavior on any platform - and have clear rules in place to deal with it.',
    hashtag: 'trolls',
    links: [
      {
        title: 'A good book on trolls in comments',
        href: 'https://mitpress.mit.edu/books/reading-comments'
      },
      {
        title: 'An expert study on troll behavior',
        href: 'https://mitpress.mit.edu/books/why-we-cant-have-nice-things'
      },
      {
        title: 'An explanation of your legal rights in the US',
        href: 'https://blog.coralproject.net/internet-comments-and-the-law/'
      }
    ]
  },
  'about': {
    title: 'Welcome to the Comments Lab',
    description: 'This is a place to explore some of the different possible features of an online comment space. It will continue to grow and change as <a href="https://coralproject.net" target="_blank">The Coral Project</a> continues its work.' +
      '<br /><br />' +
      '<ul style={ styles.playgroundBullets }>' +
        '<li style={ styles.playgroundBullet }><strong>Click on the names</strong> to reveal features. Switch them on and off to see how the comment box changes. Share your favorite comment settings by sharing the URL.</li>' +
        '<li style={ styles.playgroundBullet }><strong>Click on the “i” buttons</strong> to learn about why and how you might use each feature.</li>' +
      '<li style={ styles.playgroundBullet }><strong>Add features</strong> by submitting updates on <a href="https://github.com/coralproject/experiment-playground">GitHub</a>.</li>' +
      '<li style={ styles.playgroundBullet }><strong>Share your thoughts</strong> on our <a href="https://coralproject.net/contribute.html#other-ideas-and-bug-reports">feedback form</a>.</li>' +
      '</ul>' + 
      '<br/>' +
      '<em>Images from <a href="http://www.istockphoto.com" target="_blank">iStock</a>, <a href="https://www.flickr.com/photos/12836528@N00/" target="_blank">Kevin Dooley</a>, Shutterhacks and Banger1977.</em>'
  }
};

export default topics;

