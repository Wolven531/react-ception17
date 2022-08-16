import React, { StrictMode } from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { AppHost } from './AppHost'
import reportWebVitals from './reportWebVitals'
import './index.css'

console.info('[index] about to render')

const htmlId = 'root'

render(
	<StrictMode>
		<BrowserRouter basename="/">
			<AppHost />
		</BrowserRouter>
	</StrictMode>,
	window.document.getElementById(htmlId) as HTMLElement,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
