import type { HTMLAttributes } from 'react';

export interface IButtonProps extends HTMLAttributes<HTMLDivElement> {
  onClick?: () => void;
  noStyle?: boolean;
}

export interface IButtonStyleProps {
  noStyle: IButtonProps['noStyle'];
}
