import TopBar from './components/top/topbar.jsx'
import NavBar from './components/top/NavBar.jsx'
import HeroSlide from './components/hero/HeroSlide.jsx'
import SlideCatCircle from './components/category/SlideCatCircle.jsx'
import SlideOfertProducts from './components/product/SlideOfertProduct.jsx'
import BannerTripleImg from './components/banners/BannerTripleImg.jsx'


export default function App() {

  return (
    <>
      <TopBar />
      <NavBar />
      <HeroSlide />
      <SlideCatCircle />        
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-blue-900 font-semibold text-3xl flex items-center justify-center">PRODUCTOS EN OFERTA</h2>
        <div className="border-b-4 border-blue-900 w-36"></div>
      </div> 
      <div className="px-16 py-8">
        {/*    <SlideOfertProducts /> */}
      </div>
      <BannerTripleImg />
    </>
  )
}


