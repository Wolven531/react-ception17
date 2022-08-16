import React from 'react'
import { render } from '@testing-library/react'
import { AppHost } from './AppHost'
import { MemoryRouter } from 'react-router'

describe('AppHost', () => {
	it('renders view that matches snapshot', () => {
		const view = render(
			<MemoryRouter>
				<AppHost />
			</MemoryRouter>,
		)

		expect(view.asFragment()).toMatchSnapshot()
	})
})
