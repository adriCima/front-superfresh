import { MinusCircleIcon } from '@heroicons/react/24/solid' 
import { PlusCircleIcon } from '@heroicons/react/24/solid' 

export default function ButtonsAgreeDisagree({product, addToCart, restToCart }){
    return(
        <>
        <div className='flex items-center justify-evenly bg-slate-200 rounded-xl py-1'>
            <button 
                onClick={()=> restToCart(product)}                               
            >
                <MinusCircleIcon className="h-6 w-6 text-gray-400 hover:text-red-700"/>
            </button>                                         
                <h3 className='text-lg font-bold bg-white py-1 px-4 rounded-md'>{product.quantity}</h3>
            <button  
             onClick={()=> addToCart(product)}                           
            >
                <PlusCircleIcon className="h-6 w-6 text-gray-400 hover:text-green-700"/>
            </button>
            </div> 
        
        </>
    )
}