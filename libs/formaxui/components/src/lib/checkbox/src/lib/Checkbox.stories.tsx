import { Story, Meta } from '@storybook/react';
import { Checkbox, ICheckboxProps } from '.';

export default {
  component: Checkbox,
  title: 'Components/Checkbox',
} as Meta;

const Template: Story<ICheckboxProps> = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  checked: true,
};
