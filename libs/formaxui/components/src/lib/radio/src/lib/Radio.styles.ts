import { style } from '@formaxui/utils-style';
import type { IComponentStyleFunction } from '@formaxui/types';
import type { IRadioStyleProps } from './Radio.types';

export const Styles: IComponentStyleFunction<IRadioStyleProps> = ({
  selected,
}) => {
  return {
    root: style({
      width: '20px',
      height: '20px',
      borderRadius: '50px',
      backgroundColor: selected ? '#2f82ff' : '#ffffff',
      border: '1px solid rgb(184, 184, 184)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }),
    select: style({
      width: '10px',
      height: '10px',
      backgroundColor: '#ffffff',
      borderRadius: '50px',
      transition: 'all 0.1s ease-in-out',
      transform: `scale(${selected ? '1' : '0'})`,
    }),
  };
};

export default Styles;
