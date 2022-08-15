import { initApp } from "../utils/inject";
import { App2 } from "./App2";

export * from "./App2";

const elemContainerFromParent = document.getElementById(
  "placeholder-3"
) as HTMLElement;

if (elemContainerFromParent) {
  initApp(App2, elemContainerFromParent);
} else {
  console.warn("no container");
}
