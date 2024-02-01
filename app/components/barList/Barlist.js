'use client'
import React, {useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import Image from 'next/image';


export default function ImageBarList({ imageArray }) {

  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
  };

  // const showSlide = (index) => {
  //   if (index < 0) {
  //     setCurrentIndex(imageArray.length - 1);
  //   } else if (index >= imageArray.length) {
  //     setCurrentIndex(0);
  //   } else {
  //     setCurrentIndex(index);
  //   }
  // };

  // const prevSlide = () => {
  //   showSlide(currentIndex - 1);
  // };

  // const nextSlide = () => {
  //   showSlide(currentIndex + 1);
  // };

  return (
    < >

      <Slider {...settings}>
        {imageArray.map((image, index) => (
          <div key={index} className="group relative flex my-3 justify-between">
            <div className="aspect-h-1 aspect-w-1 w-full  overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <Image
                width={image.width}
                height={image.height}
                src={image.src}
                alt={image.alt}
                className="h-full w-full hover:scale-75 object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <Link href="#">
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    {image.productName}
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{image.productColor}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">{image.productPrice}</p>
            </div>
          </div>
        ))}
        {/* <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button> */}
      </Slider>
      
      
      
    </>
  );
};



