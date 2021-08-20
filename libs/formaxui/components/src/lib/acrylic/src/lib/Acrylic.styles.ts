import { style } from '@formaxui/utils-style';
import type { IAcrylicStyleProps } from './Acrylic.types';

const defaultProps: Partial<IAcrylicStyleProps> = {
  blur: 5,
};

export const Styles = ({ blur }: IAcrylicStyleProps) => {
  return {
    root: style({
      backdropFilter: `blur(${blur ?? defaultProps.blur}px)`,
    }),
  };
};

export default Styles;
