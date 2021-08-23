import { style } from '@formaxui/utils-style';
import type { IComponentStyleFunction } from '@formaxui/types';
import type { ITextStyleProps } from './Text.types';

// eslint-disable-next-line no-empty-pattern
export const Styles: IComponentStyleFunction<ITextStyleProps> = ({}) => {
  return {
    root: style({
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif',
    }),
  };
};

export default Styles;
