import { useSwiper } from 'swiper/react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
export const SwiperNavButtonsPrev = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns-prev">
      <button onClick={() => swiper.slidePrev()}> <ArrowLeftIcon className="h-8 w-8 text-gray-500 font-bold" /> </button>      
    </div>
  );
};