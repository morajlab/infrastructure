import { style } from '@formaxui/utils-style';
import type { IComponentStyleFunction } from '@formaxui/types';
import type { IRnDStyleProps } from './RnD.types';

export const Styles: IComponentStyleFunction<IRnDStyleProps> = ({
  translate,
}) => {
  return {
    root: style({
      transform: `translate3d(${translate?.x ?? 0}px, ${
        translate?.y ?? 0
      }px, 0)`,
      width: 'fit-content',
      height: 'fit-content',
    }),
  };
};

export default Styles;
