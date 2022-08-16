import React from 'react'
import { render } from '@testing-library/react'
import { App } from './App'
import { MemoryRouter } from 'react-router'

describe('App', () => {
	it('renders view that matches snapshot', () => {
		const view = render(
			<MemoryRouter>
				<App />
			</MemoryRouter>,
		)

		expect(view.asFragment()).toMatchSnapshot()
	})
})
