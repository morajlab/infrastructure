import type { HTMLAttributes } from 'react';

export interface IAcrylicProps extends HTMLAttributes<HTMLDivElement> {
  blur?: number;
}

export interface IAcrylicStyleProps {
  blur: IAcrylicProps['blur'];
}
