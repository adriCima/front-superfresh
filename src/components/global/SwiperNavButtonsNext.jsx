import { useSwiper } from 'swiper/react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const SwiperNavButtonsNext = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns-next">    
      <button onClick={() => swiper.slideNext()}>  <ArrowRightIcon className="h-8 w-8  text-gray-500 font-bold" /> </button>
    </div>
  );
};