import React from 'react'
import './HeroProduct.css'
import Image from 'next/image'
import img from '../../../public/assets/watch1.jpg'



export default function HeroProduct() {
  return (
    <>
    <div className='Hero-container'>
    <div className='Hero-container-left'>
        <h1>Watch of Choice</h1>
        <p>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
        <button className='w-[275px] h-[64px] bg-red-600'>BUY NOW</button>
    </div>
    <div className='Hero-container-right'>
    <Image
      src={img}
      width={500}
      height={500}
      alt="Picture of the watch"
    />
    </div>
    </div>
    </>
  )
}
