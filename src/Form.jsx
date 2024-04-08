import { useState } from 'react'
import Button from './Button'

const Form = ({ onSubmit }) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	})

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}))
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		onSubmit(formData)
	}

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="name">Имя</label>
			<input
				id="name"
				name="name"
				type="text"
				value={formData.name}
				onChange={handleChange}
				data-testid="name-input"
			/>

			<label htmlFor="email">Email</label>
			<input
				id="email"
				name="email"
				type="email"
				value={formData.email}
				onChange={handleChange}
				data-testid="email-input"
			/>

			<label htmlFor="message">Сообщение</label>
			<textarea
				id="message"
				name="message"
				value={formData.message}
				onChange={handleChange}
				data-testid="message-input"
			/>

			<Button type="submit" data-testid="submit-button">
				Отправить
			</Button>
		</form>
	)
}

export default Form
