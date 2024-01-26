import TopBar from '../components/top/topbar'
import NavBar from '../components/top/NavBar'
import { Footer } from '../components/Footer/Footer'
import ListCard from '../components/Cart/ListCard'
import { useState, useEffect } from 'react'

export default function Cart(){

    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
    }, []); // Solo se ejecuta una vez al montar el componente

    const calculateSubtotal = (cart) => {
        return cart.reduce((subtotal, product) => {
          console.log('sale_price:', product.sale_price);
          console.log('quantity:', product.quantity);
          
          return subtotal + (product.sale_price * product.quantity);
        }, 0);
    };
    
    const subtotal = calculateSubtotal(cart);

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
 
    return(
        <>
            <TopBar />
            <NavBar cart={cart} subtotal={subtotal} addToCart={addToCart} restToCart={restToCart}/>
            <ListCard cart={cart} subtotal={subtotal} addToCart={addToCart} restToCart={restToCart}/>
            <Footer />
        </>
    )
}



