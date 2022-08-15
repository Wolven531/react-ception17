import { initApp } from "../utils/inject";
import { IsolatedAppTwo } from "./IsolatedAppTwo";

export * from "./IsolatedAppTwo";

const elemContainerFromParent = document.getElementById(
  "placeholder-3"
) as HTMLElement;

if (elemContainerFromParent) {
  initApp(IsolatedAppTwo, elemContainerFromParent);
} else {
  console.warn("no container");
}
