import "~lib/init";
import React from "react";
import { App, View } from "framework7-react";
import { Styles } from "./Base.styles";
import type { BaseComponent } from "./Base.types";

export const Base: BaseComponent = ({ children }) => {
  const { root } = Styles();

  return (
    <App theme="ios" name="Moraj Lab infrastructure gui" id="com.morajlab.gui">
      <View main {...root}>
        {children}
      </View>
    </App>
  );
};

export default Base;
