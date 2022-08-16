import { FC, useEffect } from "react";
import { Link, Route, Router } from "react-router-dom";
import type { IHasHistory } from "../types";

export interface IApp2 extends IHasHistory {}

export const App2: FC<IApp2> = ({ history }) => {
  const handleClick = () => {
    console.log("[App2] button was clicked");
  };

  useEffect(() => {
    console.info(`[App2] loaded; i am at ${history.location.pathname}`);
  }, [history.location.pathname]);

  console.info("[App2] about to render");

  return (
    <Router history={history}>
      <Route path={"/"} exact>
        <div className="App2">
          <h2>App2 (injected)</h2>
          <Link to="/asdf">asdf (from App2)</Link>
          <br />
          <button onClick={handleClick}>App2 button</button>
        </div>
      </Route>
      <Route path={"/asdf"}>
        <div>
          <h2>asdf from App2</h2>
          <Link to="/">Home (from App2)</Link>
        </div>
      </Route>
    </Router>
  );
};
