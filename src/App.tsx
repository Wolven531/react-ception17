import React, { FC, useLayoutEffect } from "react";
import { Link, Route, useHistory } from "react-router-dom";
import type { History } from "history";
import "./App.css";

const loadPlugins = (history: History) => {
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

  // !! in a real world app, below could be a dynamic load (e.g. from a URL)
  // !! rather than a local require invocation
  console.log("loading FakePluginLayout + FakeNav w/ require()");

  require("./FakePluginLayout");
  // require("./FakeNav")
};

export const App: FC = () => {
  const history = useHistory();

  useLayoutEffect(() => {
    console.log(`[App] loaded; about to loadPlugins`);

    loadPlugins(history);
  }, [history]);

  const handleClick = () => {
    console.log("[App] button was clicked");
  };

  return (
    <>
      <h1>App Host - React 17</h1>
      <Route path={"/"} exact>
        <div className="app" id="app">
          <h2>App Host root</h2>
          <Link to="/asdf">asdf (from App Host)</Link>
          <br />
          <button onClick={handleClick}>App Host button</button>
        </div>
      </Route>
      <Route path={"/asdf"}>
        <div>
          <h2>asdf from App Host</h2>
          <Link to="/">Home (from App Host)</Link>
        </div>
      </Route>
      <hr />
      <div id="placeholder-2"></div>
      <div id="placeholder-3"></div>
    </>
  );
};
