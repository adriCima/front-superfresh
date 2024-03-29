import TopBar from '../../components/top/topbar.jsx'
import NavBar from '../../components/top/NavBar.jsx'
import HeroSlide from '../../components/hero/HeroSlide.jsx'
import SlideCatCircle from '../../components/category/SlideCatCircle.jsx'
import SlideOfertProducts from '../../components/product/SlideOfertProduct.jsx'
import BannerTripleImg from '../../components/banners/BannerTripleImg.jsx'
import SlideBetSellerProduct from '../../components/product/SlideBetSellerProduct.jsx'
import BannerSm from '../../components/banners/BannerSm.jsx'
import SlideNewProduct from '../../components/Product/SlideNewProducts.jsx'
import { Footer } from '../../components/Footer/Footer.jsx'
import { useState, useEffect } from 'react'
import WhatsAppFloat from '../../components/tools/WhatsAppFloat.jsx'
import AllProducts from '../../components/Product/AllProducts.jsx'


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

export default function Product() {  
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
     
    <AllProducts  />

    <Footer />   

    <WhatsAppFloat />
     
      
    </>
  )
}