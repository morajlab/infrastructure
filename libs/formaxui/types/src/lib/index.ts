// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { style } from '@formaxui/utils-style';

export interface IComponentStyleFunction<T> {
  (props: T): {
    [key: string]: ReturnType<typeof style>;
  };
}
