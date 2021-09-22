import { style } from "~utils";
import type { ActionButtonStyle } from "./ActionButton.types";

export const Styles: ActionButtonStyle = ({ size }) => {
  const _size = size ?? "20px";

  return {
    root: style({
      width: _size,
      height: _size,
      minWidth: 0,
      padding: 0,
      borderRadius: "50%",
      cursor: "default",
    }),
  };
};

export default Styles;
