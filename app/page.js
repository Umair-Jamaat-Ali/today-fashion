import Header from './components/header/Header'
import TrendingProducts from './components/trendingProducts/TrendingProducts'
import bgImg from '../public/assets/home-bg.jpg'
import img1 from '../public/assets/shirt1.png'
import img2 from '../public/assets/trending2.jpg'
import img3 from '../public/assets/trending3.jpg'
import img4 from '../public/assets/trending1.jpg'
import BestCollections from './components/bestCollection/BestCollection'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import Footer from './components/footer/Footer'




export default async function Home() {

  // const imageArray = [
  //   {src:img1, alt:"tshirt", width:"500px", height:"500px", productName:"Black Men T-Shirt", productPrice:"$20", productColor:"Black"},
  //   {src:img2, alt:"tshirt", width:"500px", height:"500px", productName:"Baby Girl Dress", productPrice:"$30", productColor:"Black"},
  //   {src:img3, alt:"tshirt", width:"500px", height:"500px", productName:"Hand Bag", productPrice:"$57", productColor:"Wheat"},
  //   {src:img4, alt:"tshirt", width:"500px", height:"500px", productName:"Gift Box", productPrice:"$124", productColor:"Multiple"}
  // ];
  
  const user = await getServerSession();
  if (!user) {
    redirect("/login")
  }
  console.log("user",user);

  return (
    <>
    <div>
      <Header title="TOᗪᗩY ᖴᗩᔕᕼIOᑎ"
      para="Fashion is the art of expressing your individuality without saying a word wear your story with pride.In the world of trends be a timeless icon fashion is not just what you wear but how you wear it." image={bgImg}
      
      />
      <TrendingProducts title="Trending This Week" />
      <BestCollections/>
      {/* <ProductDetails/> */}
      <Footer/>
    </div>
    </>
  )
}
