import React, { FC, useEffect } from "react";
import { Link, Route, Router } from "react-router-dom";
import type { History } from "history";

export interface IIsolatedAppOne {
  history: History;
}

export const IsolatedAppOne: FC<IIsolatedAppOne> = ({
  history,
}) => {
  const handleClick = () => {
    console.log("[IsolatedAppOne] button was clicked");
  };

  useEffect(() => {
    console.log(
      `[IsolatedAppOne] loaded; i am at ${history.location.pathname}`
    );
  }, [history.location.pathname]);

  return (
    <Router history={history}>
      <Route path={"/"} exact>
        <div className="IsolatedAppOne">
          <h2>IsolatedAppOne (injected)</h2>
          <Link to="/asdf">asdf (from IsolatedAppOne)</Link>
          <br />
          <button onClick={handleClick}>IsolatedAppOne button</button>
        </div>
      </Route>
      <Route path={"/asdf"}>
        <div>
          <h2>asdf from IsolatedAppOne</h2>
          <Link to="/">Home (from IsolatedAppOne)</Link>
        </div>
      </Route>
    </Router>
  );
};
