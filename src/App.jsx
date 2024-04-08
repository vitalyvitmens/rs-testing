import { useState } from 'react'
import './App.css'
import Form from './Form'

const DEFAULT_HEADER = 'Grettings'

export const App = () => {
	const [inputValue, setInputValue] = useState('')
	const [headerValue, setHeaderValue] = useState(DEFAULT_HEADER)

	const handleIntutChange = (event) => {
		setInputValue(event.target.value)
	}

	const handleSubmit = () => {
		setHeaderValue(inputValue)
		setInputValue('')
	}

	const handleReset = () => {
		setHeaderValue(DEFAULT_HEADER)
		setInputValue('')
	}

	return (
		<header>
			<div className="App">
				<h1 data-testid="header-id">{headerValue}</h1>
				<input
					type="text"
					id="user-input"
					value={inputValue}
					onChange={handleIntutChange}
					data-testid="user-input"
				/>
				<button 
				  onClick={handleSubmit} 
					data-testid="submit-button"
				>
					Отправить
				</button>
				<button 
				  onClick={handleReset} 
					data-testid="reset-button"
				>
					Сбросить
				</button>
			</div>
			<div className="App">
				<Form />
			</div>
		</header>
	)
}
