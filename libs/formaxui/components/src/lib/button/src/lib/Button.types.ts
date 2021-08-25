import type { FMComponentCommonProps } from '@formaxui/types';

export interface IButtonProps extends FMComponentCommonProps {
  onClick?: () => void;
  noStyle?: boolean;
}

export interface IButtonStyleProps {
  noStyle: IButtonProps['noStyle'];
}
