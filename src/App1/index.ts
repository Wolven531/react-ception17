import { initApp } from "../utils/inject";
import { App1 } from "./App1";

export * from "./App1";

const elemContainerFromParent = document.getElementById(
  "placeholder-2"
) as HTMLElement;

if (elemContainerFromParent) {
  initApp(App1, elemContainerFromParent);
} else {
  console.warn("no container");
}
