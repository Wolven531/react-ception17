import React, { FC, useRef } from "react"
import { BrowserRouter } from "react-router-dom"
import { createBrowserHistory } from "history"
import { App } from "./App"

// HoC
export const HistoryRoot: FC = () => {
    // const router = useRef<BrowserRouter>(null);
    const history = createBrowserHistory({
        basename: "/",
    })

    return <BrowserRouter
        // ref={router}

        {...history}>
        <App
        // history={history}
        //  routerRef={router.current}
        />
    </BrowserRouter>
}
