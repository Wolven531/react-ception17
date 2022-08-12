// import { createPortal } from "react-dom";
import { createElement } from "react";
import { render } from "react-dom";
// import { createRoot } from "react-dom/client";
import { FakeNav } from "./FakeNav";

console.log("[FakeNav/index.ts] loaded");

export * from "./FakeNav";

const elemContainerFromParent = document.getElementById(
  "placeholder-3"
) as HTMLElement;
// const container = document.getElementById("app") as HTMLElement;

if (elemContainerFromParent) {
  const elem = createElement(FakeNav, {});
  render(elem, elemContainerFromParent);
} else {
  console.warn("no container");
}
