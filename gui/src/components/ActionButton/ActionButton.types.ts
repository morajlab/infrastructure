import type {
  IMLComponentFunction,
  IMLComponentProps,
  IMLStyleFunction,
} from "~types";

export interface IActionButtonStyleProps {
  size?: string;
}

export interface IActionButtonProps
  extends IMLComponentProps,
    IActionButtonStyleProps {}

export type ActionButtonComponent = IMLComponentFunction<IActionButtonProps>;

export type ActionButtonStyle = IMLStyleFunction<IActionButtonStyleProps>;
