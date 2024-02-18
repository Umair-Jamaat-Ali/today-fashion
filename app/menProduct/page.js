import React from 'react'
import Header from '../components/header/Header'
import bgimg from '../../public/assets/bg2.jpg'
import TrendingProducts from '../components/trendingProducts/TrendingProducts'
import img1 from '../../public/assets/men1.jpg'
import img2 from '../../public/assets/men2.jpg'
import img3 from '../../public/assets/men3.jpg'
import img4 from '../../public/assets/shirt1.png'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import Footer from '../components/footer/Footer'
import HeroProduct from '../components/heroProduct/HeroProduct'

export default async function page() {


    const imageArray = [
        {src:img1, alt:"tshirt", width:"500px", height:"500px", productName:"Men Fragneces", productPrice:"$45", productColor:""},
        {src:img2, alt:"tshirt", width:"500px", height:"500px", productName:"Dress Shirt & Shoes", productPrice:"$130", productColor:"White & Brown"},
        {src:img3, alt:"tshirt", width:"500px", height:"500px", productName:"Watches", productPrice:"$145", productColor:"Multiple"},
        {src:img4, alt:"tshirt", width:"500px", height:"500px", productName:"T-Shirt", productPrice:"$20", productColor:"Black"}
      ];


      const user = await getServerSession();
  if (!user) {
    redirect("/login")
  }
  console.log("user",user);

    return (
        <>
            <Header title="Men ᖴᗩᔕᕼIOᑎ" image={bgimg}
                para="Elevate your style with timeless classics and modern twists, because a well-dressed man is his own masterpiece."
            />
            <TrendingProducts title="Trending Men Products This Week" imageArray={imageArray} />
            <HeroProduct/>
            <Footer/>
        </>
    )
}
