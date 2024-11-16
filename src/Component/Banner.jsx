
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
        className="mySwiper relative"
      >
        <div className='absolute top-[35%] left-[8%] text-white z-50'>
          <h1 className='text-5xl uppercase'>Modern elegance</h1>
          <p className='my-6'>Our most popular bifold. Perfect for thermal efficiency.</p>
          <button className='px-2 py-3 bg-[#EA4715] text-white rounded-lg'>OUR SERVICE</button>
        </div>
        <SwiperSlide>

          <div className=' relative w-full'>
            <div className='absolute w-full h-full bg-black bg-opacity-50'>

            </div>
            <img src={slide1} alt="" className='w-full max-h-[640px] object-cover block' />
          </div>
        </SwiperSlide>
        <SwiperSlide>

          <div className=' relative w-full'>
            <div className='absolute w-full h-full bg-black bg-opacity-50'>

            </div>
            <img src={slide2} alt="" className='w-full max-h-[640px] object-cover block' />
          </div>
        </SwiperSlide>
        <SwiperSlide>

          <div className=' relative w-full'>
            <div className='absolute w-full h-full bg-black bg-opacity-50'>

            </div>
            <img src={slide3} alt="" className='w-full max-h-[640px] object-cover block' />
          </div>
        </SwiperSlide>


      </Swiper>

    </div>
  );
};

export default Banner;