/* eslint-disable @nrwl/nx/enforce-module-boundaries */

import { iterate } from '@formaxui/utils-object';
import type { IStyleProps } from '@formaxui/types';

export { css as style } from 'glamor';

export const important = (
  styles: string | IStyleProps
): string | IStyleProps => {
  const addImport = (prop: string): string =>
    prop.includes('!important') ? prop : `${prop} !important`;

  if (typeof styles === 'string') {
    return addImport(styles);
  }

  return iterate<IStyleProps>(styles, (_key, value) => addImport(value));
};
