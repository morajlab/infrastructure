import type { FMComponentCommonProps } from '@formaxui/types';

export interface IWindowProps extends FMComponentCommonProps {
  title: string;
  url: string;
  minWidth?: number;
  minHeight?: number;
}

// eslint-disable-next-line
export interface IWindowStyleProps {}
