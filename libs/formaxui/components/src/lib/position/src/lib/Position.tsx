import { FunctionComponent } from 'react';
import { Styles } from './Position.styles';
import type { IPositionProps } from './Position.types';

export const Position: FunctionComponent<IPositionProps> = ({
  position,
  type,
  ...rest
}) => {
  const { root } = Styles({ position, type });

  return <div {...root} {...rest} />;
};

export default Position;
