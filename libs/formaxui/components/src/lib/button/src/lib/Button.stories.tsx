import { Fragment } from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, IButtonProps } from '.';

export default {
  component: Button,
  title: 'Components/Button',
} as Meta;

const PrimaryTemplate: Story<IButtonProps> = (args) => <Button {...args} />;
const StatusTemplate: Story<IButtonProps> = () => (
  <Fragment>
    <Button text="Without status" />
    <Button
      text="With hover status"
      theme={{
        hover: {
          backgroundColor: '#eeeeee',
        },
      }}
    />
    <Button text="With active status" />
    <Button text="With all statuses" />
  </Fragment>
);

export const Primary = PrimaryTemplate.bind({});
export const Status = StatusTemplate.bind({});

Primary.args = {
  text: 'Primary Button',
};
