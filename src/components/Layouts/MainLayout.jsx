import TopBar from '../../components/top/topbar.jsx'
import NavBar from '../../components/top/NavBar.jsx'
import { Footer } from '../../components/Footer/Footer.jsx'
import iconwhastapp from '../../assets/svg/whatsappIcon.svg'
import { useState, useEffect } from 'react'
import { calculateSubtotal } from '../../utils/functions.js'

export default function MainLayout({ children} ) {

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

  return (
  
      <>
        <TopBar />
        <NavBar cart={cart} subtotal={subtotal} addToCart={addToCart} restToCart={restToCart} />

        {children}
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