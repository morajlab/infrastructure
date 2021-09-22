import type {
  IMLComponentFunction,
  IMLComponentProps,
  IMLStyleFunction,
} from "~types";

export interface ITextProps extends IMLComponentProps {}

export interface ITextStyleProps {}

export type TextComponent = IMLComponentFunction<ITextProps>;

export type TextStyle = IMLStyleFunction<ITextStyleProps>;
