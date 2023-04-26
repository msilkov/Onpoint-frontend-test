import React from 'react';
import homePageIcon from '../../images/icons/home-icon.svg';
import './NavBar.css';

export default function NavBar({ navToHomePage }) {
	return (
		<div className="navbar">
			<img
				className="navbar__image"
				src={homePageIcon}
				alt="Home page"
				onClick={navToHomePage}
			/>
			<p className="navbar__text">Project</p>
		</div>
	);
}
