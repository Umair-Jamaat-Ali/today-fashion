import React from 'react'
import Header from '../components/header/Header'
import bgimg from '../../public/assets/kbg.jpg'
import TrendingProducts from '../components/trendingProducts/TrendingProducts'
import img1 from '../../public/assets/kid1.jpg'
import img2 from '../../public/assets/kid2.jpg'
import img3 from '../../public/assets/kid3.jpg'
import img4 from '../../public/assets/kid4.jpg'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import Footer from '../components/footer/Footer'


export default async function page() {

  const imageArray = [
    {src:img1, alt:"tshirt", width:"500px", height:"500px", productName:"New Born Bady Dress", productPrice:"$20", productColor:"Multiple"},
    {src:img2, alt:"tshirt", width:"500px", height:"500px", productName:"Shoes", productPrice:"$30", productColor:"Multiple"},
    {src:img3, alt:"tshirt", width:"500px", height:"500px", productName:"Baby Shoes", productPrice:"$57", productColor:"Wheat"},
    {src:img4, alt:"tshirt", width:"500px", height:"500px", productName:"Baby Costum", productPrice:"$124", productColor:"Multiple"}
  ];

  const user = await getServerSession();
  if (!user) {
    redirect("/login")
  }
  console.log("user",user);

  return (
    <>
      <Header title="Kids ᖴᗩᔕᕼIOᑎ" image={bgimg}
        para="Elevate your style with timeless classics and modern twists, because a well-dressed man is his own masterpiece."
      />
      <TrendingProducts title="Trending Kids Products This Week" imageArray={imageArray} />
        <Footer/>
    </>
  )
}
