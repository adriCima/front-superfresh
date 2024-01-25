# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

tengo el objeto cart que trae cuatro items

Sí, entiendo lo que estás buscando. Para implementar la funcionalidad de disminuir y aumentar la cantidad de productos en el carrito, así como actualizar automáticamente el subtotal, necesitarás realizar algunas modificaciones.

Primero, en el componente PreviewCart, podrías crear funciones para manejar la disminución y aumento de la cantidad. También, estas funciones deberían actualizar el carrito y, por lo tanto, el localStorage y el subtotal. Aquí hay un ejemplo de cómo podrías hacerlo:

jsx
#  Copy code
// En el componente PreviewCart

const decreaseQuantity = (productId) => {
  const updatedCart = cart.map((product) => {
    if (product.id === productId && product.quantity > 1) {
      product.quantity -= 1;
      product.total -= product.sale_price;
    }
    return product;
  });

  updateCart(updatedCart);
};

const increaseQuantity = (productId) => {
  const updatedCart = cart.map((product) => {
    if (product.id === productId) {
      product.quantity += 1;
      product.total += product.sale_price;
    }
    return product;
  });

  updateCart(updatedCart);
};

// Función para actualizar el carrito y el subtotal
const updateCart = (updatedCart) => {
  const updatedSubtotal = updatedCart.reduce((total, product) => {
    return total + product.total;
  }, 0);

  setCart(updatedCart);
  setSubtotal(updatedSubtotal);
  localStorage.setItem('cart', JSON.stringify(updatedCart));
};
Luego, en el mapeo de los productos en el return del componente PreviewCart, podrías utilizar estas funciones:

jsx
Copy code
{cart.map((product) => (
  <div key={product.id} className="w-full flex gap-4 items-center justify-evenly border-b-[1px] border-blue-950 pb-2">
    {/* ... Resto del contenido */}
    <div className='flex items-center justify-evenly bg-slate-200 rounded-xl py-1'>
      <button onClick={() => decreaseQuantity(product.id)}><MinusCircleIcon className="h-6 w-6 text-gray-400 hover:text-red-700"/></button>                                         
      <h3 className='text-lg font-bold bg-white py-1 px-4 rounded-md'>{product.quantity}</h3>
      <button onClick={() => increaseQuantity(product.id)}><PlusCircleIcon className="h-6 w-6 text-gray-400 hover:text-green-700"/></button>
    </div>
    {/* ... Resto del contenido */}
  </div>
))}
Esto debería permitirte disminuir y aumentar la cantidad de productos, y se reflejará automáticamente en el subtotal. Asegúrate de ajustar estas funciones según la estructura de tu estado y datos. ¡Espero que te sea de ayuda!