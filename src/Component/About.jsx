// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoArrowForwardSharp } from "react-icons/io5";

const About = () => {

    // const pagination = {
    //     clickable: true,
    //     renderBullet: function (index, className) {
    //         return '<span class="' + className + '">' + (index + 1) + '</span>';
    //     },
    // };


    // return (
    //     <div>
    //         <div>
    //             <h1 className="text-4xl my-5 font-semibold">ABOUT US</h1>
    //             <p className="my-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
    //         </div>
    //         <Swiper
    //             spaceBetween={30}
    //             pagination={pagination}
    //             centeredSlides={true}
    //             autoplay={false}
    //             navigation={true}
    //             modules={[Pagination, Navigation]}
    //             className="mySwiper"
    //         >
    //             <SwiperSlide>
    //                 <div className='w-full flex justify-between'>
    //                     <div>
    //                         <img src="https://i.postimg.cc/g2PQG5fT/Rectangle-40.png" alt="" />
    //                     </div>
    //                     <div className='bg-red-700 h-[300px] w-[120px]'>

    //                     </div>
    //                     <div>
    //                         <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse nam reprehenderit</h1>
    //                         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim doloremque, quae mollitia recusandae architecto corporis, et illo tempore? Eaque, aliquid.</p>
    //                         <button className='px-5 py-2 bg-black text-white rounded-md'>Learn More</button>
    //                     </div>

    //                 </div>
    //             </SwiperSlide>
    //             <SwiperSlide>
    //                 <div className='w-full'>
    //                     <p>Slide 2</p>
    //                 </div>
    //             </SwiperSlide>
    //             <SwiperSlide>
    //                 <div className='w-full'>
    //                     <p>Slide 3</p>
    //                 </div>
    //             </SwiperSlide>
    //         </Swiper>

    //     </div>
    // );



    const data = [
        {
            img: "https://i.postimg.cc/g2PQG5fT/Rectangle-40.png",
            title: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
            index: "1"
        },
        {
            img: "https://www.ants.af/assets/img/client-img1.jpg",
            title: "Labore et dolore magna aliqua. tempor incididunt ut labore et dolore magna aliqua.",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
            index:"2"

        },
        {
            img: "https://i.postimg.cc/g2xNdLFL/Rectangle-40-1.png",
            title: "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur.",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
            index:"3"
        },

    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === data.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? data.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="">
            <h1 className="text-4xl my-5 font-semibold">ABOUT US</h1>
            <p className="my-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            <div className="relative rounded-lg p-4">
                <div className="flex justify-between items-end ">
                    <div className="w-[488px] relative">
                        <img
                            src={data[currentIndex].img}
                            alt={`Slide ${currentIndex + 1}`}
                            className="w-[488px] h-[465px] object-cover"
                        />

                        <div className="absolute top-0 left-[100%]">
                            <div className="w-[156px] h-[323px] bg-[#EA4715]">


                                <div className="flex flex-col justify-center items-center h-full">
                                    <div
                                    onClick={handleNext}
                                    className=" flex flex-col justify-center items-center border border-1 border-gray-300 rounded-full w-[248px] h-[248px] bg-transparent p-4 ">
                                        <span className="text-9xl text-white">{data[currentIndex].index}</span>


                                    </div>
                                    <FaLongArrowAltRight 
                                      onClick={handleNext}
                                    className=" absolute text-5xl opacity-50"></FaLongArrowAltRight>

                                </div>

                            </div>

                        </div>


                    </div>
                    {/* Text */}
                    <div className="w-[310px] text-left">
                        <h2 className="mt-4 text-lg font-medium text-gray-800 my-8">{data[currentIndex].title}</h2>
                        <p className="mt-2 text-sm text-gray-600 space-y-5 my-8">{data[currentIndex].body}</p>
                        <button className="bg-black text-white px-3 py-2 rounded-lg">LEARN MORE</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;
