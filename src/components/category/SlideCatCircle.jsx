import { A11y, Autoplay} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useState, useEffect } from 'react'

import 'swiper/css'
import 'swiper/css/autoplay'

import CategoryCircleMax from './CategoryCircleMax'
import { SwiperNavButtonsNext } from '../global/SwiperNavButtonsNext'
import { SwiperNavButtonsPrev } from '../global/SwiperNavButtonsPrev'



function DataCategories() {
    const [category, setCategory] = useState([]);
  
    useEffect(() => {
       function loadCategory() {
        try {
           fetch('http://localhost:3000/api/categories')
          .then(response => response.json())
          .then(data => setCategory(data.result));        
        } catch (error) {
          console.error('Error al cargar categorías:', error);
        }
      }
  
      loadCategory();
    }, []);
  
    return {category}
  }

export default function SlideCatCircle(){
    const categorias = DataCategories()
    return(
        <Swiper    
          modules={[ Autoplay, A11y]}
          spaceBetween={10} 
          slidesPerView={2}
          breakpoints={{

            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
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
       
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
       /*  loop={true} */
      >
        {
            categorias.category.map(cat =>{
                return(
                    
                        <SwiperSlide key={cat.id}>      
                            <CategoryCircleMax name={cat.category} img={cat.image} id={cat.id}/>           
                        </SwiperSlide>
                    
                )
            })             
            
        }      
        
        <SwiperNavButtonsNext />
        <SwiperNavButtonsPrev />
      </Swiper>
    )
}