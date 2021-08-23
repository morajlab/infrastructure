import { style, important } from '@formaxui/utils-style';
import type { IComponentStyleFunction } from '@formaxui/types';
import type { IWindowStyleProps } from './Window.types';

// eslint-disable-next-line
export const Styles: IComponentStyleFunction<IWindowStyleProps> = ({}) => {
  return {
    root: style({
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
    }),
    rnd: style(
      important({
        cursor: 'default',
      })
    ),
    iframe: style({
      border: 'none',
      userSelect: 'none',
      WebkitUserDrag: 'none',
      flexGrow: 1,
    }),
  };
};

export default Styles;
