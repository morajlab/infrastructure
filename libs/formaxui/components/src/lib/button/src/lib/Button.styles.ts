import { style } from '@formaxui/utils-style';
import type { IComponentStyleFunction } from '@formaxui/types';
import type { IButtonStyleProps } from './Button.types';

export const Styles: IComponentStyleFunction<IButtonStyleProps> = ({
  noStyle,
}) => {
  return {
    root: style({
      position: 'relative',
      cursor: 'default',
      display: 'inline-block',
      userSelect: 'none',
      transition: 'all 0.1s ease-in-out',
      ...(noStyle
        ? {}
        : {
            color: '#ffffff',
            boxShadow: 'rgba(0,0,0,0.5) 0px 1px',
            lineHeight: '19px',
            padding: '5px 10px',
            width: 'auto',
            fontSize: '13px',
            border: `1px solid rgb(0, 112, 243)`,
            backgroundColor: 'rgb(0, 112, 243)',
            borderRadius: '5px',
            minWidth: 'min-content',
            textAlign: 'center',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            '&:active': {
              background: 'rgba(0, 112, 243, 0.8)',
            },
            '&:hover': {},
          }),
    }),
  };
};

export default Styles;
