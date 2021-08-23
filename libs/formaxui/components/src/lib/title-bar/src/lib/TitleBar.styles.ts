/* eslint-disable @typescript-eslint/no-inferrable-types */

import { style } from '@formaxui/utils-style';
import type { IComponentStyleFunction } from '@formaxui/types';
import type { ITitleBarStyleProps } from './TitleBar.types';

// eslint-disable-next-line
export const Styles: IComponentStyleFunction<ITitleBarStyleProps> = ({}) => {
  return ((simple) => ({
    root: style({
      border: '1px solid #000000',
      minHeight: '30px',
      position: 'relative',
    }),
    button: style({
      width: `${simple.button.size}px`,
      height: `${simple.button.size}px`,
      borderRadius: '50px',
      marginRight: `${simple.button.margin}px`,
      marginLeft: `${simple.button.margin}px`,
    }),
    acrylic: style({
      zIndex: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
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
      userSelect: 'none',
      fontSize: '13px',
    }),
    borderRadius: style({
      borderTopLeftRadius: `${simple.borderRadius}px`,
      borderTopRightRadius: `${simple.borderRadius}px`,
    }),
    closeButton: style({
      backgroundColor: 'rgb(255, 95, 87)',
      border: '1px solid rgb(226, 70, 63)',
    }),
    minimizeButton: style({
      backgroundColor: 'rgb(255, 189, 46)',
      border: '1px solid rgb(226, 161, 22)',
    }),
    maximizeButton: style({
      backgroundColor: 'rgb(40, 201, 64)',
      border: '1px solid rgb(18, 172, 40)',
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
