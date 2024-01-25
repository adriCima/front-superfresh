import { Pagination,  A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import hero1web from '../../assets/hero/superfresh_hmain_1.png'
import hero2web from '../../assets/hero/superfresh_hmain_2.png'
import hero3web from '../../assets/hero/superfresh_hmain_3.png'
import hero1mobile from '../../assets/hero/superfresh_hmain_mobile_1.png'
import hero2mobile from '../../assets/hero/superfresh_hmain_mobile_2.png'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

export default function HeroSlide() {
  return (
    <>
      <div className='hidden md:block'>
           <Swiper    
              modules={[Pagination,  Autoplay, A11y]}
              spaceBetween={50}
              slidesPerView={1}    
              pagination={{ clickable: false }}
              autoplay={{
                delay: 10000,
                disableOnInteraction: false,
              }}
              loop={true}
            >
    
          <SwiperSlide className=''>  
              <img src={hero1web} alt="imagen" className='h-[350px] w-[1440px]'/>
          </SwiperSlide>
          <SwiperSlide>
              <img src={hero2web} alt="imagen" className='h-[350px] w-[1440px]'/>
          </SwiperSlide>
          <SwiperSlide>
              <img src={hero3web} alt="imagen" className='h-[350px] w-[1440px]'/>
          </SwiperSlide>     
      </Swiper>
    </div>

      <div className='felx  md:hidden'>
      <Swiper    
      modules={[Pagination,  Autoplay, A11y]}
      spaceBetween={50}
      slidesPerView={1}    
      pagination={{ clickable: false }}
      autoplay={{
      delay: 10000,
      disableOnInteraction: false,
      }}
      loop={true}
      >

      <SwiperSlide className=''>  
        <img src={hero1mobile} alt="imagen" className='h-[350px] w-[1440px]'/>
      </SwiperSlide>
      <SwiperSlide>
         <img src={hero2mobile} alt="imagen" className='h-[350px] w-[1440px]'/>
      </SwiperSlide>
      
      </Swiper>
      </div>
    </>
 
  )
}
