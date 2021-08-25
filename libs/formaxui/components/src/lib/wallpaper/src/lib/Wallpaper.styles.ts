import { style } from '@formaxui/utils-style';
import type { IComponentStyleFunction } from '@formaxui/types';
import type { IWallpaperStyleProps } from './Wallpaper.types';

export const Styles: IComponentStyleFunction<IWallpaperStyleProps> = ({
  image,
  size,
  color,
}) => {
  return {
    root: style({
      backgroundImage: `url(${image})`,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: size ?? 'cover',
      backgroundColor: color ?? '#000000',
      userSelect: 'none',
      WebkitUserDrag: 'none',
    }),
  };
};

export default Styles;
