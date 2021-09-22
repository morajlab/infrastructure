import { style } from "~utils";
import type { WindowStyle } from "./Window.types";

export const Styles: WindowStyle = () => {
  return {
    root: style({
      width: "100%",
      height: "100%",
      margin: 0,
      display: "flex",
      flexDirection: "column",
      "& .card-header": {
        padding: "5px 10px",
      },
      "& .card-content": {
        flexGrow: 1,
      },
    }),
    iframe: style({
      border: "none",
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      borderBottomLeftRadius: "var(--f7-card-border-radius)",
      borderBottomRightRadius: "var(--f7-card-border-radius)",
    }),
    header: style({
      display: "flex",
      alignItems: "center",
      width: "100%",
    }),
    actionBtnSec: style({
      display: "flex",
      "& .button": {
        marginRight: "1px",
        marginLeft: "1px",
      },
    }),
    titleStyle: style({
      flexGrow: 1,
      textAlign: "center",
    }),
  };
};

export default Styles;
