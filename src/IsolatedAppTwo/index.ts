// import { createPortal } from "react-dom";
import { createElement } from "react";
import { render } from "react-dom";
// import { createRoot } from "react-dom/client";
import { IsolatedAppTwo } from "./IsolatedAppTwo";

console.log("[IsolatedAppTwo/index.ts] loaded");

export * from "./IsolatedAppTwo";

const elemContainerFromParent = document.getElementById(
  "placeholder-3"
) as HTMLElement;
// const container = document.getElementById("app") as HTMLElement;

if (elemContainerFromParent) {
  const elem = createElement(IsolatedAppTwo, {});
  render(elem, elemContainerFromParent);
} else {
  console.warn("no container");
}
