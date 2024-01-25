import TopBar from './components/top/topbar.jsx'
import NavBar from './components/top/NavBar.jsx'
import HeroSlide from './components/hero/HeroSlide.jsx'
import SlideCatCircle from './components/category/SlideCatCircle.jsx'
import SlideOfertProducts from './components/product/SlideOfertProduct.jsx'
import BannerTripleImg from './components/banners/BannerTripleImg.jsx'
import SlideBetSellerProduct from './components/product/SlideBetSellerProduct.jsx'
import BannerSm from './components/banners/BannerSm.jsx'
import SlideNewProduct from './components/Product/SlideNewProducts.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import iconwhastapp from './assets/svg/whatsappIcon.svg'
import { useState, useEffect } from 'react'

//Funcion para limpiear el localstorage
  const handleClearLocalStorage = () => {
    localStorage.clear();   
  }

  const calculateSubtotal = (cart) => {
    return cart.reduce((subtotal, product) => {
      console.log('sale_price:', product.sale_price);
      console.log('quantity:', product.quantity);
      
      return subtotal + (product.sale_price * product.quantity);
    }, 0);
  };

export default function App() {  
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartWithQuantity = storedCart.map((product) => ({
      ...product,
      quantity: product.quantity || 1, // Asigna un valor predeterminado si quantity es undefined
    }));
    setCart(cartWithQuantity);
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cart, { ...product, quantity: (product.quantity || 0) + 1 }];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const subtotal = calculateSubtotal(cart);
  console.log(subtotal);
  console.log("Valor de cart:", cart);
  return (
    <>
      <TopBar />
      
      <NavBar cart={cart} subtotal={subtotal}/>
      <HeroSlide />
      <SlideCatCircle />  

      <div className="flex flex-col items-center justify-center">
        <h2 className="text-blue-900 font-semibold text-3xl flex items-center justify-center">PRODUCTOS EN OFERTA</h2>
        <div className="border-b-4 border-blue-900 w-36"></div>
      </div> 

      <div className="px-16 py-8">
        <SlideOfertProducts addToCart={addToCart}/> 
      </div>

      <BannerTripleImg />

      <div className="flex flex-col items-center justify-center">
        <h2 className="text-blue-900 font-semibold text-3xl flex items-center justify-center">MAS VENDIDOS</h2>
        <button onClick={handleClearLocalStorage}>
          Limpiar Local Storage
        </button>
        <div className="border-b-4 border-blue-900 w-36"></div>
      </div> 

      <div className="p-16">
        <SlideBetSellerProduct addToCart={addToCart}/>
      </div>

      <BannerSm className=' m-4 md:px-16 md:pb-16 '/>

      <div className="flex flex-col items-center justify-center">
        <h2 className="text-blue-900 font-semibold text-3xl flex items-center justify-center">NUEVOS</h2>
        <div className="border-b-4 border-blue-900 w-36"></div>
        
      </div> 

      <div className="p-16">
        <SlideNewProduct addToCart={addToCart}/>
      </div>

      <Footer />   

      <div className="fixed bottom-12 right-12 z-10">
            <a        
              href='https://bit.ly/3NXBsqn' // link de WhatsApp de SuperFresh  68258778
              target='blank'
            >
              <img 
                className='w-14 h-14'
                src={iconwhastapp}
                alt="SuperFres Facebook" />                 
            </a>
          </div>    
      
    </>
  )
}


