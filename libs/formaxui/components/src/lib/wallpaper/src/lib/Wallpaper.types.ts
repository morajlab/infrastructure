import type { FMComponentCommonProps } from '@formaxui/types';

export interface IWallpaperProps extends FMComponentCommonProps {
  image: string;
  color?: string;
  size?: 'cover' | 'contain' | 'initial';
}

export interface IWallpaperStyleProps {
  image: IWallpaperProps['image'];
  color: IWallpaperProps['color'];
  size: IWallpaperProps['size'];
}
