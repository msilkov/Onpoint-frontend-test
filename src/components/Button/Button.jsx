import React from 'react';
import './Button.css';

export default function Button({ handleClick, isAbsolute, icon, text }) {
	return (
		<button
			className={`button ${isAbsolute ? 'button_position_absolute' : ''}`}
			onClick={handleClick}
		>
			<div className="button__icon-wrapper">
				<img className="button__icon" src={icon} alt="Button icon" />
			</div>
			<span className="button__text">{text}</span>
		</button>
	);
}
