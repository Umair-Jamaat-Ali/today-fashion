'use client'
import Link from 'next/link';
import React from 'react'
import GoTopButton from '../../animation/GoTopButton.json';
import Lottie from 'lottie-react';


export default function GoTop() {
  return (
    <div>
        <div className=' w-[70px] h-[70px] sticky bottom-10 right-6 cursor-pointer'>

    <Link href="#" className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <Lottie animationData={GoTopButton} />
    </Link>
  </div>
  </div>
  )
}
