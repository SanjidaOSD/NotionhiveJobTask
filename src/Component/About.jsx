



import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoArrowForwardSharp } from "react-icons/io5";

const About = () => {

    const data = [
        {
            img: "https://i.postimg.cc/g2PQG5fT/Rectangle-40.png",
            title: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
        },
        {
            img: "https://www.shutterstock.com/image-photo/software-designer-discussing-new-project-260nw-2230165195.jpg",
            title: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
        },
        {
            img: "https://i.postimg.cc/g2xNdLFL/Rectangle-40-1.png",
            title: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
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
            <h1>ABOUT US</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            <div className="relative rounded-lg p-4">
                <div className="flex justify-between items-end ">
                    <div className="w-[488px] relative">
                        <img
                            src={data[currentIndex].img}
                            alt={`Slide ${currentIndex + 1}`}
                            className="w-[488px] object-cover"
                        />

                        <div className="absolute top-0 left-[100%]">
                            <div className="w-[156px] h-[323px] bg-[#EA4715]">


                                <div className="flex flex-col justify-center items-center h-full">
                                    <div
                                    onClick={handleNext}
                                    className=" flex flex-col justify-center items-center border border-1 border-gray-300 rounded-full w-[248px] h-[248px] bg-transparent p-4 ">
                                        <span className="text-9xl text-white">1</span>
                                        

                                    </div>
                                    <FaLongArrowAltRight 
                                      onClick={handleNext}
                                    className=" absolute text-5xl opacity-50"></FaLongArrowAltRight>

                                </div>
                                
                            </div>

                        </div>


                    </div>
                    <div className="w-[310px] text-left">
                        <h2 className="mt-4 text-lg font-semibold text-gray-800">{data[currentIndex].title}</h2>
                        <p className="mt-2 text-sm text-gray-600 space-y-5 my-5">{data[currentIndex].body}</p>
                        <button className="bg-black text-white px-3 py-2 rounded-lg">Learn more</button>
                    </div>
                </div>
            </div>
            {/* <div className="flex mt-4 space-x-4">
                <button
                    onClick={handlePrevious}
                    className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md shadow-md"
                >
                    Previous
                </button>
                <button
                    onClick={handleNext}
                    className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md shadow-md"
                >
                    Next
                </button>
            </div> */}
        </div>
    );
};

export default About;
