# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

tengo el objeto cart que trae cuatro items



ara lograr eso, necesitas modificar el componente PreviewCart para agrupar y sumar el total por producto antes de renderizar. A continuación, te proporciono una posible implementación para modificar el componente PreviewCart:

# COMPONENTE

import { ShoppingCartIcon, TrashIcon } from '@heroicons/react/24/solid';
import { ShoppingBagIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid';

export function PreviewCart({ cart }) {
  // Función para agrupar y sumar productos por id
  const groupAndSumProducts = (cart) => {
    return cart.reduce((accumulator, product) => {
      const existingProductIndex = accumulator.findIndex((item) => item.id === product.id);

      if (existingProductIndex !== -1) {
        // El producto ya existe en la agrupación, actualiza cantidad y total
        accumulator[existingProductIndex].quantity += product.quantity;
        accumulator[existingProductIndex].total += product.subtotal;
      } else {
        // El producto no existe en la agrupación, agrégalo
        accumulator.push({ ...product });
      }

      return accumulator;
    }, []);
  };

  const groupedCart = groupAndSumProducts(cart);

  return (
    <>
      <article className="bg-blue-100 w-2/3 md:w-2/3 lg:w-1/3 h-screen flex flex-col gap-8 items-start absolute top-0 left-0 z-20 py-16 px-8">
        <div className="flex gap-4 items-center border-b-2 border-blue-950 w-full pb-2">
          <ShoppingCartIcon className="h-16 w-16 text-blue-700 rotate-12" />
          <h3 className="text-2xl">
            <span className="font-bold  mr-4 ">{cart.length}</span> Producto(s){" "}
          </h3>
        </div>

        {groupedCart.map((product) => (
          <div
            key={product.id}
            className="w-full flex gap-4 items-center justify-evenly border-b-[1px] border-blue-950 pb-2"
          >
            <div className="flex items-center  gap-2 w-40">
              <div className="hidden w-10 h-10 border-[1px] border-gray-700 md:flex items-center rounded-md overflow-hidden">
                <img src={product.image} alt={product.name} />
              </div>
              <h2 className="font-semibold">
                {product.category} <span className="ml-4 text-gray-500"></span>
              </h2>
            </div>

            <div className="flex items-center justify-evenly bg-slate-200 rounded-xl py-1">
              <button>
                <MinusCircleIcon className="h-6 w-6 text-gray-400 hover:text-red-700" />
              </button>
              <h3 className="text-lg font-bold bg-white py-1 px-4 rounded-md">{product.quantity}</h3>
              <button>
                <PlusCircleIcon className="h-6 w-6 text-gray-400 hover:text-green-700" />
              </button>
            </div>

            <h3 className="text-green-700">
              <span> Bs. </span> {product.total}
            </h3>

            <div className="accion">
              <button>
                {" "}
                <TrashIcon className="h-8 w-8 text-slate-300 hover:text-red-300" />{" "}
              </button>
            </div>
          </div>
        ))}

        <div className="w-full flex items-center justify-between px-4 font-bold text-xl pb-2">
          <h3>Subtotal</h3>
          <h3 className="text-green-700">
            <span>Bs. </span>
            {groupedCart.reduce((subtotal, product) => subtotal + product.total, 0)}
          </h3>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <a href="market/carrito">
            <button className="bg-gray-200 rounded-md px-2 py-2 w-56 flex items-center gap-2 hover:bg-gray-300">
              <ShoppingBagIcon className="h-8 w-8 text-green-700" /> Ver Carrito
            </button>
          </a>
          <a href="market/checkout">
            <button className="bg-gray-200 rounded-md px-2 py-2 w-56 flex items-center gap-2 hover:bg-gray-300">
              <CurrencyDollarIcon className="h-8 w-8 text-green-700" />Finalizar Compra
            </button>
          </a>
        </div>
      </article>
    </>
  );
}
