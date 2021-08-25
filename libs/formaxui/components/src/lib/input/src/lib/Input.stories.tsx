import { Story, Meta } from '@storybook/react';
import { Input, IInputProps } from '.';

export default {
  component: Input,
  title: 'Components/Input',
} as Meta;

const Template: Story<IInputProps> = (args) => <Input {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
