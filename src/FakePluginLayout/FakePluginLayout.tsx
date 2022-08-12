import React, { FC, useEffect } from "react";
import { Link, Route, Router } from "react-router-dom";
import type { History } from "history";

export interface IFakePluginLayout {
  history: History;
}

export const FakePluginLayout: FC<IFakePluginLayout> = ({ history }) => {
  const handleClick = () => {
    console.log("[FakePluginLayout] button was clicked");
  };

  useEffect(() => {
    console.log(
      `[FakePluginLayout] loaded; i am at ${history.location.pathname}`
    );
  }, [history.location.pathname]);

  return (
    <Router history={history}>
      <Route path={"/"} exact>
        <div className="FakePluginLayout">
          <p>FakePluginLayout (injected)</p>
          <Link to="/asdf">asdf (from FakePluginLayout)</Link>
          <br />
          <button onClick={handleClick}>FakePluginLayout button</button>
        </div>
      </Route>
      <Route path={"/asdf"}>
        <div>
          <Link to="/">Home (from FakePluginLayout)</Link>
          <p>asdf from FakePluginLayout</p>
        </div>
      </Route>
    </Router>
  );
};
