import { style } from "~utils";
import type { RndStyle } from "./Rnd.types";

export const Styles: RndStyle = () => {
  return {
    root: style({
      cursor: "default !important",
    }),
  };
};

export default Styles;
