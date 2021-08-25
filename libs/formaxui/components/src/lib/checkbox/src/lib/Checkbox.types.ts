import type { HTMLAttributes } from 'react';

export interface ICheckboxStateProps {
  checked: boolean;
}

export interface ICheckboxProps extends HTMLAttributes<HTMLDivElement> {
  checked?: ICheckboxStateProps['checked'];
}

export interface ICheckboxStyleProps {
  checked: ICheckboxStateProps['checked'];
}
