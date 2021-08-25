import { style } from '@formaxui/utils-style';
import type { IComponentStyleFunction } from '@formaxui/types';
import type { IDesktopStyleProps } from './desktop.types';

// eslint-disable-next-line no-empty-pattern
export const Styles: IComponentStyleFunction<IDesktopStyleProps> = ({}) => {
  return {
    root: style({}),
  };
};

export default Styles;
