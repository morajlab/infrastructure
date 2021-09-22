import { style } from "~utils";
import type { TextStyle } from "./Text.types";

export const Styles: TextStyle = () => {
  return {
    root: style({
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif',
    }),
  };
};

export default Styles;
