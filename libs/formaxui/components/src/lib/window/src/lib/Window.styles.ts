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
        backgroundColor: 'transparent',
      })
    ),
    iframe: style({
      userSelect: 'none',
      WebkitUserDrag: 'none',
      flexGrow: 1,
      border: '1px solid #000000',
      borderTop: 'none',
      backgroundColor: '#000000',
    }),
    borderRadius: style({
      borderBottomLeftRadius: '5px',
      borderBottomRightRadius: '5px',
    }),
  };
};

export default Styles;
