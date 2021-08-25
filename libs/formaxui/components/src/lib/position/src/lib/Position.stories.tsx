import { Story, Meta } from '@storybook/react';
import { Position, IPositionProps } from '.';

export default {
  component: Position,
  title: 'Components/Position',
} as Meta;

const Template: Story<IPositionProps> = (args) => <Position {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
