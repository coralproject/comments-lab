import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/components/interactions/stories/ReactionsStories.jsx');
  // require as many stories as you need.
}

configure(loadStories, module);
