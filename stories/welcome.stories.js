import React from "react";
import { linkTo } from "@storybook/addon-links";
import { Welcome } from "@storybook/react/demo";
import getConfig from "next/config";
console.log("getConfig", getConfig());
console.log("process.env.foo", process.env.foo);

export default { title: "Welcome" };

export const toStorybook = () => <Welcome showApp={linkTo("Button")} />;
