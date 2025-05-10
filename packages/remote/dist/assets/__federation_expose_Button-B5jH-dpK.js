import { importShared } from './__federation_fn_import-D0-elhzv.js';
import { j as jsxRuntimeExports } from './jsx-runtime-XI9uIe3W.js';

const React = await importShared('react');
const {useState} = React;
const Button = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      id: "click-btn",
      className: "shared-btn",
      onClick: () => useState((s) => s + 1),
      children: [
        "hello world: ",
        state
      ]
    }
  ) });
};

export { Button, Button as default };
