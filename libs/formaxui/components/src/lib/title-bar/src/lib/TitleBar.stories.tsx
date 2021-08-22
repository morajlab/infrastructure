import { FunctionComponent, CSSProperties } from 'react';
import { Story, Meta } from '@storybook/react';
import { TitleBar, ITitleBarProps } from '.';

export default {
  component: TitleBar,
  title: 'Components/TitleBar',
} as Meta;

const Background: FunctionComponent = ({ children }) => {
  const style: CSSProperties = {
    backgroundImage: 'url(https://picsum.photos/800)',
    width: '800px',
    height: '400px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    padding: '50px',
  };

  return <div style={style}>{children}</div>;
};

const Template: Story<ITitleBarProps> = (args) => (
  <Background>
    <TitleBar {...args} />
  </Background>
);

export const Primary = Template.bind({});

Primary.args = {
  title: 'Primary TitleBar',
  onClose: () => {
    console.log('onClose()');
  },
  onMaximize: () => {
    console.log('onMaximize()');
  },
  onMinimize: () => {
    console.log('onMinimize()');
  },
};
