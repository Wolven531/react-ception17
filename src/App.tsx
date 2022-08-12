import React, { FC, useLayoutEffect } from "react";
import { Link, Route, useHistory } from "react-router-dom";
import type { History } from "history";
import "./App.css";

const loadPlugins = (
  // navState$: Subject<any>,
  history: History
) => {
  console.log("[FakePortal] loaded, adding init event listener");

  window.document.addEventListener(
    "init",
    ((e: CustomEvent<any>) => {
      const userLoadedEvt = new CustomEvent("user-loaded", {
        detail: {
          history,
          // navState: navState$,
        },
      });

      console.log("[FakePortal] init received, firing user-loaded");
      window.document.dispatchEvent(userLoadedEvt);
    }) as EventListener,
    {
      capture: true,
      once: false, // allow for multiple init events
    }
  );

  console.log("[FakePortal] requiring FakePluginLayout + FakeNav");

  require("./FakePluginLayout");
  // require("./FakeNav")
};

export const App: FC = () => {
  const history = useHistory();

  // const navState$ = useMemo(() => {
  //   const s = new Subject<any>()

  //   s.subscribe(evt => {
  //     console.log("[FakePortal] evt happened", evt)
  //   })

  //   return s;
  // }, []);

  useLayoutEffect(() => {
    console.log(`[FakePortal] loaded; i am at ${history.location.pathname}`);

    loadPlugins(history);

    // return () => {
    //   navState$.unsubscribe()
    // };
  }, [
    history,
    // navState$,
  ]);

  const handleClick = () => {
    console.log("[FakePortal] button was clicked");
  };

  return (
    <>
      <h1>FakePortal - React 17</h1>
      <Route path={"/"} exact>
        <div className="app" id="app">
          <p>FakePortal root</p>
          <Link to="/asdf">asdf (from FakePortal)</Link>
          <br />
          <button onClick={handleClick}>FakePortal button</button>
        </div>
      </Route>
      <Route path={"/asdf"}>
        <div>
          <Link to="/">Home (from App)</Link>
          <p>asdf from FakePortal</p>
        </div>
      </Route>
      <hr />
      <div id="placeholder-2"></div>
      <div id="placeholder-3"></div>
    </>
  );
};
