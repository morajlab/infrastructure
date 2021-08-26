import type { FMComponentCommonProps } from '@formaxui/types';
import type { Translate, DraggableSyntheticListeners } from '@dnd-kit/core';

export enum Axis {
  All,
  Vertical,
  Horizontal,
}

export interface IDraggableItemProps {
  translate: Translate;
  children: FMComponentCommonProps['children'];
}

export interface IDraggableProps {
  axis?: Axis;
  dragOverlay?: boolean;
  dragging?: boolean;
  handle?: boolean;
  label?: string;
  listeners?: DraggableSyntheticListeners;
  style?: React.CSSProperties;
  translate?: Translate;
  children: FMComponentCommonProps['children'];
}

export interface IRnDProps extends FMComponentCommonProps {
  minHeight?: number;
  minWidth?: number;
  width?: number;
  height?: number;
}

export interface IRnDStyleProps {
  translate: IDraggableProps['translate'];
}
