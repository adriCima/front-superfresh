import { HeartIcon } from "@heroicons/react/24/solid"
import { EyeIcon } from "@heroicons/react/24/solid"
import { TagIcon } from "@heroicons/react/24/solid"
import ButtonsAgreeDisagree from "../Cart/buttonsAgreeDisagre"

export function CardProduct({product, addToCart, restToCart}){

    return (
        <>
            <article className='border-[1px] min-w-64 max-w-64 min-h-96 max-h-96 rounded-lg flex flex-col  items-center justify-between gap-1 p-4 hover:border-gray-400 hover:bg-slate-200 relative'>
                <div className="w-full flex gap-4 items-center justify-end pr-4 ">
                    <HeartIcon className="h-6 w-6  cursor-pointer text-gray-300 hover:text-red-500"/>
                <a  href={`/products/${product.id}`}>             
                    <EyeIcon className="h-6 w-6  cursor-pointer text-gray-300 hover:text-sky-500"/>
                </a>
                </div>               
                <div className=" w-30 h-auto overflow-hidden ">
                    <img
                        className='w-full hover:scale-125 duration-150' 
                        src={ product.image} 
                        alt={ product.name }
                        title={ product.name } />
                </div>
                <div className="flex flex-col self-start gap-2">
                    <h2 className="text-blue-900 font-bold text-xl uppercase"> { product.category }</h2>
                    <h4 className=" text-xs text-gray-700 font-bold mt-[-8px] uppercase">{ product.descategory }</h4>
                    <div className="w-full flex flex-col gap-2">
                        <div className="w-full flex items-end justify-center gap-8 font-bold text-xl">
                            <p className="text-gray-500 line-through"> Bs./ { product.buy_price.toFixed(2) }</p>
                            <p className="text-teal-700 text-2xl"> Bs./ { product.sale_price.toFixed(2) }</p>
                        </div>
                        <span className="text-lg text-gray-600">x { product.weight }</span>
                    </div>
                </div>
                <button 
                    onClick={()=> addToCart(product)}
                    className="bg-red-700 text-white px-4 py-1 rounded-md w-28 h-10 uppercase hover:bg-red-800">
                        Agregar
                </button>
                <ButtonsAgreeDisagree product={product} addToCart={addToCart} restToCart={restToCart} />
                <div>                   
                    {product.id_subcategory === 2 && (                       
                        <>      
                            <TagIcon className="w-20 h-20 rotate-45 text-teal-900 absolute top-0 left-[-10px]"/>
                            <p className="absolute text-white text-base font-bold top-8 left-3 rotate-[-45deg]">OFF</p>
                        </>
                        )}
                        {product.id_subcategory === 4 && (
                            <>
                                <TagIcon className="w-20 h-20 rotate-45 text-red-800 absolute top-0 left-[-10px]"/>
                                <p className="absolute text-white text-[10px] top-8 left-[6px] rotate-[-45deg]">Nuevo</p>
                            </>
                        )}
                </div>
            </article>
        </>
    )
}