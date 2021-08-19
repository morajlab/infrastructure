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
  text: string;
  theme?: IStatusProps;
}

export interface IButtonStyleProps {
  theme: IButtonProps['theme'];
}
