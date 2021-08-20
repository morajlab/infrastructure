import { Story, Meta } from '@storybook/react';
import { TitleBar, ITitleBarProps } from '.';

export default {
  component: TitleBar,
  title: 'Components/TitleBar',
} as Meta;

const Template: Story<ITitleBarProps> = (args) => <TitleBar {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
