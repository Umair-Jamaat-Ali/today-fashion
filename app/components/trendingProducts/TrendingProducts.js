import React from 'react'
import Image from 'next/image'
import img1 from '../../../public/assets/shirt1.png'
import img2 from '../../../public/assets/trending2.jpg'
import img3 from '../../../public/assets/trending3.jpg'
import img4 from '../../../public/assets/trending1.jpg'
import img5 from '../../../public/assets/kid1.jpg'
import img6 from '../../../public/assets/men1.jpg'
import img7 from '../../../public/assets/women1.jpg'
import ImageBarList from '../barList/Barlist'

export default function TrendingProducts({title}) {

  const imageArray = [
    {src:img1, alt:"tshirt", width:"500px", height:"500px", productName:"Black Men T-Shirt", productPrice:"$20", productColor:"Black"},
    {src:img2, alt:"tshirt", width:"500px", height:"500px", productName:"Baby Girl Dress", productPrice:"$30", productColor:"Black"},
    {src:img3, alt:"tshirt", width:"500px", height:"500px", productName:"Hand Bag", productPrice:"$57", productColor:"Wheat"},
    {src:img4, alt:"tshirt", width:"500px", height:"500px", productName:"Gift Box", productPrice:"$124", productColor:"Multiple"},
    {src:img5, alt:"tshirt", width:"500px", height:"500px", productName:"Gift Box", productPrice:"$124", productColor:"Multiple"},
    {src:img6, alt:"tshirt", width:"500px", height:"500px", productName:"Gift Box", productPrice:"$124", productColor:"Multiple"},
    {src:img7, alt:"tshirt", width:"500px", height:"500px", productName:"Gift Box", productPrice:"$124", productColor:"Multiple"}
  ];

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className='flex justify-between'>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h2>
            </div>
          </div>
          <div className="mt-6 grid border border-slate-400 grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <ImageBarList imageArray={imageArray}/>
           {/* {imageArray.map((image,index)=>(
            <div key={index} className="group relative">
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
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0"></span>
                      {image.productName}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{image.productColor}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{image.productPrice}</p>
              </div>
            </div>
))} */}
          </div>
        </div>
      </div>
    </>
  )
}
