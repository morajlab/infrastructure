import { FunctionComponent } from 'react';
import { Styles } from './Text.styles';
import type { ITextProps } from './Text.types';

export const Text: FunctionComponent<ITextProps> = ({ ...rest }) => {
  const { root } = Styles({});

  return <div {...root} {...rest} />;
};

export default Text;
