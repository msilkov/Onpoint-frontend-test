import React, { memo } from 'react';

import bacteria from '../../images/bakti-1.png';
import bacteriaSpike from '../../images/bakti-2.png';
import bacteriaLarge from '../../images/bakti-3.png';
import sperm from '../../images/pink-sperm-1.png';
import arrowRight from '../../images/icons/arrow-right-icon.svg';

import './TitleSlide.css';

import Button from '../Button/Button';

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
				<img className="title-slide__sperm" src={sperm} alt="Pink sperm" />
				<Button
					handleClick={navToSecondSlide}
					isAbsolute
					icon={arrowRight}
					text={'Что дальше?'}
				></Button>
			</div>
			<img
				className="title-slide__bacteria title-slide__bacteria_type_bottom"
				src={bacteria}
				alt="Blue bacteria"
			/>
			<img
				className="title-slide__bacteria title-slide__bacteria_type_top"
				src={bacteria}
				alt="Blue bacteria"
			/>
			<img
				className="title-slide__bacteria-spike"
				src={bacteriaSpike}
				alt="Bacteria with spikes"
			/>
			<img
				className="title-slide__bacteria-large"
				src={bacteriaLarge}
				alt="Large bacteria"
			/>
		</section>
	);
}
export default memo(TitleSlide);
