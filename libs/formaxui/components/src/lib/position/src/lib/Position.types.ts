import type { HTMLAttributes } from 'react';

export interface IPositionProps extends HTMLAttributes<HTMLDivElement> {
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
}

export interface IPositionStyleProps {
  position: IPositionProps['position'];
}

export type PositionsProps = {
  [k in Exclude<IPositionProps['position'], null | undefined>]: string;
};
