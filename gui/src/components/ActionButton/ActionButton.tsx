import React from "react";
import { Button } from "framework7-react";
import { Styles } from "./ActionButton.styles";
import type { ActionButtonComponent } from "./ActionButton.types";

export const ActionButton: ActionButtonComponent = ({ size, ...rest }) => {
  const { root } = Styles({ size });

  return <Button {...root} {...rest} type="button" fill />;
};

export default ActionButton;
