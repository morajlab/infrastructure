import { style } from '@formaxui/utils-style';
import type { IButtonStyleProps } from './Button.types';

export const Styles = ({ theme }: IButtonStyleProps) => {
  const defaultStatus = theme?.default ?? {
    color: '#000000',
    backgroundColor: '#ffffff',
    borderColor: '#aaaaaa',
    borderRadius: 5,
  };

  return {
    root: style({
      border: `1px solid ${defaultStatus.borderColor}`,
      backgroundColor: defaultStatus.backgroundColor,
      borderRadius: defaultStatus.borderRadius,
      display: 'inline-block',
      padding: '5px 10px',
      userSelect: 'none',
      transition: 'all 0.1s ease-in-out',
      '&:hover': {
        ...(theme?.hover ?? {}),
      },
      '&:active': {
        ...(theme?.active ?? {}),
      },
    }),
  };
};

export default Styles;
