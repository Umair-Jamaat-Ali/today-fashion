import Header from './components/header/Header'
import TrendingProducts from './components/trendingProducts/TrendingProducts'
import bgImg from '../public/assets/home-bg.jpg'
import BestCollections from './components/bestCollection/BestCollection'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import Footer from './components/footer/Footer'
import Comments from './components/comment/Comments'




export default async function Home() {

  const userComments = [
    {comment:""}
  ]
  
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
      <Comments/>
      <Footer/>
    </div>
    </>
  )
}
