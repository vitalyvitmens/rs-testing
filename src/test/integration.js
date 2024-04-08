import { fireEvent, render } from '@testing-library/react'
import Form from '../Form'

describe('Form', () => {
	it('отправляет данные, когда форма заполнена и отправлена', () => {
		const onSubmit = jest.fn()
		const view = render(<Form onSubmit={onSubmit} />)

		const nameInput = view.getByLabelText('Имя')
		const emailInput = view.getByLabelText('Email')
		const messageInput = view.getByText('Сообщение')
		const submitButton = view.getByText('Отправить')

		fireEvent.change(nameInput, { target: { value: 'John Doe' } })
		fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } })
		fireEvent.change(messageInput, { target: { value: 'Hello, World!' } })
		fireEvent.click(submitButton)

		expect(onSubmit).toHaveBeenCalledWith({
			name: 'John Doe',
			email: 'john.doe@example.com',
			message: 'Hello, World!',
		})
	})
})
