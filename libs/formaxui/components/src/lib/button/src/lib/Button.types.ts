import type { IStyleProps } from '@formaxui/types';

export interface IThemeProps {
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
}

export interface IStatusProps {
  default?: IThemeProps;
  hover?: IThemeProps;
  active?: IThemeProps;
}

export interface IButtonProps {
  theme?: IStatusProps;
  styles?: IStyleProps;
  onClick?: () => void;
}

export interface IButtonStyleProps {
  theme: IButtonProps['theme'];
}
