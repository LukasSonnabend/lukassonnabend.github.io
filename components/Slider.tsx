// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar} from 'swiper';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Slider({slides} : {slides: string[]}) {

  return (
    <div>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar]}
      className="lg:w-5/12"
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      >
      { slides.map((imgUrl, index) => (
        <SwiperSlide key={index}>
          <div className='flex justify-center'>
          <img src={imgUrl} height="500" alt="slide" />
          </div>
        </SwiperSlide>
        )) }
    </Swiper>
    </div>
  )
}