import { ArrowRightIcon } from '@heroicons/react/24/outline'
import {  TrashIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'

import { groupAndSumProducts } from '../../utils/functions'
/* import { CardProduct } from '../product/CardProduct'; */
import ButtonsAgreeDisagree from './buttonsAgreeDisagre';

export default function ListCart({cart, subtotal, addToCart, restToCart}) {

  const groupedCart = groupAndSumProducts(cart)
  console.log(groupedCart);



  return (
    <>
        <article className="bg-white w-full flex flex-col gap-8 items-start  py-16 px-8 mb-16">
            <div className="flex gap-4 items-center border-b-2 border-blue-950 w-full pb-2">
               <p>Mensaje de compra minima</p>
            </div>

            <div className="flex gap-4 w-full">                
                <div className="flex w-2/3 flex-col items-center justify-between pb-2 px-4">

                    <table class="table-auto w-full p-4">
                        <thead className="text-sm text-center  h-9">
                            <tr className=' uppercase border-b-2 border-teal-800 '>
                                <th>Id</th>
                                <th className=' w-9'>Img</th>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th className=' w-44'>Cantidad</th>
                                <th>Subtotal</th>
                                <th>Eliminar</th>
                            </tr> 
                        </thead>

                        <tbody>
                                {
                                    groupedCart.map((product) => (
                                        <tr className='text-center border-b-[1px] border-gray-300 h-14'>
                                            <>
                                                <td>{product.id}</td>
                                                <td>
                                                    <div className="w-10 h-10 border-[1px] border-gray-700 flex items-center rounded-md overflow-hidden">
                                                        <img src={product.image} alt={product.name} />
                                                    </div> 
                                                </td>
                                                <td className='text-left pl-8 font-semibold text-lg'>{product.category}<span className='ml-4 text-gray-700'>x {product.weight}</span></td>
                                                <td> <h3 className='text-teal-900 font-bold text-lg'><span> Bs. </span>{product.sale_price.toFixed(2)}</h3> </td>
                                                <td> 
                                                    <ButtonsAgreeDisagree product={product} addToCart={addToCart} restToCart={restToCart}/>                       
                                                </td>
                                                <td> <h3 className='text-teal-900 font-bold text-lg'><span> Bs. </span> {product.subtotal.toFixed(2)}</h3> </td>
                                                <td>   <button>  <TrashIcon className="h-8 w-8 text-gray-400 hover:text-red-700"/> </button></td>
                                            </>
                            </tr>                        
                                        ))
                                }
                        </tbody>
                    </table>  

                    <div className=" self-start mt-4">
                        <a href='/' >
                            <button className='bg-gray-200 rounded-md px-2 py-2 w-56 flex items-center font-medium gap-2 hover:bg-gray-300'>
                                <ShoppingBagIcon className="h-6 w-6 text-blue-700"/> 
                                Seguir Comprando 
                            </button>
                        </a>  
                      
                    </div>     
               
                </div>

                <div className="flex w-1/3 flex-col gap-8 px-4 pb-2">

                   
                    <div className="flex items-center justify-between px-4 border-b-2 border-gray-400 pb-4">    
                        <h3 className='text-red-800 font-bold text-xl'>Subtotal</h3>
                        <h3 className='text-green-700 font-bold text-xl'><span>Bs. </span>{subtotal.toFixed(2)}</h3>
                    </div>

                        
                   
                    <div className=" self-start mt-4">
                        <a 
                            href='/checkout'
                        >
                            <button className='bg-green-700 rounded-md px-2 py-2 w-60 flex items-center  text-white gap-2 hover:bg-green-600'>  <ArrowRightIcon className='w-8 h-8 text-white'/>  Finalizar Compra </button>
                        </a>   
                    </div>  
                </div> 

            </div>         
        </article>
    </>
  )
}

