import React, { FC, useEffect } from 'react'
import { Link, Route, Router } from 'react-router-dom'
import type { IHasHistory } from '../types'

export interface IApp1 extends IHasHistory {}

export const App1: FC<IApp1> = ({ history }) => {
	const handleClick = () => {
		console.log('[App1] button was clicked')
	}

	useEffect(() => {
		console.info(`[App1] loaded; i am at ${history.location.pathname}`)
	}, [history.location.pathname])

	console.info('[App1] about to render')

	return (
		<Router history={history}>
			<Route
				path={'/'}
				exact
			>
				<div className="App1">
					<h2>App1 (injected)</h2>
					<Link to="/asdf">asdf (from App1)</Link>
					<br />
					<button onClick={handleClick}>App1 button</button>
				</div>
			</Route>
			<Route path={'/asdf'}>
				<div>
					<h2>asdf from App1</h2>
					<Link to="/">Home (from App1)</Link>
				</div>
			</Route>
		</Router>
	)
}
