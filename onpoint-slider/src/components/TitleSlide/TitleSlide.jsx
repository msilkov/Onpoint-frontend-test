import React, { memo } from 'react';
import { titleSlideImages } from '../../utils/constants';
import Button from '../Button/Button';
import './TitleSlide.css'

function TitleSlide({ navToSecondSlide }) {
	return (
		<section className="title-slide">
			<p className="title-slide__subtitle">Привет,</p>
			<div className="title-slide__content">
				<h1 className="title-slide__title">
					Это&nbsp;
					<span className="title-slide__span title-slide__span_style_bold">
						не&nbsp;
					</span>
					коммерческое задание
				</h1>
				<img
					className="title-slide__sperm"
					src={titleSlideImages.sperm}
					alt="Pink sperm"
				/>
				<Button
					handleClick={navToSecondSlide}
					isAbsolute
					icon={titleSlideImages.arrowRight}
					text={'Что дальше?'}
				></Button>
			</div>
			<img
				className="title-slide__bacteria title-slide__bacteria_type_bottom"
				src={titleSlideImages.bacteria}
				alt="Blue bacteria"
			/>
			<img
				className="title-slide__bacteria title-slide__bacteria_type_top"
				src={titleSlideImages.bacteria}
				alt="Blue bacteria"
			/>
			<img
				className="title-slide__bacteria-spike"
				src={titleSlideImages.bacteriaSpike}
				alt="Bacteria with spikes"
			/>
			<img
				className="title-slide__bacteria-large"
				src={titleSlideImages.bacteriaLarge}
				alt="Large bacteria"
			/>
		</section>
	);
}
export default memo(TitleSlide);
