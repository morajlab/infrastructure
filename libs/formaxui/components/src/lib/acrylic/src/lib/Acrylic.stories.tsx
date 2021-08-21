import { FunctionComponent, CSSProperties } from 'react';
import { Story, Meta } from '@storybook/react';
import { Acrylic, IAcrylicProps } from '.';

export default {
  component: Acrylic,
  title: 'Components/Acrylic',
} as Meta;

const Background: FunctionComponent = ({ children }) => {
  const style: CSSProperties = {
    backgroundImage: 'url(https://picsum.photos/800)',
    width: '800px',
    height: '400px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };

  return <div style={style}>{children}</div>;
};

const Content: FunctionComponent = () => {
  const style: CSSProperties = {
    color: '#ffffff',
    textAlign: 'center',
    padding: '30px',
  };

  return (
    <div style={style}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, totam!
      Pariatur perspiciatis voluptates doloribus minima ratione, itaque placeat
      maxime dolores dignissimos corporis laborum dolor tempora enim cum, eaque
      illo illum.
    </div>
  );
};

const Template: Story<IAcrylicProps> = (args) => (
  <Background>
    <Acrylic {...args} />
  </Background>
);

export const Primary = Template.bind({});

Primary.args = {
  children: <Content />,
  blur: 10,
  style: {
    width: '60%',
    height: '60%',
    margin: 'auto',
    marginTop: '50px',
  },
};
