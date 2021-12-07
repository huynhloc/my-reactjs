import { ComponentStory, ComponentMeta } from '@storybook/react';

import Checkbox from 'src/components/Checkbox';

export default {
  title: 'Example/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};
