'use client'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import Image from 'next/image';



export default function ImageBarList({imageArray}) {
 
    
    const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
    

  return (
    <div >
      <Slider {...settings}>
      {imageArray.map((image,index)=>(
            <div key={index} className=" relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                  width={image.width}
                  height={image.height}
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
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
      </Slider>
    </div>
  );
};



