import React, {
  FC,
  useEffect,
  // useLayoutEffect
} from "react";
import { Link, Route, useHistory } from "react-router-dom";
import { connectAppInit, loadApps } from "./utils/inject";
import "./App.css";

export const App: FC = () => {
  const history = useHistory();

  const handleClick = () => {
    console.log("[App] button was clicked");
  };

  useEffect(() => {
    //   useLayoutEffect(() => {
    console.info(`[App] loaded; about to load apps`);

    connectAppInit(history);
    loadApps();
  }, [history]);

  console.info("[App] about to render");

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
