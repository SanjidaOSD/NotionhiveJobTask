
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from '../assets/slide1.png'
import slide2 from '../assets/slider2.jpg'
import slide3 from '../assets/slider3.jpg'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
        className="mySwiper relative"
      >
        <div className='absolute ml-[-16px] sm:ml-0 top-[35%] left-[8%] text-white z-50'>
          <h1 className='text-2xl md:text-3xl lg:text-5xl uppercase '>Modern elegance</h1>
          <p className='my-6 max-w-[300px]'>Our most popular bifold. Perfect for thermal efficiency.</p>
          <div className=''>
          <button className='px-5 py-2 bg-[#EA4715] text-white rounded-lg'>OUR SERVICE</button>
          </div>
        </div>
        <SwiperSlide>

          <div className=' relative w-full'>
            <div className='absolute w-full h-full bg-black bg-opacity-50'>

            </div>
            <img src={slide1} alt="" className='w-full min-h-[440px] md:max-h-[640px] object-cover block' />
          </div>
        </SwiperSlide>
        <SwiperSlide>

          <div className=' relative w-full'>
            <div className='absolute w-full h-full bg-black bg-opacity-50'>

            </div>
            <img src={slide2} alt="" className='w-full min-h-[440px] md:max-h-[640px] object-cover block' />
          </div>
        </SwiperSlide>
        <SwiperSlide>

          <div className=' relative w-full'>
            <div className='absolute w-full h-full bg-black bg-opacity-50'>

            </div>
            <img src={slide3} alt="" className='w-full min-h-[440px] md:max-h-[640px] object-cover block' />
          </div>
        </SwiperSlide>


      </Swiper>

    </div>
  );
};

export default Banner;