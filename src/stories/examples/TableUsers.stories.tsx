import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TableUsers } from 'src/components/TableUsers';

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
    id: 1,
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
  {
    id: 2,
    name: 'Lana Steiner',
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
  {
    id: 3,
    name: 'Phoenix Baker',
    subtitle: '@phoenix',
    status: 'active',
    role: 'Product Designer',
    email: 'phoenix@gmail.com',
    teams: [
      {
        name: 'Design',
        color: '#6941C6',
        backgroundColor: '#F9F5FF',
      },
      {
        name: 'Product',
        color: '#175CD3',
        backgroundColor: '#EFF8FF',
      },
      {
        name: 'Marketing',
        color: '#3538CD',
        backgroundColor: '#EEF4FF',
      },
      {
        name: 'Design',
        color: '#6941C6',
        backgroundColor: '#F9F5FF',
      },
      {
        name: 'Product',
        color: '#175CD3',
        backgroundColor: '#EFF8FF',
      },
      {
        name: 'Marketing',
        color: '#3538CD',
        backgroundColor: '#EEF4FF',
      },
    ],
  },
];
PaginationTable.args = {
  rows: users,
  total: 100,
};
