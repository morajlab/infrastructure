import React, { FunctionComponent } from "react";
import { App as F7App, View } from "framework7-react";
import { Styles } from "./Base.styles";
import type { IBaseProps } from "./Base.types";

export const Base: FunctionComponent<IBaseProps> = ({ children }) => {
  const { root } = Styles();

  return (
    <F7App
      theme="ios"
      name="Moraj Lab infrastructure gui"
      id="com.morajlab.gui"
    >
      <View main {...root}>
        {children}
      </View>
    </F7App>
  );
};

export default Base;
