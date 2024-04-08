import { fireEvent, render, screen } from '@testing-library/react'
import { App } from './App'

describe('Приложение Greetings!', () => {
	test('Ввод произвольного текста', () => {
		render(<App />)

		const input = screen.getByTestId('user-input')

		fireEvent.change(input, { target: { value: 'Привет!' } })

		expect(input.value).toBe('Привет!')
	})
})
