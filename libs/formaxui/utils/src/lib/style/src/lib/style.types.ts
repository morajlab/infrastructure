import type { CSSProperties } from 'react';

export interface ICSSProps extends CSSProperties {
  [key: string]: any;
}

export interface IStyleProps extends ICSSProps {
  [key: string]: ICSSProps | any;
}
