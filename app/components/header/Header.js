// import React from 'react';
// import Button from '../button/Button';
// import Image from 'next/image';
// import bgImg from '../../../public/assets/bg2.jpg'
// import NavBar from '../navBar/NavBar';
// import img1 from '../../../public/assets/home-bg.jpg'
// import img2 from '../../../public/assets/bg.png'
// import img3 from '../../../public/assets/bg1.jpg'
// import ImageSlider from '../imageSlider/ImageSlider';


// const Header = ({title, para,image}) => {
  
//   const settings = {
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 2000,
//     dots: true,
//     autoplaySpeed: 3000,
//     cssEase: "linear",
//     infinite: true
// };

//   const slideImages = [
//     {src:img1, alt:"tshirt", width:"500px", height:"500px", productName:"Black Men T-Shirt", productPrice:"$20", productColor:"Black"},
//     {src:img2, alt:"tshirt", width:"500px", height:"500px", productName:"Black Men T-Shirt", productPrice:"$20", productColor:"Black"},
//     {src:img3, alt:"tshirt", width:"500px", height:"500px", productName:"Black Men T-Shirt", productPrice:"$20", productColor:"Black"},

//   ]

//   return (
//     <>
//     <NavBar/>
//     <div className="relative isolate overflow-hidden bg-gray-900  ">
//       {/* <Image
//         src={image}
//         alt=""
//         className="absolute bg-cover inset-0 opacity-50 -z-10 h-full w-full object-cover object-right md:object-center"
//       /> */}
//       <ImageSlider slideImages={slideImages}
//       className="absolute bg-cover inset-0 opacity-50 -z-10 h-full w-full object-cover object-right md:object-center"
//       />
//       {/* <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
//         <div
//           className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
//         //   style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
//         ></div>
//       </div>
//       <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
//         <div
//           className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
//         //   style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
//         ></div>
//       </div> */}
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl lg:mx-0">
//           <h2 className="text-4xl font-bold tracking-tight text-white pl-4 sm:text-6xl">{title}</h2>
//           <p className="mt-6 text-lg leading-8 text-white">{para}</p>
//         </div>
//         <div className='ml-[40%] mt-6'>
//         <Button title="SHOP NOW"/>
//           {/* <button className="max-w-[150] h-[110] bg-amber-500 text-white hover:bg-amber-900 hover:scale-x-105 hover:scale-y-105">SHOP NOW</button> */}
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default Header;


import React from 'react';
import Button from '../button/Button';
import Image from 'next/image';
import NavBar from '../navBar/NavBar';
import img1 from '../../../public/assets/home-bg.jpg';
import img2 from '../../../public/assets/bg.png';
import img3 from '../../../public/assets/bg1.jpg';
import ImageSlider from '../imageSlider/ImageSlider';

const Header = ({ title, para, image }) => {
  const slideImages = [
    { src: img1, alt: 'tshirt', width: '500px', height: '500px', productName: 'Black Men T-Shirt', productPrice: '$20', productColor: 'Black' },
    { src: img2, alt: 'tshirt', width: '500px', height: '500px', productName: 'Black Men T-Shirt', productPrice: '$20', productColor: 'Black' },
    { src: img3, alt: 'tshirt', width: '500px', height: '500px', productName: 'Black Men T-Shirt', productPrice: '$20', productColor: 'Black' },
  ];

  return (
    <>
      <NavBar />
      <div className="relative isolate overflow-hidden bg-gray-900">
      {/* <h2 className="text-4xl font-bold tracking-tight text-white pl-4 sm:text-6xl">{title}</h2>
            <p className="mt-6 text-lg leading-8 text-white">{para}</p> */}
        <ImageSlider slideImages={slideImages}
        className="absolute bg-cover inset-0 opacity-50 -z-10 h-full w-full object-cover object-right md:object-center"
        />

      
        {/* <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white pl-4 sm:text-6xl">{title}</h2>
            <p className="mt-6 text-lg leading-8 text-white">{para}</p>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h2 className="text-2xl font-bold">{slideImages[0].productName}</h2>
            <p className="text-lg">{slideImages[0].productPrice}</p>
            <Button title="SHOP NOW" />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Header;
