import { style, important } from '@formaxui/utils-style';
import type { IWindowStyleProps } from './Window.types';

// eslint-disable-next-line
export const Styles = ({}: IWindowStyleProps) => {
  return {
    root: style({
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
    }),
    rnd: style({
      cursor: important(),
    }),
    iframe: style({
      border: 'none',
      userSelect: 'none',
      WebkitUserDrag: 'none',
      flexGrow: 1,
    }),
  };
};

export default Styles;
