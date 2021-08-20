import { FunctionComponent } from 'react';
import { Styles } from './Acrylic.styles';
import type { IAcrylicProps } from './Acrylic.types';

export const Acrylic: FunctionComponent<IAcrylicProps> = ({
  children,
  blur,
  ...rest
}) => {
  const { root } = Styles({ blur });

  return (
    <div {...root} {...rest}>
      {children}
    </div>
  );
};

export default Acrylic;
