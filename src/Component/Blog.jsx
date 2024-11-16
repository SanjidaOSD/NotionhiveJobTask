import React from 'react';
import Marquee from 'react-fast-marquee';
import { FiPlus } from 'react-icons/fi';

const Blog = () => {
    const data = [
        {
            img: "https://ici.net.au/blog/wp-content/uploads/2022/01/Study-Tips.jpg",
            title: "WINDOW",
            body: "Consectetur adipiscing sed do",
        },
        {
            img: "https://www.oneeducation.org.uk/wp-content/uploads/2024/05/How-to-Study-Effectively-for-Exams-at-Home.png",
            title: "WINDOW ",
            body: " Consectetur adipiscing elit",
        },
        {
            img: "https://www.adobe.com/acrobat/hub/media_1991c92007a56dda2ffc0debb23d0c375326af86c.jpeg?width=750&format=jpeg&optimize=medium",
            title: "WINDOW",
            body: "Eiusmod tempor incididunt",
        },
        {
            img: "https://i.postimg.cc/0NLJNM4f/Rectangle-345-1.png",
            title: "WINDOW",
            body: " Quis nostrud exercitation.",
        },
        {
            img: "https://i.postimg.cc/pTz55Vbt/Rectangle-345.png",
            title: "WINDOW",
            body: " Incididunt ut labore",
        },
    ];

    return (
        <div className="  lg:ml-24 ">
            <h1 className="text-3xl font-semibold my-9 text-left">BLOG</h1>
            <Marquee>
                <div className="flex gap-6">
                    {data.map((item, index) => (

                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                        >

                            <div className='relative'>
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-[540px] h-[270px] object-cover"
                                />
                                <div className='absolute inset-0 flex justify-center items-center'>
                                    {/* div for red circle */}
                                    <div className='w-[64px] h-[64px] lg:w-[64px] lg:h-[64px] rounded-full bg-[#EA4715] flex justify-center items-center'>
                                        <FiPlus className='text-white text-2xl' />
                                    </div>
                                </div>

                            </div>

                            <div className="p-4 text-left">
                                <h2 className="text-xs font-thin mb-2">{item.title}</h2>
                                <p className="text-lg font-medium mb-4">{item.body}</p>

                            </div>

                        </div>


                    ))}
                </div>
            </Marquee>
        </div>
    );
};

export default Blog;
