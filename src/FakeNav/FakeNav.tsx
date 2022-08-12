import React, { FC, useEffect } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

export const FakeNav: FC = () => {
    useEffect(() => {
        console.log(`[FakeNav] loaded; i am at ${window.location.pathname}`)
    }, [])

    const handleClick = () => {
        console.log("button3 was clicked")
    }

    return (
        <BrowserRouter >
            <Route path={"/"} exact>
                <div className="FakeNav">
                    <p>FakeNav (injected)</p>
                    <Link to="/asdf">asdf (from FakeNav)</Link>
                    <br/>
                    <button onClick={handleClick}>FakeNav button</button>
                </div>
            </Route>
            <Route path={"/asdf"}>
                <div>
                    <Link to="/">Home (from FakeNav)</Link>
                    <p>asdf from FakeNav</p>
                </div>
            </Route>
        </BrowserRouter>
    );
}