import { Story, Meta } from '@storybook/react';
import { Radio, IRadioProps } from '.';

export default {
  component: Radio,
  title: 'Components/Radio',
} as Meta;

const Template: Story<IRadioProps> = (args) => <Radio {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
