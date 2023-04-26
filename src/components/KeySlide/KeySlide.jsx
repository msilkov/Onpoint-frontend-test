import React, { useState } from 'react';
import {
	keySlideImages, keySlideBubbles,
	ITEMS_TO_DISPLAY,
	featuresArray,
} from '../../utils/constants';
import Button from '../Button/Button';
import Popup from '../Popup/Popup';
import './KeySlide.css';

export default function KeySlide() {
	const [popupSlide, setpopupSlide] = useState(1);
	const [popupIsOpen, setpopupIsOpen] = useState(false);
	const popupSlides = [];
	const getTotalSlides = (totalItems, limit) => Math.ceil(totalItems / limit);
	const popupSlidesCount = getTotalSlides(featuresArray.length, ITEMS_TO_DISPLAY);

	for (let i = 0; i < popupSlidesCount; i += 1) {
		popupSlides.push(i + 1);
	}

	const displayNextPopupSlide = () => {
		if (featuresArray.length > popupSlide * ITEMS_TO_DISPLAY) {
			setpopupSlide((prevState) => prevState + 1);
		}
	};

	const displayPrevPopupSlide = () => {
		if (popupSlide !== 1) {
			setpopupSlide((prevState) => prevState - 1);
		}
	};

	const openPopup = () => setpopupIsOpen(true);
	const closePopup = () => setpopupIsOpen(false);

	return (
		<section className="key-slide">
			<div className="key-slide__content">

				<p className="key-slide__subtitle">Ключевое сообщение</p>
				<h2 className="key-slide__title">
					Brend<span className='key-slide__span'>xy</span>
				</h2>


				<div className="key-slide__layout">

					<div className="key-slide__item key-slide__item_type_streched">
						<p className="key-slide__item-text">
							Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus
							vestibulum lorem sed risus ultricies
						</p>
						<img className="key-slide__item-image key-slide__item-image_type_plate" src={keySlideImages.plateIcon} alt="Plate icon" />
					</div>

					<div className="key-slide__items-column">

						<div className="key-slide__item">
							<p className="key-slide__item-text">A arcu cursus vitae</p>
							<img
								className="key-slide__item-image key-slide__item-image_type_calendar"
								src={keySlideImages.calendarIcon}
								alt="Calendar icon"
							/>
						</div>

						<Button
							handleClick={openPopup}
							icon={keySlideImages.plusIcon}
							text={'Подробнее'}
						></Button>
					</div>
				</div>
				<Popup
					displayNext={displayNextPopupSlide}
					displayPrev={displayPrevPopupSlide}
					popupIsOpen={popupIsOpen}
					popupSlide={popupSlide}
					popupSlides={popupSlides}
					closePopup={closePopup}
          featuresArray={featuresArray}
          featuresDisplay={ITEMS_TO_DISPLAY}
          closeIcon={keySlideImages.closeIcon}
          popupTitle={'Преимущества'}
  popupSubtitle={'Brend'}
  popupSpan={'xy'}
				/>
				<img className="key-slide__bottle" src={keySlideImages.bottleImg} alt="Bottle" />
				{keySlideBubbles.map((image) => (
					<img
						className={`key-slide__bubble key-slide__bubble_type_${image.id}`}
						key={image.id}
						src={image.img}
						alt="Bubble icon"
					/>
				))}
			</div>

			<div
				className={`key-slide__overlay ${
					popupIsOpen ? 'key-slide__overlay_type_visible' : ''
				}`}
			></div>
		</section>
	);
}
