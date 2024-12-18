// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoArrowForwardSharp } from "react-icons/io5";

const About = () => {

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
            index: "2"

        },
        {
            img: "https://i.postimg.cc/g2xNdLFL/Rectangle-40-1.png",
            title: "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
            index: "3"
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
            <div className="text-center">
            <h1 className="text-4xl my-5 font-semibold">ABOUT US</h1>
            <p className="my-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </div>

            <div className="relative rounded-lg p-4 items-center">
                <div className="flex flex-col lg:flex-row justify-between lg:items-end lg:w-[1090px] lg:ml-24">
                    <div className="w-full lg:w-[488px] relative">
                        <img
                            src={data[currentIndex].img}
                            alt={`Slide ${currentIndex + 1}`}
                            className="w-full md:w-[90%] lg:w-[488px] h-[300px] lg:h-[465px] object-cover rounded-md"
                        />

                        <div className="absolute top-0 left-full transform -translate-x-1/2 lg:translate-x-0 lg:left-[100%]">
                            <div className="w-[100px] ml-[-100px] h-[200px] lg:w-[156px] lg:h-[323px] bg-[#EA4715]">
                                <div className="flex flex-col justify-center items-center h-full">
                                    <div
                                        onClick={handleNext}
                                        className="flex flex-col justify-center items-center border border-1 border-gray-300 rounded-full w-[80px] h-[80px] lg:w-[248px] lg:h-[248px] bg-transparent p-2 lg:p-4"
                                    >
                                        <span className="text-2xl lg:text-9xl text-white">{data[currentIndex].index}</span>
                                    </div>
                                    <FaArrowRightLong
                                        onClick={handleNext}
                                        className="absolute text-xl lg:text-5xl opacity-50"
                                    ></FaArrowRightLong>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text Section */}
                    <div className="w-full lg:w-[310px] text-left mt-4 lg:mt-0">
                        <h2 className="mt-4 text-md lg:text-lg font-medium text-gray-800 my-4 lg:my-8">
                            {data[currentIndex].title}
                        </h2>
                        <p className="mt-2 text-sm text-gray-600 space-y-2 lg:space-y-5 my-4 lg:my-8">
                            {data[currentIndex].body}
                        </p>
                        {/* Button */}
                        <button className="bg-black text-white px-3 py-2 rounded-lg">LEARN MORE</button>
                    </div>
                </div>
            </div>






        </div>
    );
};

export default About;









// <div className="relative rounded-lg p-4">
// <div className="flex justify-between items-end ">
//     <div className="w-[488px] relative">
//         <img
//             src={data[currentIndex].img}
//             alt={`Slide ${currentIndex + 1}`}
//             className="w-[488px] h-[465px] object-cover"
//         />

//         <div className="absolute top-0 left-[100%]">
//             <div className="w-[156px] h-[323px] bg-[#EA4715]">


//                 <div className="flex flex-col justify-center items-center h-full">
//                     <div
//                         onClick={handleNext}
//                         className=" flex flex-col justify-center items-center border border-1 border-gray-300 rounded-full w-[248px] h-[248px] bg-transparent p-4 ">
//                         <span className="text-9xl text-white">{data[currentIndex].index}</span>


//                     </div>
//                     <FaLongArrowAltRight
//                         onClick={handleNext}
//                         className=" absolute text-5xl opacity-50"></FaLongArrowAltRight>

//                 </div>

//             </div>

//         </div>


//     </div>

//     {/* Text */}

//     <div className="w-[310px] text-left">
//         <h2 className="mt-4 text-lg font-medium text-gray-800 my-8">{data[currentIndex].title}</h2>
//         <p className="mt-2 text-sm text-gray-600 space-y-5 my-8">{data[currentIndex].body}</p>
//         {/* button */}
//         <button className="bg-black text-white px-3 py-2 rounded-lg">LEARN MORE</button>
//     </div>
// </div>
// </div>