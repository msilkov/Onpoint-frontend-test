import React from 'react';
import logo from '../../images/icons/logo.svg';
import './Logo.css';

export default function Logo() {
	return (
		<div className="logo">
			<a
				className="logo__link"
				href="https://onpoint.ru"
				target="_blank"
				rel="noreferrer"
			>
				<img className="logo__image" src={logo} alt="Onpoint" />
			</a>
		</div>
	);
}
