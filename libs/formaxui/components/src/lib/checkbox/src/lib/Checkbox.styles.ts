import { style } from '@formaxui/utils-style';
import type { IComponentStyleFunction } from '@formaxui/types';
import type { ICheckboxStyleProps } from './Checkbox.types';

export const Styles: IComponentStyleFunction<ICheckboxStyleProps> = ({
  checked,
}) => {
  return {
    root: style({
      width: '20px',
      height: '20px',
      textAlign: 'center',
      backgroundColor: checked ? '#2f82ff' : '#ffffff',
      borderRadius: '5px',
      userSelect: 'none',
      border: '1px solid rgb(184, 184, 184)',
      position: 'relative',
    }),
    svg: style({
      width: '10px',
      height: '10px',
      position: 'relative',
      transition: 'all 0.1s ease-in-out',
      opacity: checked ? '1' : '0',
    }),
  };
};

export default Styles;
