import type { HTMLAttributes } from 'react';

export interface IRadioStateProps {
  selected: boolean;
}

export interface IRadioProps extends HTMLAttributes<HTMLDivElement> {
  selected?: IRadioStateProps['selected'];
}

export interface IRadioStyleProps {
  selected: IRadioStateProps['selected'];
}
