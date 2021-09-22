import type {
  IMLComponentProps,
  IMLComponentFunction,
  IMLStyleFunction,
} from "~types";

export interface IWindowProps extends IMLComponentProps {
  title: string;
  url: string;
}

export interface IWindowStyleProps {}

export type WindowComponent = IMLComponentFunction<IWindowProps>;

export type WindowStyle = IMLStyleFunction<IWindowStyleProps>;
