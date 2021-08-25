import type { FMComponentCommonProps } from '@formaxui/types';

export interface ITitleBarProps extends FMComponentCommonProps {
  title: string;
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
}

// eslint-disable-next-line
export interface ITitleBarStyleProps {}
