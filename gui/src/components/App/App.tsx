import React, { FunctionComponent } from "react";
import { Base, Window } from "..";
import { Styles } from "./App.styles";
import type { IAppProps } from "./App.types";

export const App: FunctionComponent<IAppProps> = () => {
  const { root } = Styles();

  return (
    <Base {...root}>
      <Window />
    </Base>
  );
};

export default App;
