import { FunctionComponent } from 'react';
import { Position } from '@formaxui/components-position';
import { Styles } from './Wallpaper.styles';
import type { IWallpaperProps } from './Wallpaper.types';

export const Wallpaper: FunctionComponent<IWallpaperProps> = ({
  image,
  size,
  color,
  ...rest
}) => {
  const { root } = Styles({ image, size, color });

  return <Position {...root} {...rest} />;
};

export default Wallpaper;
