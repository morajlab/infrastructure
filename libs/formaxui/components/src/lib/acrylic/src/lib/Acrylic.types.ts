import type { FMComponentCommonProps } from '@formaxui/types';

export interface IAcrylicProps extends FMComponentCommonProps {
  blur?: number;
}

export interface IAcrylicStyleProps {
  blur: IAcrylicProps['blur'];
}
