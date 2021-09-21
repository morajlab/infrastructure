import React from "react";
import { Meta, Story } from "@storybook/react";
import { Base } from "..";
import { Window, IWindowProps } from ".";

export default {
  title: "Components/Window",
  component: Window,
} as Meta;

const Template: Story<IWindowProps> = (args) => (
  <Base>
    <Window {...args} />
  </Base>
);

export const Primary = Template.bind({});
