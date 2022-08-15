import { initApp } from "../utils/inject";
import { IsolatedAppOne } from "./IsolatedAppOne";

export * from "./IsolatedAppOne";

const elemContainerFromParent = document.getElementById(
  "placeholder-2"
) as HTMLElement;

if (elemContainerFromParent) {
  initApp(IsolatedAppOne, elemContainerFromParent);
} else {
  console.warn("no container");
}
