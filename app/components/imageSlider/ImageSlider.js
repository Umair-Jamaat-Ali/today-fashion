'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick'; // Import the Slider component from react-slick
import 'slick-carousel/slick/slick.css'; // Import slick carousel styles
import 'slick-carousel/slick/slick-theme.css'; // Import slick carousel theme styles

const ImageSlider = ({ slideImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    dots: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
  };

  const showSlide = (index) => {
    if (index < 0) {
      setCurrentIndex(slideImages.length - 1);
    } else if (index >= slideImages.length) {
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
      <Slider {...settings}> {/* Use the Slider component and spread the settings */}
        {slideImages.map((image, index) => (
          <div key={index} className="slide flex">
            <Image src={image.src} 
            className="object-cover w-full h-full"
            alt={image.alt} width={image.width} height={image.height} />
          </div>
        ))}
      </Slider>

      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;
