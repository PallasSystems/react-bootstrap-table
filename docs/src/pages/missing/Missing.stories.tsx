import React from 'react';

import { MissingPage } from './Missing.components';

export default {
  title: 'Pages/404 Missing',
  component: MissingPage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <MissingPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
