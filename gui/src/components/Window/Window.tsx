import React from "react";
import { Button } from "framework7-react";
import { Styles } from "./Window.styles";
import type { WindowComponent } from "./Window.types";

export const Window: WindowComponent = ({}) => {
  const { root } = Styles();

  return (
    <>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti in
        molestias nulla earum inventore odio eum fugit autem rem aut, quos
        voluptatem modi eaque culpa, beatae deserunt quod totam laborum.
      </div>
      <Button fill round>
        Example Button
      </Button>
    </>
  );
};

export default Window;
