import type { History } from "history";

/**
 * This function wires up an event listener so that injected apps can receive shared data. It
 * also
 *
 * @param {History} history A history instance to share amongst all apps
 */
export const connectAppInit = (history: History) => {
  console.log("adding init event listener");

  window.document.addEventListener(
    "init",
    ((e: CustomEvent<any>) => {
      const userLoadedEvt = new CustomEvent("user-loaded", {
        detail: {
          history,
        },
      });

      console.log("init event received, firing user-loaded");
      window.document.dispatchEvent(userLoadedEvt);
    }) as EventListener,
    {
      capture: true,
      once: false, // allow for multiple init events
    }
  );
};

/**
 * This function simulates dynamic app loading
 */
export const loadApps = () => {
  // !! in a real world app, below could be a dynamic load (e.g. from a URL)
  // !! rather than a local require invocation
  console.log("loading FakePluginLayout + FakeNav w/ require()");

  require("../FakePluginLayout");
  // require("../FakeNav")
};
