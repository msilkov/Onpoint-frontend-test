import React, { useState, useEffect } from 'react';
import './Carousel.css';

export default function Carousel({
	children,
	slideIndex = 0,
	changeSlideIndex,
}) {
	const [sliderLength, setSliderLength] = useState(children.length);
	const [startPosition, setStartPosition] = useState(null);

	useEffect(() => {
		setSliderLength(children.length);
	}, [children]);

	const navToNextSlide = () => {
		if (slideIndex < sliderLength - 1) {
			changeSlideIndex((prevState) => prevState + 1);
		}
	};

	const navToPrevSlide = () => {
		if (slideIndex > 0) {
			changeSlideIndex((prevState) => prevState - 1);
		}
	};

	const handleStartMove = (e) => {
		setStartPosition(
			e.touches === undefined ? e.clientX : e.touches[0].clientX
		);
	};

	const handleEndMove = (e) => {
		if (startPosition === null) return;

		const currentPosition =
			e.touches === undefined ? e.clientX : e.touches[0].clientX;
		const differencePos = startPosition - currentPosition;

		if (differencePos > 5) {
			navToNextSlide();
		} else if (differencePos < -1) {
			navToPrevSlide();
		}

		setStartPosition(null);
	};

	return (
		<div className="carousel">
			<div
				className="carousel__window"
				onTouchStart={handleStartMove}
				onTouchMove={handleEndMove}
				onMouseDown={handleStartMove}
				onMouseUp={handleEndMove}
			>
				<div
					className="carousel__content"
					style={{ transform: `translateX(-${slideIndex * 100}%)` }}
				>
					{children.map((child, index) => (
						<div key={index} className="carousel__content-item">
							{child}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
