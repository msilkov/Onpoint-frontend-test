import React, { useState, useEffect } from 'react';
import { textSlideImages } from '../../utils/constants';
import './TextSlide.css';

export default function TextSlide({ slideIndex }) {
	const [isAnimated, setIsAnimated] = useState(false);

	useEffect(() => {
		if (slideIndex === 1) {
			setIsAnimated(true);
		} else {
			setIsAnimated(false);
		}
	}, [slideIndex]);

	return (
		<section className="text-slide">
			<div className="text-slide__background" />
			<h2 className="text-slide__title">
				Текст
				<br />
				сообщения
			</h2>
			<div className="text-slide__wrapper">
				<p className="text-slide__text">
					<span className="text-slide__text text-slide__text_type_bold">
						Lorem, ipsum dolor sit amet&nbsp;
					</span>
					consectetur adipisicing elit. Blanditiis voluptatum veniam distinctio
					a aperiam velit molestias sint dolores assumenda in, facilis sapiente
					mollitia alias, animi neque illo? Officia, quibusdam ex! Lorem ipsum
					dolor sit amet, consectetur adipisicing elit. Omnis atque blanditiis
					optio mollitia cumque repudiandae quis iusto amet, eos cum facilis
					doloribus beatae ipsa nostrum obcaecati, quae fuga. Quam, molestias.
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi atque,
					necessitatibus itaque beatae repellendus nesciunt laborum perferendis
					mollitia voluptatem magni reprehenderit facere, aut eos quaerat.
					Temporibus commodi perspiciatis delectus porro! Blanditiis voluptatum
					veniam distinctio a aperiam velit molestias sint dolores assumenda in,
					facilis sapiente mollitia alias, animi neque illo? Officia, quibusdam
					ex! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
					atque blanditiis optio mollitia cumque repudiandae quis iusto amet,
					eos cum facilis doloribus beatae ipsa nostrum obcaecati, quae fuga.
					Quam, molestias. Lorem ipsum dolor sit amet consectetur, adipisicing
					elit. Quasi atque, necessitatibus itaque beatae repellendus nesciunt
					laborum perferendis mollitia voluptatem magni reprehenderit facere,
					aut eos quaerat. Temporibus commodi perspiciatis delectus
					porro!dolores assumenda in, facilis sapiente mollitia alias, animi
					neque illo? Officia, quibusdam ex! Lorem ipsum dolor sit amet,
					consectetur adipisicing elit. Omnis atque blanditiis optio mollitia
					cumque repudiandae quis iusto amet, eos cum facilis doloribus beatae
					ipsa nostrum obcaecati, quae fuga. Quam, molestias. Lorem ipsum dolor
					sit amet consectetur, adipisicing elit. Quasi atque, necessitatibus
					itaque beatae repellendus nesciunt laborum perferendis mollitia
					voluptatem magni reprehenderit facere, aut eos quaerat. Temporibus
					commodi perspiciatis delectus porro!ur adipisicing elit. Omnis atque
					blanditiis optio mollitia cumque repudiandae quis iusto amet, eos cum
					facilis doloribus beatae ipsa nostrum obcaecati, quae fuga. Quam,
					molestias. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Quasi atque, necessitatibus itaque beatae repellendus nesciunt laborum
					perferendis mollitia voluptatem magni reprehenderit facere, aut eos
					quaerat. Temporibus commodi perspiciatis delectus porro!dolores
					assumenda in, facilis sapiente mollitia alias, animi neque illo?
					Officia, quibusdam ex! Lorem ipsum dolor sit amet, consectetur
					adipisicing elit. Omnis atque blanditiis optio mollitia cumque
					repudiandae quis iusto amet, eos cum facilis doloribus beatae ipsa
					nostrum obcaecati, quae fuga. Quam, molestias. Lorem ipsum dolor sit
					amet consectetur, adipisicing elit. Quasi atque, necessitatibus itaque
					beatae repellendus nesciunt laborum perferendis mollitia voluptatem
					magni reprehenderit facere, aut eos quaerat. Temporibus commodi
					perspiciatis delectus porro!
				</p>
			</div>
			{textSlideImages.map((image) => (
				<img
					className={`text-slide__image text-slide__image_type_sperm-${
						image.id
					} ${isAnimated ? 'start-animation' : 'stop-animation'}`}
					key={image.id}
					src={image.img}
					alt="Sperm"
				/>
			))}
		</section>
	);
}
