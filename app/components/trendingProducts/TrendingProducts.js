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
          <div>
            <ImageBarList imageArray={imageArray}/>
          </div>
        </div>
      </div>
    </>
  )
}
