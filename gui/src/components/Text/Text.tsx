import React from "react";
import { Styles } from "./Text.styles";
import type { TextComponent } from "./Text.types";

export const Text: TextComponent = ({ ...rest }) => {
  const { root } = Styles();

  return <div {...root} {...rest} />;
};

export default Text;
