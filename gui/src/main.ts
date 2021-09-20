import { createElement } from "react";
import { render } from "react-dom";
import Framework7 from "framework7/lite-bundle";
import Framework7React from "framework7-react";
import { App } from "./components";

import "framework7/framework7-bundle.css";
import "./styles.css";

Framework7.use(Framework7React);

render(createElement(App), document.getElementById("app"));
