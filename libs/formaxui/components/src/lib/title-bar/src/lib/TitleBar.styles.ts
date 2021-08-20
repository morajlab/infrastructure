import { style } from '@formaxui/utils-style';
import type { ITitleBarStyleProps } from './TitleBar.types';

// eslint-disable-next-line
export const Styles = ({}: ITitleBarStyleProps) => {
  return {
    root: style({
      border: '1px solid red',
      borderTopLeftRadius: '5px',
      borderTopRightRadius: '5px',
      padding: '5px 10px',
    }),
    button: style({
      width: '10px',
      height: '10px',
      padding: '2px !important',
      borderRadius: '50px !important',
    }),
    closeButton: style({
      backgroundColor: 'red !important',
    }),
    minimizeButton: style({
      backgroundColor: 'yellow !important',
    }),
    maximizeButton: style({
      backgroundColor: 'green !important',
    }),
    buttonGroup: style({
      display: 'inline-block',
    }),
  };
};

export default Styles;
