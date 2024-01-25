'use client'
import { useEffect, useState } from "react"
import { CardProduct } from "./CardProduct"
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay} from 'swiper/modules'
import { SwiperNavButtonsNext } from '../../global/SwiperNavButtonsNext'
import { SwiperNavButtonsPrev } from '../../global/SwiperNavButtonsPrev'
import 'swiper/css'
import 'swiper/css/autoplay'


function DataOfertProducts(){
    const [ofertProducts, setOfertProducts] = useState([]);

    useEffect(() => {
        async function loadOfertProducts(){
            try {
                const response = await axios.get('http://localhost:3000/api/products/betsellers')
                setOfertProducts(response.data.result)
            } catch (error) {
                console.error('Error al cargar el producto en mas vendido ', error)
            }
        }
        loadOfertProducts();
    }, [])
    
    return {ofertProducts}
   
}

export default function SlideBetSellerProduct(){
    const products = DataOfertProducts()
    console.log(products)
    return(
        <Swiper
            modules={[ A11y]}
            spaceBetween={50} 
            slidesPerView={1}
            breakpoints={{

            640: {
                slidesPerView: 2,
                spaceBetween: 50,
            },
            768: {
                slidesPerView: 5,
                spaceBetween: 50,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
            1280:{
                slidesPerView: 6,
                spaceBetween: 30, 
            }
            }}          
           
        /*  loop={true} */
        >
            {
                products.ofertProducts.map(pro =>{
                    return(
                        <SwiperSlide key={pro.id} >
                            <CardProduct product={pro} />
                        </SwiperSlide>
                    )
                })
            }
            <SwiperNavButtonsNext />
            <SwiperNavButtonsPrev />
        </Swiper>
    )
}