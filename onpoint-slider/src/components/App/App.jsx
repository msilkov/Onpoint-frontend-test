import React, { useState, useCallback } from 'react';

import Carousel from '../Carousel/Carousel';

import TitleSlide from '../TitleSlide/TitleSlide';
import TextSlide from '../TextSlide/TextSlide';
import KeySlide from '../KeySlide/KeySlide';
import NavBar from '../NavBar/NavBar';
import Logo from '../Logo/Logo';
import './App.css';

export default function App() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const navToSecondSlide = useCallback(() => setCurrentIndex(1), []);

	return (
		<div className='app__content'>
			<NavBar />
			<Carousel slideIndex={currentIndex} changeSlideIndex={setCurrentIndex}>
				<TitleSlide navToSecondSlide={navToSecondSlide} />
				<TextSlide slideIndex={currentIndex} />
				<KeySlide />
			</Carousel>
      <Logo/>
		</div>
	);
}
