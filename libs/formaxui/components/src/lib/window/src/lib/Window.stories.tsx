import { Story, Meta } from '@storybook/react';
import { Window, IWindowProps } from '.';

export default {
  component: Window,
  title: 'Components/Window',
} as Meta;

const Template: Story<IWindowProps> = (args) => <Window {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: 'Primary Window',
  url: 'https://moraj.ir',
};
