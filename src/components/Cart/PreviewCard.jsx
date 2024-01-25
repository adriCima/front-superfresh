'use client'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { TrashIcon } from '@heroicons/react/24/solid' 
import { ShoppingBagIcon } from '@heroicons/react/24/solid' 
import { CurrencyDollarIcon } from '@heroicons/react/24/solid' 


export function PreviewCart() {

    return (
        <>                   
            <article className="bg-white w-2/3 md:w-1/3 h-screen flex flex-col gap-8 items-start absolute top-0 left-0 z-20 py-16 px-8">
                <div className="flex gap-4 items-center border-b-2 border-blue-950 w-full pb-2">
                    <ShoppingCartIcon className="h-16 w-16 text-blue-700 rotate-12"/>
                    <h3 className='text-2xl'><span className='font-bold  mr-4 '> 1 </span> Producto(s) </h3>
                </div>
                <div className="flex flex-row items-center justify-between w-full border-b-[1px] border-blue-950 pb-2 px-4">
                <div className="font-semibold">
                    <h2 >Papa roja <span className='ml-4 text-gray-500'>x kilo</span></h2>
                    <div className="detalle flex gap-4">
                        <h3>1<span className='text-gray-500 ml-4'>x</span></h3>
                        <h3 className='text-green-700'><span> Bs. </span> 2.80</h3> 
                    </div>
                </div>
                <div className="w-10 h-10 border-[1px] border-gray-700 flex items-center rounded-md overflow-hidden">
                        <img src="/img/products/papa roja.jpg" alt="papa roja" />
                </div>               
                <div className="accion">
                        <button>  <TrashIcon className="h-8 w-8 text-slate-300 hover:text-red-300"/> </button>
                </div>
                </div>
                <div className="w-full flex items-center justify-between px-4 font-bold text-xl pb-2">
                    <h3>Subtotal</h3>
                    <h3 className='text-green-700'><span>Bs. </span>2.80</h3>
                </div>
                <div className=" flex flex-col gap-4 w-full">
                    <a 
                        href='market/carrito'
                    >
                        <button className='bg-gray-200 rounded-md px-2 py-2 w-56 flex items-center  gap-2 hover:bg-gray-300'><ShoppingBagIcon className="h-8 w-8 text-green-700"/> Ver Carrito</button>
                    </a>
                    <a
                        href='market/checkout'
                    >
                        <button className='bg-gray-200 rounded-md px-2 py-2 w-56 flex items-center  gap-2 hover:bg-gray-300'><CurrencyDollarIcon className="h-8 w-8 text-green-700"/>Finalizar Compra</button>
                    </a>
                </div>
            </article>
                  
            
        </>
    )
}

