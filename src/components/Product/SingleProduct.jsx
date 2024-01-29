import { MinusCircleIcon } from '@heroicons/react/24/outline'
import './Product.css'
import { StarIcon } from '@heroicons/react/24/solid'
import { PlusCircleIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
/* import CardRecomiended from './CardRecomiended' */

function ButtonsCompra(){
    return(
        <>
            <div className="flex gap-4 items-center justify-center w-52 h-9 rounded-xl border-[1px] border-green-700">
                <button > <MinusCircleIcon className='w-6 h-6 text-gray-400 hover:text-red-800'/> </button>                           
                <span className=' font-bold text-base text-gray-800'>1</span>
                <button > <PlusCircleIcon className='w-6 h-6 text-gray-400 hover:text-green-800'/> </button>                           
                <p className=' font-bold text-base text-gray-800'>Bs. 3.50</p>
            </div>
        </>
    )
}

export default function SingleProduct({product}){

    const [compra, setCompra] = useState(false)

    const toggleButtons = () =>{
        setCompra(!compra)
    }

    if(!product){
        return <div>Cargando...</div>; // o 
    }
    

    return(
        <>
            <article className="md:grid md:grid-cols-2 xl:grid-cols-3">
                <aside className="flex p-2 md:w-[400px] md:h-[350px] lg:w-[500px] justify-center items-center ">
                    <img 
                        className='border-[1px] border-slate-400 rounded-lg w-96 h-96 object-contain'
                        src={product.image} alt={product.category} /> 
                </aside>

                <aside className="flex flex-col gap-2 items-start px-4 md:my-10 md:px-8"> 
                    <div className="flex flex-col">
                        <h2 className="font-bold uppercase text-2xl text-blue-900">{product.category}</h2> 
                        <h4 className='text-teal-800 text-sm font-bold uppercase'>{ product.sku }</h4>
                        <h3 className='text-slate-600 text-lg font-bold uppercase'>{product.des_category}</h3>
                    </div>                                

                    <div className="bg-gray-400 w-[95%] h-[1px]"></div>

                    <div className="flex gap-4 items-center">
                        <div>
                            <button><StarIcon className='w-8 h-8 text-gray-500 hover:text-yellow-500' /></button>
                            <button><StarIcon className='w-8 h-8 text-gray-500 hover:text-yellow-500' /></button>
                            <button><StarIcon className='w-8 h-8 text-gray-500 hover:text-yellow-500' /></button>
                            <button><StarIcon className='w-8 h-8 text-gray-500 hover:text-yellow-500' /></button>
                            <button><StarIcon className='w-8 h-8 text-gray-500 hover:text-yellow-500' /></button>
                        </div> 

                        <span className='text-xs text-gray-900 font-semibold'>(0)</span>              
                        <span className='text-xs text-gray-900 font-semibold'>Calificar</span>
                    </div>

                    <div className=" flex  items-end gap-12 self-center mt-4">
                        <div className=" font-bold">
                            <p className='text-gray-500 text-xl line-through decoration-red-700 decoration-2'>Bs. {product.buy_price}</p>
                            <p className='text-green-900 text-2xl'>Bs. {product.sale_price}</p>
                        </div>
                        <span className="text-gray-500 text-lg font-bold">
                            Precio por {product.des_weight}
                        </span>
                    </div>

                    <div className="bg-gray-400 w-[95%] h-[1px]"></div>

                    <div className="flex flex-col w-full gap-4 items-center justify-center mt-4">
                        <button 
                            onClick={toggleButtons}
                            className={`${compra ? `hidden` : 'bg-red-600 text-white rounded-md text-lg w-28 h-8 hover:bg-red-900'}`}>
                                Agregar
                        </button>

                        {compra ? ( <ButtonsCompra />) : ('')}
                        
                    </div>                   
                </aside>  

                <div className='md:px-20 xl:px-4 xl:py-8 '>
                    <h3 className='font-bold'>DESCRIPCION</h3>
                    <p className='p-4 text-gray-600 font-semibold italic text-lg'>{product.description}</p>
                </div>
                    
            </article>                      
               {/*  <CardRecomiended id={product.id_category}/> */}
                                    
        </>
    )
}