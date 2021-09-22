import React from "react";
import { Card } from "framework7-react";
import { ActionButton, Text, Rnd } from "..";
import { Styles } from "./Window.styles";
import type { WindowComponent } from "./Window.types";

export const Window: WindowComponent = ({ title, url, ...rest }) => {
  const { root, header, actionBtnSec, titleStyle, iframe } = Styles();

  return (
    <Rnd
      minHeight="400"
      minWidth="400"
      default={{ height: "400", width: "400", x: 0, y: 0 }}
    >
      <Card {...root} {...rest} padding={false} outline>
        <span slot="header" {...header}>
          <Text {...titleStyle}>{title}</Text>
          <div {...actionBtnSec}>
            {["red", "blue", "green"].map((color, key) => (
              <ActionButton
                size="12px"
                style={{ backgroundColor: color }}
                key={key}
              />
            ))}
          </div>
        </span>
        <iframe src={url} {...iframe} slot="content" />
      </Card>
    </Rnd>
  );
};

export default Window;
