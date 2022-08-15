import React, { FC, useEffect } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { IHasHistory } from "../utils/inject";

export interface IIsolatedAppTwo extends IHasHistory {}

export const IsolatedAppTwo: FC<IIsolatedAppTwo> = ({ history }) => {
  useEffect(() => {
    console.log(
      `[IsolatedAppTwo] loaded; i am at ${history.location.pathname}`
    );
  }, [history.location.pathname]);

  const handleClick = () => {
    console.log("[IsolatedAppTwo] button was clicked");
  };

  return (
    <BrowserRouter>
      <Route path={"/"} exact>
        <div className="IsolatedAppTwo">
          <h2>IsolatedAppTwo (injected)</h2>
          <Link to="/asdf">asdf (from IsolatedAppTwo)</Link>
          <br />
          <button onClick={handleClick}>IsolatedAppTwo button</button>
        </div>
      </Route>
      <Route path={"/asdf"}>
        <div>
          <h2>asdf from IsolatedAppTwo</h2>
          <Link to="/">Home (from IsolatedAppTwo)</Link>
        </div>
      </Route>
    </BrowserRouter>
  );
};
