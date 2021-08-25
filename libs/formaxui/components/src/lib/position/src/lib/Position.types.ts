import type { FMComponentCommonProps } from '@formaxui/types';

export interface IPositionProps extends FMComponentCommonProps {
  position?:
    | 'full'
    | 'right'
    | 'left'
    | 'top'
    | 'bottom'
    | 'top-right'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-left';
  type?: 'fixed' | 'absolute';
}

export interface IPositionStyleProps {
  position: IPositionProps['position'];
  type: IPositionProps['type'];
}

export type PositionsProps = {
  [k in Exclude<IPositionProps['position'], null | undefined>]: string;
};
