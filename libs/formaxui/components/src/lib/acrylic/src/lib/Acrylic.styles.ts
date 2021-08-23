import { style } from '@formaxui/utils-style';
import type { IComponentStyleFunction } from '@formaxui/types';
import type { IAcrylicStyleProps } from './Acrylic.types';

const defaultProps: Partial<IAcrylicStyleProps> = {
  blur: 50,
};

export const Styles: IComponentStyleFunction<IAcrylicStyleProps> = ({
  blur,
}) => {
  return {
    root: style({
      backdropFilter: `blur(${blur ?? defaultProps.blur}px)`,
    }),
  };
};

export default Styles;
