import React, { FunctionComponent } from "react";
import { Button } from "framework7-react";
import { Styles } from "./Window.styles";
import type { IWindowProps } from "./Window.types";

export const Window: FunctionComponent<IWindowProps> = ({}) => {
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
