import type { History } from 'history'
import { createElement, FC } from 'react'
import { Container, render } from 'react-dom'
import type { IHasHistory } from '../types'

/**
 * This function wires up an event listener so that injected apps can receive shared data. It
 * also
 *
 * @param {History} history A history instance to share amongst all apps
 */
export const connectAppInit = (history: History) => {
	console.log('adding init event listener')

	window.document.addEventListener(
		'init',
		((e: CustomEvent<any>) => {
			const userLoadedEvt = new CustomEvent('user-loaded', {
				detail: {
					history,
				},
			})

			console.log('init event received, firing user-loaded')
			window.document.dispatchEvent(userLoadedEvt)
		}) as EventListener,
		{
			capture: true,
			once: false, // allow for multiple init events
		},
	)
}

/**
 * This function wires up an event listener to receive shared data and requests the data
 */
export const initApp = (comp: FC<IHasHistory>, container: Container) => {
	window.document.addEventListener(
		'user-loaded', // listen for user event
		((e: CustomEvent<IHasHistory>) => {
			console.log(`[${comp.name}] user-loaded, rendering...`)

			const elem = createElement(comp, {
				history: e.detail.history,
				key: comp.name,
			})

			render(elem, container)
		}) as EventListener,
		{
			capture: true,
			once: true,
		},
	)

	const initEvt = new CustomEvent('init', {
		detail: {},
	})

	console.log(`[${comp.name}] firing init`)

	window.document.dispatchEvent(initEvt) // fire plugin init event
}

/**
 * This function simulates dynamic app loading
 */
export const loadApps = () => {
	// !! in a real world app, below could be a dynamic load (e.g. from a URL)
	// !! rather than a local require invocation
	console.log('loading App1 + App2 w/ require()')

	require('../App1')
	require('../App2')
}
