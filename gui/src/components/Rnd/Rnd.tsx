import React from "react";
import { Rnd as _Rnd } from "react-rnd";
import { Styles } from "./Rnd.styles";
import type { RndComponent } from "./Rnd.types";

export const Rnd: RndComponent = ({ ...rest }) => {
  const { root } = Styles();

  return <_Rnd {...root} {...rest} />;
};

export default Rnd;
