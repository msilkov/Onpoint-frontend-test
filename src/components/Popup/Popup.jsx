import React from 'react';

import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PopupSliderNav from '../PopupSliderNav/PopupSliderNav';
import './Popup.css';

export default function Popup({
	displayNext,
	displayPrev,
	popupIsOpen,
	popupSlide,
	popupSlides,
	closePopup,
	featuresArray,
	featuresDisplay,
	closeIcon,
	popupTitle,
	popupSubtitle,
	popupSpan,
}) {
	return (
		<div className={`popup ${popupIsOpen ? 'popup_visible' : ''}`}>
			<PopupSliderNav
				displayNext={displayNext}
				displayPrev={displayPrev}
				currentSlide={popupSlide}
				slidesArray={popupSlides}
			/>
			<img
				className="popup__close-btn"
				src={closeIcon}
				alt="Close button"
				onClick={closePopup}
			/>
			<p className="popup__subtitle">{popupTitle}</p>
			<h2 className="popup__title">
				{popupSubtitle}
				<span className="popup__span">{popupSpan}</span>
			</h2>

			<ul className="popup__features">
				<TransitionGroup>
					{featuresArray
						.filter(
							(_, index) =>
								index > (popupSlide - 1) * featuresDisplay - 1 &&
								index < popupSlide * featuresDisplay
						)
						.map((feature) => (
							<CSSTransition
								key={feature.id}
								timeout={500}
								classNames="popup__feature"
							>
								<li className="popup__feature">
									<p className="popup__feature-number">{`0${feature.id}`}</p>
									<p className="popup__feature-text">{feature.text}</p>
								</li>
							</CSSTransition>
						))}
				</TransitionGroup>
			</ul>
		</div>
	);
}
