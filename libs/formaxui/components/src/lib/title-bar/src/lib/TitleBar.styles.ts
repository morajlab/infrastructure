/* eslint-disable @typescript-eslint/no-inferrable-types */

import { style } from '@formaxui/utils-style';
import type { ITitleBarStyleProps } from './TitleBar.types';

// eslint-disable-next-line
export const Styles = ({}: ITitleBarStyleProps) => {
  return ((simple) => ({
    root: style({
      border: '1px solid red',
      minHeight: '30px',
      position: 'relative',
    }),
    button: style({
      width: `${simple.button.size}px`,
      height: `${simple.button.size}px`,
      padding: '2px !important',
      borderRadius: '50px !important',
      marginRight: `${simple.button.margin}px`,
      marginLeft: `${simple.button.margin}px`,
    }),
    acrylic: style({
      zIndex: 0,
    }),
    fullSize: style({
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
    }),
    flexGroup: style({
      display: 'flex',
      flexDirection: 'row-reverse',
      justifyContent: 'flex-start',
      alignItems: 'center',
    }),
    buttonGroup: style({
      display: 'inline-block',
      position: 'relative',
      marginRight: `${simple.paddingX}px`,
    }),
    title: style({
      flexGrow: 1,
      textAlign: 'center',
      color: '#eeeeee',
      marginLeft: `${simple.paddingX}px`,
    }),
    borderRadius: style({
      borderTopLeftRadius: `${simple.borderRadius}px`,
      borderTopRightRadius: `${simple.borderRadius}px`,
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
  }))({
    button: {
      size: 10,
      margin: 3,
    },
    paddingX: 10,
    borderRadius: 5,
  });
};

export default Styles;
