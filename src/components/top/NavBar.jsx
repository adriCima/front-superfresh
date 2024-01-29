import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { UserIcon } from '@heroicons/react/24/solid'
import { useState, useEffect } from 'react'

import TopMenu from './TopMenu'
import TopMenuVertical from './TopMenuVertical'
import { PreviewCart } from '../Cart/PreviewCard.jsx'

import logo from '../../assets/brand/logo_SuperFreshof.png'

export default function NavBar({ cart, subtotal, addToCart, restToCart }){

    const [header, setHeader] = useState(false)
    const [isClick, setIsClick] = useState(false)
    const [shopCart, setShopCart] = useState(false)

    const scrollHeader = () =>{
        if(window.scrollY >= 20){
            setHeader(true)
        }else{
            setHeader(false)
        }
    }

    const toggleNavBar = () => {
        setIsClick(!isClick)
    }

    const toggleCard = () =>{
        setShopCart(!shopCart)
    }

    useEffect(() =>{
        window.addEventListener('scroll', scrollHeader)
        return()=>{
            window.addEventListener('scroll', scrollHeader)
        }
    }, [])

    return(
        <>
           <div className={header ? "bg-[green] mt-[-43px] fixed w-full z-10": "bg-black"}> 
                <nav className="w-full h-20 bg-red-500 flex items-center justify-between px-8">                        
                    <img
                        className="w-28 h-auto"
                        width={227} 
                        height={114}
                        src={logo} 
                        alt="SuperFresh Logo" 
                        title="SuperFresh Logo" 
                    />               
                    
                    <input 
                        className="hidden bg-slate-100 pl-4 rounded-lg h-10 md:block md:w-[250px] lg:w-[450px]"
                        placeholder="Buscar Producto..."
                        type="text"
                        name='buscargeneral'
                    />
                
                    <div className="flex  items-center justify-between gap-4">
                        <a
                            className='md:hidden'
                            href='/login'>
                            <button >
                                <UserIcon className="h-8 w-8 text-white" />
                            </button>
                        </a> 
                        <a
                            className='hidden md:block' 
                            href='/login'>
                            <button className='text-red-500 font-bold text-base bg-white py-1 px-4 rounded w-24 hover:bg-slate-200'>
                                Ingresar
                            </button>
                        </a> 

                        <button onClick={toggleCard} className='pt-4' >
                            <ShoppingCartIcon className="h-8 w-8 text-white " />
                        </button>  

                        
                        <div 
                            className="flex items-center justify-center w-4 h-4 rounded-full bg-blue-500 text-white text-xs p-3 mt-[-25px] ml-[-25px] z-10">
                            {cart && cart.length ? cart.length : 0}
                        </div>
                        
                    
                        <button onClick={toggleNavBar}
                            className='md:hidden'
                        >
                            {isClick ?  <XMarkIcon className=" h-8 w-8 text-white lg:hidden" /> :  <Bars3Icon className=" h-8 w-8 text-white lg:hidden" />} 
                        </button>
                    </div>  
                </nav>
                {
                    isClick ? (
                        <TopMenuVertical />
                        
                    ) :('')
                }
                {
                    shopCart ? (
                    <PreviewCart cart={cart} subtotal={subtotal} addToCart={addToCart} restToCart={restToCart}/>) : ('')
                }
                <TopMenu />
           </div>
        </>
    )
}