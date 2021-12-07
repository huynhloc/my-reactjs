import { ComponentStory, ComponentMeta } from '@storybook/react';

import Pagination from 'src/components/Pagination';

export default {
  title: 'Example/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  count: 10,
  page: 1,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setPage: (page) => {},
};
