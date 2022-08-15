import { createElement } from "react";
import { render } from "react-dom";
import { IsolatedAppOne } from "./IsolatedAppOne";

export * from "./IsolatedAppOne";

const elemContainerFromParent = document.getElementById(
  "placeholder-2"
) as HTMLElement;

const initPlugin = () => {
  console.log(
    "[IsolatedAppOne/index.ts] loaded, adding user-loaded event listener"
  );

  window.document.addEventListener(
    "user-loaded", // listen for user event
    ((e: CustomEvent<any>) => {
      console.log("[IsolatedAppOne/index.ts] user-loaded, rendering...");

      const elem = createElement(IsolatedAppOne, {
        // evt$: e.detail.navState,
        history: e.detail.history,
        key: "fake-plugin-layout",
      });

      render(elem, elemContainerFromParent);
    }) as EventListener,
    {
      capture: true,
      once: true,
    }
  );

  const pluginInitEvt = new CustomEvent("init", {
    detail: {},
  });

  console.log("[IsolatedAppOne/index.ts] firing init");

  window.document.dispatchEvent(pluginInitEvt); // fire plugin init event
};

if (elemContainerFromParent) {
  initPlugin();
} else {
  console.warn("no container");
}
