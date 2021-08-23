import { Story, Meta } from '@storybook/react';
import { Text, ITextProps } from '.';

export default {
  component: Text,
  title: 'Components/Text',
} as Meta;

const Template: Story<ITextProps> = (args) => <Text {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum neque quia corrupti distinctio,
     minima dignissimos perferendis atque sit aliquid earum recusandae eveniet beatae! Modi, deleniti
     autem necessitatibus provident commodi iure!`,
};
