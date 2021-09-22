import React from "react";
import { Base, Window } from "..";
import { Styles } from "./App.styles";
import type { AppComponent } from "./App.types";

export const App: AppComponent = () => {
  const { root } = Styles();

  return (
    <Base {...root}>
      <Window title="Example App" url="https://moraj.ir" />
    </Base>
  );
};

export default App;
