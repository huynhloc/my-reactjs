import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TableUsers } from './TableUsers';

export default {
  title: 'Example/TableUsers',
  component: TableUsers,
} as ComponentMeta<typeof TableUsers>;

const Template: ComponentStory<typeof TableUsers> = (args) => (
  <TableUsers {...args} />
);

export const PaginationTable = Template.bind({});
const users = [
  {
    name: 'Olivia Rhye',
    subtitle: '@olivia',
    status: 'active',
    role: 'Product Designer',
    email: 'olivia@gmail.com',
    teams: [
      {
        name: 'Design',
        color: '#6941C6',
      },
      {
        name: 'Product',
        color: '#175CD3',
      },
      {
        name: 'Marketing',
        color: '#3538CD',
      },
    ],
  },
];
PaginationTable.args = {
  rows: users,
};
