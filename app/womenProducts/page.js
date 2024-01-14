import React from 'react'
import Header from '../components/header/Header'
import TrendingProducts from '../components/trendingProducts/TrendingProducts'
import bgimg from '../../public/assets/wbg.jpg'
import img1 from '../../public/assets/women1.jpg'
import img2 from '../../public/assets/women2.jpg'
import img3 from '../../public/assets/women3.jpg'
import img4 from '../../public/assets/women4.jpg'

export default function page() {

  const imageArray = [
    {src:img1, alt:"tshirt", width:"500px", height:"500px", productName:"Red Heel", productPrice:"$240", productColor:"Multiple"},
    {src:img2, alt:"tshirt", width:"500px", height:"500px", productName:"Black Glasses", productPrice:"$30", productColor:"Multiple"},
    {src:img3, alt:"tshirt", width:"500px", height:"500px", productName:"Gift Box", productPrice:"$157", productColor:"Multiple"},
    {src:img4, alt:"tshirt", width:"500px", height:"500px", productName:"Hand Bags & Heels ", productPrice:"$240", productColor:"Multiple"}
  ];

  return (
    <>
      <Header title="Womeᑎ ᖴᗩᔕᕼIOᑎ" image={bgimg}
        para="Elevate your style with timeless classics and modern twists, because a well-dressed man is his own masterpiece."
      />
      <TrendingProducts title="Trending Women Products This Week" imageArray={imageArray} />
    </>
  )
}
