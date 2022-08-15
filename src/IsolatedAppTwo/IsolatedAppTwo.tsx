import React, { FC, useEffect } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

export const IsolatedAppTwo: FC = () => {
    useEffect(() => {
        console.log(`[IsolatedAppTwo] loaded; i am at ${window.location.pathname}`)
    }, [])

    const handleClick = () => {
		console.log("[IsolatedAppTwo] button was clicked");
    }

    return (
        <BrowserRouter >
            <Route path={"/"} exact>
                <div className="IsolatedAppTwo">
                    <p>IsolatedAppTwo (injected)</p>
                    <Link to="/asdf">asdf (from IsolatedAppTwo)</Link>
                    <br/>
                    <button onClick={handleClick}>IsolatedAppTwo button</button>
                </div>
            </Route>
            <Route path={"/asdf"}>
                <div>
                    <Link to="/">Home (from IsolatedAppTwo)</Link>
                    <p>asdf from IsolatedAppTwo</p>
                </div>
            </Route>
        </BrowserRouter>
    );
}