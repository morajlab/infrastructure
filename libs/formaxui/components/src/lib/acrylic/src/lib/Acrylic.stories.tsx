import { FunctionComponent, CSSProperties } from 'react';
import { Story, Meta } from '@storybook/react';
import { Acrylic, IAcrylicProps } from '.';

export default {
  component: Acrylic,
  title: 'Components/Acrylic',
} as Meta;

const backgroundStyle: CSSProperties = {
  backgroundImage: 'url(https://picsum.photos/800)',
  width: '800px',
  height: '400px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
};

const Background: FunctionComponent = ({ children }) => (
  <div style={backgroundStyle}>{children}</div>
);

const Template: Story<IAcrylicProps> = (args) => (
  <Background>
    <Acrylic {...args} />
  </Background>
);

export const Primary = Template.bind({});

Primary.args = {
  children: 'This is for test',
  style: {
    width: '60%',
    height: '60%',
    margin: 'auto',
    marginTop: '50px',
  },
};
