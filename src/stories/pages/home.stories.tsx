// /stories/pages/home.stories.jsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Home from '../../App';

export default {
  title: 'Pages/Home',
  component: Home,
} as ComponentMeta<typeof Home>;

export const HomePage: ComponentStory<typeof Home> = () => <Home />;
