import React, { useState, useCallback } from 'react';

import Carousel from '../Carousel/Carousel'

import './App.css';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  

  return (<div>
    <Carousel slideIndex={currentIndex} changeSlideIndex={setCurrentIndex}>
      <div style={{ backgroundColor: '#f00' }}>1</div>
      <div>2</div>
      <div>3</div>
    </Carousel>
  </div>);
};


