import React from 'react'
import './HeroProduct.css'
import Image from 'next/image'
import img from '../../../public/assets/watch1r-.png'



export default function HeroProduct() {
  return (
    <>
    <div className='Hero-container'>
    <div className='Hero-container-left'>
        <h1 className='text-3xl font-extrabold'>Watch of Choice</h1>
        <p>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
        <button className='w-[255px] h-[64px] bg-red-600 text-white hover:bg-red-900 hover:text-black active:bg-amber-600'>BUY NOW</button>
    </div>
    <div className='Hero-container-right'>
    <Image
      src={img}
      width={900}
      height={900}
      alt="Picture of the watch"
    />
    </div>
    </div>
    </>
  )
}
