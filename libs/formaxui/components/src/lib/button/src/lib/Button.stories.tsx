import { Story, Meta } from '@storybook/react';
import { Button, IButtonProps } from '.';

export default {
  component: Button,
  title: 'Components/Button',
} as Meta;

const DefaultTemplate: Story<IButtonProps> = (args) => <Button {...args} />;
const ActionTemplate: Story<IButtonProps> = ({
  style,
  noStyle,
  children,
  ...rest
}) => {
  return (
    <div>
      <Button {...rest}>{children}</Button>
      <div>
        <Button
          noStyle={noStyle}
          style={{ ...style, ...{ backgroundColor: 'red' } }}
          {...rest}
        />
        <Button
          noStyle={noStyle}
          style={{ ...style, ...{ backgroundColor: 'green' } }}
          {...rest}
        />
        <Button
          noStyle={noStyle}
          style={{ ...style, ...{ backgroundColor: 'blue' } }}
          {...rest}
        />
      </div>
    </div>
  );
};

export const Primary = DefaultTemplate.bind({});
export const Action = ActionTemplate.bind({});

Primary.args = {
  children: 'Primary Button',
  noStyle: false,
};

Action.args = {
  children: 'Action Button',
  onClick: () => alert('Action button clicked !'),
  noStyle: true,
  style: {
    width: '20px',
    height: '20px',
    borderRadius: '50px',
    margin: '5px',
  },
};
