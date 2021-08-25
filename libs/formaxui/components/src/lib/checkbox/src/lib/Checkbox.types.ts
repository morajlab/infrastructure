import type { FMComponentCommonProps } from '@formaxui/types';

export interface ICheckboxStateProps {
  checked: boolean;
}

export interface ICheckboxProps extends FMComponentCommonProps {
  checked?: ICheckboxStateProps['checked'];
}

export interface ICheckboxStyleProps {
  checked: ICheckboxStateProps['checked'];
}
