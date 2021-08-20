import { style } from '@formaxui/utils-style';
import type { IWindowStyleProps } from './Window.types';

// eslint-disable-next-line
export const Styles = ({}: IWindowStyleProps) => {
  return {
    root: style({
      minWidth: '400px',
      minHeight: '400px',
      width: '500px',
      height: '300px',
    }),
    iframe: style({
      border: 'none',
      userSelect: 'none',
      WebkitUserDrag: 'none',
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
    }),
  };
};

export default Styles;
