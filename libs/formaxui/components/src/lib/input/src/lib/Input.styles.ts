import { style } from '@formaxui/utils-style';
import type { IComponentStyleFunction } from '@formaxui/types';
import type { IInputStyleProps } from './Input.types';

// eslint-disable-next-line no-empty-pattern
export const Styles: IComponentStyleFunction<IInputStyleProps> = ({}) => {
  return {
    root: style({}),
    input: style({
      borderRadius: '5px',
      border: '1px solid rgb(190, 191, 191)',
      outline: 'none',
      padding: '5px 10px',
      transition: 'all 0.1s ease-in-out',
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif',
      '&::placeholder': {
        color: 'rgb(190, 191, 191)',
      },
      '&:focus-visible': {
        borderColor: 'rgb(0, 112, 243)',
      },
    }),
  };
};

export default Styles;
