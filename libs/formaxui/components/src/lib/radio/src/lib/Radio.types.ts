import type { FMComponentCommonProps } from '@formaxui/types';

export interface IRadioStateProps {
  selected: boolean;
}

export interface IRadioProps extends FMComponentCommonProps {
  selected?: IRadioStateProps['selected'];
}

export interface IRadioStyleProps {
  selected: IRadioStateProps['selected'];
}
