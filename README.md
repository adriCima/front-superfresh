# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


ara mostrar la información de los elementos capturados en el componente PreviewCart, puedes realizar los siguientes pasos:

Recuperar la información del carrito en PreviewCart:

Puedes pasar el carrito como prop al componente PreviewCart y luego iterar sobre él para mostrar la información de cada producto. Asegúrate de recibir la prop correctamente y realizar el mapeo en el componente PreviewCart:

jsx
## Copy code
import React from 'react';

export function PreviewCart({ cart }) {
  return (
    <>
      <article className="bg-white w-2/3 md:w-1/3 h-screen flex flex-col gap-8 items-start absolute top-0 left-0 z-20 py-16 px-8">
        <div className="flex gap-4 items-center border-b-2 border-blue-950 w-full pb-2">
          {/* ... el resto del código */}
        </div>
        {cart.map((product) => (
          <div key={product.id} className="flex flex-row items-center justify-between w-full border-b-[1px] border-blue-950 pb-2 px-4">
            <div className="font-semibold">
              <h2>{product.name} <span className='ml-4 text-gray-500'>{product.description}</span></h2>
              <div className="detalle flex gap-4">
                <h3>{product.quantity}<span className='text-gray-500 ml-4'>x</span></h3>
                <h3 className='text-green-700'><span> Bs. </span>{product.buy_price}</h3>
              </div>
            </div>
            <div className="w-10 h-10 border-[1px] border-gray-700 flex items-center rounded-md overflow-hidden">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="accion">
              <button>  <TrashIcon className="h-8 w-8 text-slate-300 hover:text-red-300"/> </button>
            </div>
          </div>
        ))}
        {/* ... el resto del código */}
      </article>
    </>
  );
}
Asegúrate de ajustar las propiedades (name, description, quantity, buy_price, image, etc.) según la estructura de tu objeto de producto.

Calcular el subtotal:

Para calcular el subtotal, puedes utilizar el método reduce en el array del carrito:

jsx
## Copy code
const subtotal = cart.reduce((acc, product) => acc + (product.quantity * product.buy_price), 0);
Luego, puedes mostrar el subtotal en el componente PreviewCart.

Mostrar los botones "Ver Carrito" y "Finalizar Compra":

Los botones "Ver Carrito" y "Finalizar Compra" ya están en tu código. Asegúrate de que estén en el lugar correcto y funcionando según lo esperado.

Recuerda pasar el estado del carrito como prop al componente PreviewCart al utilizarlo en tu aplicación principal. Por ejemplo:

jsx
## Copy code
// En tu componente principal
<PreviewCart cart={cart} />
Con estos ajustes, deberías poder mostrar la información del carrito en el componente PreviewCart.


### ACUMULAR

Si deseas acumular la cantidad de productos del mismo tipo en lugar de repetirlos en el carrito, puedes modificar el manejo del carrito para agrupar productos por su identificador único (ID). Aquí tienes una guía sobre cómo hacerlo:

Actualizar la lógica de addToCart en App:

Modifica la función addToCart para verificar si el producto ya está en el carrito. Si ya está presente, aumenta la cantidad; de lo contrario, agrégalo como un nuevo elemento al carrito:

jsx
# Copy code
export default function App() {
  // ... el resto del código

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      // El producto ya está en el carrito, aumenta la cantidad
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else {
      // El producto no está en el carrito, agrégalo
      const newCart = [...cart, { ...product, quantity: 1 }];
      setCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));
    }
  };

  // ... el resto del código
}
En este código, se utiliza find para buscar el producto en el carrito por su ID. Si se encuentra, se actualiza la cantidad; de lo contrario, se agrega como un nuevo elemento.

Modificar el componente PreviewCart:

Ajusta el mapeo del carrito en el componente PreviewCart para reflejar el nuevo formato de los productos en el carrito:

jsx
Copy code
export function PreviewCart({ cart }) {
  return (
    <>
      <article className="bg-white w-2/3 md:w-1/3 h-screen flex flex-col gap-8 items-start absolute top-0 left-0 z-20 py-16 px-8">
        <div className="flex gap-4 items-center border-b-2 border-blue-950 w-full pb-2">
          {/* ... el resto del código */}
        </div>
        {cart.map((product) => (
          <div key={product.id} className="flex flex-row items-center justify-between w-full border-b-[1px] border-blue-950 pb-2 px-4">
            <div className="font-semibold">
              <h2>{product.name} <span className='ml-4 text-gray-500'>{product.description}</span></h2>
              <div className="detalle flex gap-4">
                <h3>{product.quantity}<span className='text-gray-500 ml-4'>x</span></h3>
                <h3 className='text-green-700'><span> Bs. </span>{product.buy_price}</h3>
              </div>
            </div>
            <div className="w-10 h-10 border-[1px] border-gray-700 flex items-center rounded-md overflow-hidden">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="accion">
              <button>  <TrashIcon className="h-8 w-8 text-slate-300 hover:text-red-300"/> </button>
            </div>
          </div>
        ))}
        {/* ... el resto del código */}
      </article>
    </>
  );
}
Ahora, cada producto en el carrito tiene su cantidad acumulada y se representa en el mapeo.

