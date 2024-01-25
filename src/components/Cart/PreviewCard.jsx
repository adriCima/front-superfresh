
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { TrashIcon } from '@heroicons/react/24/solid' 
import { ShoppingBagIcon } from '@heroicons/react/24/solid' 
import { CurrencyDollarIcon } from '@heroicons/react/24/solid' 
import { MinusCircleIcon } from '@heroicons/react/24/solid' 
import { PlusCircleIcon } from '@heroicons/react/24/solid' 


export function PreviewCart({cart, subtotal}) {
    console.log(cart);
    return (
        <>  <article className="bg-blue-100 w-2/3 md:w-2/3 lg:w-1/3 flex flex-col gap-8 items-start absolute top-0 left-0 z-20 py-16 px-8 max-h-screen overflow-y-auto">
            {/* <article className="bg-blue-100 w-2/3 md:w-2/3 lg:w-1/3 h-screen flex flex-col gap-8 items-start absolute top-0 left-0 z-20 py-16 px-8"> */}
                <div className="flex gap-4 items-center border-b-2 border-blue-950 w-full pb-2">
                    <ShoppingCartIcon className="h-16 w-16 text-blue-700 rotate-12"/>
                    <h3 className='text-2xl'><span className='font-bold  mr-4 '>{cart.length}</span> Producto(s) </h3>
                </div>
                
                 {cart.map((product) => (
                 
                     <div key={product.id} className="w-full flex gap-4 items-center justify-evenly border-b-[1px] border-blue-950 pb-2">
                        <div className="flex items-center  gap-2 w-40">
                            <div className="hidden w-10 h-10 border-[1px] border-gray-700 md:flex items-center rounded-md overflow-hidden">
                                <img src={product.image} alt={product.name} />
                            </div> 
                            <h2 className='font-semibold'>{product.category}  <span className='ml-4 text-gray-500'></span></h2>                                             
                        </div>
    
                        <div className='flex items-center justify-evenly bg-slate-200 rounded-xl py-1'>
                            <button><MinusCircleIcon className="h-6 w-6 text-gray-400 hover:text-red-700"/></button>                                         
                                <h3 className='text-lg font-bold bg-white py-1 px-4 rounded-md'>1</h3>
                            <button><PlusCircleIcon className="h-6 w-6 text-gray-400 hover:text-green-700"/></button>
                        </div> 
                        
                        <h3 className='text-green-700'><span> Bs. </span> {product.sale_price}</h3> 
    
                        <div className="accion">
                            <button>  <TrashIcon className="h-8 w-8 text-slate-300 hover:text-red-300"/> </button>
                        </div>
                    </div>
                  ))}
               
                    <div className="w-full flex items-center justify-between px-4 font-bold text-xl pb-2">
                        <h3>Subtotal</h3>
                        <h3 className='text-green-700'><span>Bs. </span>{subtotal.toFixed(2)}</h3>
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

