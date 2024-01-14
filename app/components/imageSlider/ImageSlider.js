'use client'
import Image from 'next/image';
import React, { useState } from 'react';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showSlide = (index) => {
    if (index < 0) {
      setCurrentIndex(images.length - 1);
    } else if (index >= images.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(index);
    }
  };

  const prevSlide = () => {
    showSlide(currentIndex - 1);
  };

  const nextSlide = () => {
    showSlide(currentIndex + 1);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        {images.map((image, index) => (
          <div key={index} className="slide flex">
            <Image src={image.src} alt={image.alt} width={image.width} height={image.height} />
          </div>
        ))}
      </div>

      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default ImageSlider;
