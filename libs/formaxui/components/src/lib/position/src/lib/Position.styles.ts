import { style } from '@formaxui/utils-style';
import type { IComponentStyleFunction } from '@formaxui/types';
import type { IPositionStyleProps, PositionsProps } from './Position.types';

export const Styles: IComponentStyleFunction<IPositionStyleProps> = ({
  position,
}) => {
  const positions: PositionsProps = {
    full: '0',
    top: '0 0 50% 0',
    right: '0 0 0 50%',
    bottom: '50% 0 0 0',
    left: '0 50% 0 0',
    'top-right': '0 0 50% 50%',
    'bottom-right': '50% 0 0 50%',
    'bottom-left': '50% 50% 0 0',
    'top-left': '0 50% 50% 0',
  };

  return {
    root: style({
      position: 'fixed',
      inset: positions[position ?? 'full'],
    }),
  };
};

export default Styles;
