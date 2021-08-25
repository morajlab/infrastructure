import { Story, Meta } from '@storybook/react';
import { Wallpaper, IWallpaperProps } from '.';

export default {
  component: Wallpaper,
  title: 'Components/Wallpaper',
} as Meta;

const Template: Story<IWallpaperProps> = (args) => <Wallpaper {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  image: 'https://picsum.photos/200/300',
};
