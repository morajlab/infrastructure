import { style } from '@formaxui/utils-style';
import type { IWindowStyleProps } from './Window.types';

// eslint-disable-next-line
export const Styles = ({}: IWindowStyleProps) => {
  return {
    root: style({}),
    titleBar: style({}),
    iframe: style({
      border: 'none',
      userSelect: 'none',
      WebkitUserDrag: 'none',
    }),
    fullSize: style({
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
    }),
  };
};

export default Styles;
