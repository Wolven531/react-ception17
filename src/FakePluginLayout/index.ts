import { createElement } from "react";
import { render } from "react-dom";
import { FakePluginLayout } from "./FakePluginLayout";

export * from "./FakePluginLayout";

const elemContainerFromParent = document.getElementById(
  "placeholder-2"
) as HTMLElement;

const initPlugin = () => {
  console.log(
    "[FakePluginLayout/index.ts] loaded, adding user-loaded event listener"
  );

  window.document.addEventListener(
    "user-loaded", // listen for user event
    ((e: CustomEvent<any>) => {
      console.log("[FakePluginLayout/index.ts] user-loaded, rendering...");

      const elem = createElement(FakePluginLayout, {
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

  console.log("[FakePluginLayout/index.ts] firing init");

  window.document.dispatchEvent(pluginInitEvt); // fire plugin init event
};

if (elemContainerFromParent) {
  initPlugin();
} else {
  console.warn("no container");
}
