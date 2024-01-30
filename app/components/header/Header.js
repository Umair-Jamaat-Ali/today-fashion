
import React from 'react';
import Button from '../button/Button';
import NavBar from '../navBar/NavBar';
import img1 from '../../../public/assets/home-bg.jpg';
import img2 from '../../../public/assets/men1.jpg';
import img3 from '../../../public/assets/men2.jpg';
import ImageSlider from '../imageSlider/ImageSlider';

const Header = ({ title, para }) => {
  const slideImages = [
    {
      src: img1, alt: 'tshirt', width: '100%', height: '100%', 
    }
    ,
    {
      src: img2, alt: 'tshirt', width: '100%', height: '100%', 
    }
    ,
    {
      src: img3, alt: 'tshirt', width: '100%', height: '100%', 
    }
  ];

  return (
    <>
      <NavBar />
      <div className="relative isolate overflow-hidden bg-gray-900">
        <ImageSlider slideImages={slideImages}
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start px-10 text-white">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-amber-900 pl-4 sm:text-6xl">{title}</h2>
            <p className="mt-6 text-lg leading-8 text-amber-500">{para}</p>
          </div>
          <div className='ml-[40%] mt-6'>
            <Button title="SHOP NOW" />
           </div>
        </div>
      </div>
    </>
  );
};

export default Header;
