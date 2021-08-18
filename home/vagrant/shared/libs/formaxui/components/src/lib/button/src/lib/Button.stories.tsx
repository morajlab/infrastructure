import { Story, Meta } from '@storybook/react';
import {
  FormaxuiComponentsSrcLibWindow,
  FormaxuiComponentsSrcLibWindowProps,
} from './FormaxuiComponentsSrcLibWindow';

export default {
  component: FormaxuiComponentsSrcLibWindow,
  title: 'FormaxuiComponentsSrcLibWindow',
} as Meta;

const Template: Story<FormaxuiComponentsSrcLibWindowProps> = (args) => (
  <FormaxuiComponentsSrcLibWindow {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
