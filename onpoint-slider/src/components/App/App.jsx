import React, { useState, useCallback } from 'react';

import Carousel from '../Carousel/Carousel'

import './App.css';
import TitleSlide from '../TitleSlide/TitleSlide';
import TextSlide from '../TextSlide/TextSlide';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navToSecondSlide = useCallback(() => setCurrentIndex(1), []);
  

  return (<>
    <Carousel slideIndex={currentIndex} changeSlideIndex={setCurrentIndex}>
      <TitleSlide navToSecondSlide={navToSecondSlide}/>
      <TextSlide slideIndex={currentIndex}/>
      <div style={{ backgroundColor: '#f00' }}>3</div>
  
    </Carousel>
  </>);
};


