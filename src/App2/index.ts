import { initApp } from "../utils/inject";
import { App2 } from "./App2";

export * from "./App2";

const htmlId = "placeholder-3";
const elemContainerFromParent = document.getElementById(htmlId) as HTMLElement;

if (elemContainerFromParent) {
  initApp(App2, elemContainerFromParent);
} else {
  console.warn(`[App2/index] no container w/ ID="${htmlId}"`);
}
