/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @nrwl/nx/enforce-module-boundaries */

import { css } from 'glamor';
import { iterate } from '@formaxui/utils-object';
import type { IStyleProps } from './style.types';

export const style = (props: IStyleProps) => css(props);

export const important = <T = string | IStyleProps>(styles: T): T => {
  const addImport = (prop: string): string =>
    prop.includes('!important') ? prop : `${prop} !important`;

  if (typeof styles === 'string') {
    return addImport(styles) as any;
  }

  return iterate<T>(styles, (_key, value) => addImport(value));
};
