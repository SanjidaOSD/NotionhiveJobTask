
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from '../assets/slide1.png'
import slide2 from '../assets/slider2.jpg'
import slide3 from '../assets/slider3.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
  return (

    <div>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='w-full'>
            <img src={slide1} alt="" className='w-full h-[640px] object-cover block' />
          </div>
        </SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" className='w-full h-[640px] object-cover' /></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" className='w-full h-[640px] object-cover' /></SwiperSlide>

      </Swiper>

    </div>
  );
};

export default Banner;