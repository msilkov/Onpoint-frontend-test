import React from 'react';
import arrowIcon from '../../images/icons/arrow-icon.svg';
import './PopupSliderNav.css';

export default function PopupSliderNav({
	displayNext,
	displayPrev,
	currentSlide,
	slidesArray,
}) {
	return (
		<div className="popup-slider-nav">
			<img
				className="popup-slider-nav__arrow popup-slider-nav__arrow_type_left"
				onClick={displayPrev}
				src={arrowIcon}
				alt="Arrow left"
			/>
			{slidesArray.map((slide) => (
				<div
					className={`popup-slider-nav__bullet ${
						slide === currentSlide ? 'popup-slider-nav__bullet_active' : ''
					}`}
					key={slide}
				/>
			))}
			<img
				className="popup-slider-nav__arrow popup-slider-nav__arrow_type_right"
				onClick={displayNext}
				src={arrowIcon}
				alt="Arrow right"
			/>
		</div>
	);
}
