import { useState } from 'react';
import './Select.css';

let selectOptions = [
	'React', 'Vue', 'Angular'
]

const Select = ({ selected, setSelected }) => {
	// debugger
	const placeholder = selected ?? 'Выберите категорию'
	const [isActive, setIsActive] = useState(false);

	let options = selectOptions.map(elem => {
		return <div
			className="select__item"
			onClick={(event) => {
				setSelected(elem)
				setIsActive(false)
			}}
			key={elem}>{elem}</div>
	})

	return (
		<div className={`select ${isActive ? '' : 'active'} `}>
			<div className="select__btn" onClick={() => { setIsActive(!isActive) }}>
				{placeholder}
				<span className="select__arrow"></span>
			</div>
			<div
				className="select__content"
			>
				{isActive ? options : ''}
			</div >
		</div >
	)
}

export default Select;