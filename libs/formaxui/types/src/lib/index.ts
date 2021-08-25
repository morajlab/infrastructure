// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { style } from '@formaxui/utils-style';
import type { HTMLAttributes } from 'react';

export interface IComponentStyleFunction<T> {
  (props: T): {
    [key: string]: ReturnType<typeof style>;
  };
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FMComponentCommonProps
  extends HTMLAttributes<HTMLDivElement> {}
