import type {
  IMLComponentFunction,
  IMLComponentProps,
  IMLStyleFunction,
} from "~types";
import type { Props } from "react-rnd";

export interface IRndProps
  extends Props,
    Omit<
      IMLComponentProps,
      "draggable" | "onDrag" | "onDragStart" | "onMouseDown" | "onMouseUp"
    > {}

export interface IRndStyleProps {}

export type RndComponent = IMLComponentFunction<IRndProps>;

export type RndStyle = IMLStyleFunction<IRndStyleProps>;
