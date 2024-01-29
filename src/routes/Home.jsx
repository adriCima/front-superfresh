import TopBar from '../components/top/topbar.jsx'
import NavBar from '../components/top/NavBar.jsx'
import HeroSlide from '../components/hero/HeroSlide.jsx'
import SlideCatCircle from '../components/category/SlideCatCircle.jsx'
import SlideOfertProducts from '../components/product/SlideOfertProduct.jsx'
import BannerTripleImg from '../components/banners/BannerTripleImg.jsx'
import SlideBetSellerProduct from '../components/product/SlideBetSellerProduct.jsx'
import BannerSm from '../components/banners/BannerSm.jsx'
import SlideNewProduct from '../components/Product/SlideNewProducts.jsx'
import { Footer } from '../components/Footer/Footer.jsx'
import iconwhastapp from '../assets/svg/whatsappIcon.svg'
import { useState, useEffect } from 'react'


//Funcion para limpiear el localstorage
  const handleClearLocalStorage = () => {
    localStorage.clear();     }

  const calculateSubtotal = (cart) => {
    return cart.reduce((subtotal, product) => {
      console.log('sale_price:', product.sale_price);
      console.log('quantity:', product.quantity);
      
      return subtotal + (product.sale_price * product.quantity);
    }, 0);
  };

export default function Home() {  
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []); // Solo se ejecuta una vez al montar el componente

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      // El producto ya existe en el carrito, actualiza cantidad y subtotal
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      updatedCart[existingProductIndex].subtotal += product.sale_price;
      setCart(updatedCart);
    } else {
      // El producto no existe en el carrito, agrégalo con cantidad y subtotal inicial
      const updatedCart = [...cart, { ...product, quantity: 1, subtotal: product.sale_price }];
      setCart(updatedCart);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const restToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);
  
    if (existingProductIndex !== -1) {
      // El producto ya existe en el carrito, actualiza cantidad y subtotal
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity -= 1;
      updatedCart[existingProductIndex].subtotal -= product.sale_price;
  
      // Verifica si la nueva cantidad es cero
      if (updatedCart[existingProductIndex].quantity === 0) {
        // Filtra los productos del carrito y crea un nuevo carrito sin el producto con cantidad cero
        const newCart = updatedCart.filter((item) => item.quantity > 0);
        setCart(newCart);
      } else {
        // Actualiza el estado del carrito
        setCart(updatedCart);
      }
    } else {
      // El producto no existe en el carrito, agrégalo con cantidad y subtotal inicial
      const updatedCart = [...cart, { ...product, quantity: 1, subtotal: product.sale_price }];
      setCart(updatedCart);
    }
  
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const subtotal = calculateSubtotal(cart);
  console.log(subtotal);
  console.log("Valor de cart:", cart);
  
  return (
    <>
      <TopBar />
      
      <NavBar cart={cart} subtotal={subtotal} addToCart={addToCart} restToCart={restToCart}/>
      <HeroSlide />
      <SlideCatCircle />  

      <div className="flex flex-col items-center justify-center">
        <h2 className="text-blue-900 font-semibold text-3xl flex items-center justify-center">PRODUCTOS EN OFERTA</h2>
        <div className="border-b-4 border-blue-900 w-36"></div>
      </div> 

      <div className="px-16 py-8">
        <SlideOfertProducts addToCart={addToCart} restToCart={restToCart}/> 
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
        <SlideBetSellerProduct  addToCart={addToCart} restToCart={restToCart}/>  
      </div>

      <BannerSm className=' m-4 md:px-16 md:pb-16 '/>

      <div className="flex flex-col items-center justify-center">
        <h2 className="text-blue-900 font-semibold text-3xl flex items-center justify-center">NUEVOS</h2>
        <div className="border-b-4 border-blue-900 w-36"></div>
        
      </div> 

      <div className="p-16">
        <SlideNewProduct  addToCart={addToCart} restToCart={restToCart}/>
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