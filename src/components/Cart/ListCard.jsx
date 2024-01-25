import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { ArrowPathIcon } from '@heroicons/react/24/solid'
import { TrashIcon } from '@heroicons/react/24/solid' 
import { MinusCircleIcon } from '@heroicons/react/24/solid' 
import { PlusCircleIcon } from '@heroicons/react/24/solid' 

import Link from 'next/link'

export function ListCart() {
  return (
    <>
        <article className="bg-white w-full flex flex-col gap-8 items-start  py-16 px-8">
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
                            <tr className='text-center border-b-[1px] border-gray-300 h-14'>
                                <td>1</td>
                                <td>
                                    <div className="w-10 h-10 border-[1px] border-gray-700 flex items-center rounded-md overflow-hidden">
                                        <img src="/img/products/papa roja.jpg" alt="papa roja" />
                                    </div> 
                                </td>
                                <td className='font-semibold text-lg'>Papa roja <span className='ml-4 text-gray-700'>x kilo</span></td>
                                <td> <h3 className='text-teal-900 font-bold text-lg'><span> Bs. </span> 2.80</h3> </td>
                                <td> 
                                    <div className=' flex  items-center justify-evenly bg-slate-200 rounded-xl py-1'>
                                        <button><MinusCircleIcon className="h-6 w-6 text-gray-400 hover:text-red-700"/></button>                                         
                                        <h3 className='text-lg font-bold bg-white py-1 px-4 rounded-md'>1</h3>
                                        <button><PlusCircleIcon className="h-6 w-6 text-gray-400 hover:text-green-700"/></button>
                                    </div>
                        
                                </td>
                                <td> <h3 className='text-teal-900 font-bold text-lg'><span> Bs. </span> 2.80</h3> </td>
                                <td>   <button>  <TrashIcon className="h-8 w-8 text-gray-400 hover:text-red-700"/> </button></td>
                            </tr>
                            <tr className='text-center border-b-[1px] border-gray-300 h-14'>
                                <td>1</td>
                                <td>
                                    <div className="w-10 h-10 border-[1px] border-gray-700 flex items-center rounded-md overflow-hidden">
                                        <img src="/img/products/papa roja.jpg" alt="papa roja" />
                                    </div> 
                                </td>
                                <td className='font-semibold text-lg'>Papa roja <span className='ml-4 text-gray-700'>x kilo</span></td>
                                <td> <h3 className='text-teal-900 font-bold text-lg'><span> Bs. </span> 2.80</h3> </td>
                                <td> 
                                    <div className=' flex  items-center justify-evenly bg-slate-200 rounded-xl py-1'>
                                        <button><MinusCircleIcon className="h-6 w-6 text-gray-400 hover:text-red-700"/></button>                                         
                                        <h3 className='text-lg font-bold bg-white py-1 px-4 rounded-md'>1</h3>
                                        <button><PlusCircleIcon className="h-6 w-6 text-gray-400 hover:text-green-700"/></button>
                                    </div>
                        
                                </td>
                                <td> <h3 className='text-teal-900 font-bold text-lg'><span> Bs. </span> 2.80</h3> </td>
                                <td>   <button>  <TrashIcon className="h-8 w-8 text-gray-400 hover:text-red-700"/> </button></td>
                            </tr>

                        </tbody>
                    </table>  
                    <div className=" self-start mt-4">
                        <Link href='#' >
                            <button className='bg-gray-200 rounded-md px-2 py-2 w-56 flex items-center  gap-2 hover:bg-gray-300'>
                                <ArrowPathIcon className="h-8 w-8 text-green-700"/> 
                                Actualizar 
                            </button>
                        </Link>  
                      
                    </div>     
               
                </div>

                <div className="flex w-1/3 flex-col gap-8 px-4 pb-2">

                   
                    <div className="flex items-center justify-between px-4 border-b-2 border-gray-400 pb-4">    
                        <h3 className='text-red-800 font-bold text-xl'>Subtotal</h3>
                        <h3 className='text-green-700 font-bold text-xl'><span>Bs. </span>11.20</h3>
                    </div>
                   
                    <div className=" self-start mt-4">
                        <Link 
                            href='/checkout'
                        >
                            <button className='bg-green-700 rounded-md px-2 py-2 w-60 flex items-center  text-white gap-2 hover:bg-green-600'>  <ArrowRightIcon className='w-8 h-8 text-white'/>  Finalizar Compra </button>
                        </Link>   
                    </div>  
                </div> 

            </div>         
        </article>
    </>
  )
}

