import React, { useState, useCallback } from 'react';

import Carousel from '../Carousel/Carousel'

import './App.css';
import TitleSlide from '../TitleSlide/TitleSlide';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navToSecondSlide = useCallback(() => setCurrentIndex(1), []);
  

  return (<>
    <Carousel slideIndex={currentIndex} changeSlideIndex={setCurrentIndex}>
      <TitleSlide navToSecondSlide={navToSecondSlide}/>
      <div style={{ backgroundColor: '#f00' }}>2</div>
  
      <div>3</div>
    </Carousel>
  </>);
};


