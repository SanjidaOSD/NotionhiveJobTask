import React from 'react';

const Blog = () => {
    const data = [
        {
            img: "https://ici.net.au/blog/wp-content/uploads/2022/01/Study-Tips.jpg",
            title: "Window",
            body: "Consectetur adipiscing sed do",
        },
        {
            img: "https://www.oneeducation.org.uk/wp-content/uploads/2024/05/How-to-Study-Effectively-for-Exams-at-Home.png",
            title: "Consectetur adipiscing elit",
            body: "Window",
        },
        {
            img: "https://www.adobe.com/acrobat/hub/media_1991c92007a56dda2ffc0debb23d0c375326af86c.jpeg?width=750&format=jpeg&optimize=medium",
            title: "Window",
            body: "Eiusmod tempor incididunt",
        },
        {
            img: "https://i.postimg.cc/0NLJNM4f/Rectangle-345-1.png",
            title: "Window",
            body: " Quis nostrud exercitation.",
        },
        {
            img: "https://i.postimg.cc/pTz55Vbt/Rectangle-345.png",
            title: "Window.",
            body: " Incididunt ut labore",
        },
    ];

    return (
        <div className="bg-gray-100 min-h-screen p-10">
            <h1 className="text-3xl font-bold text-center mb-8">Blog Cards</h1>
            <div className="flex flex-row">
                {data.map((item, index) => (
                    <marquee behavior="scroll" direction="left">
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    >
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                            <p className="text-gray-600 mb-4">{item.body}</p>
                            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                Read More
                            </button>
                        </div>
                    </div>
                    </marquee>
                    
                ))}
            </div>
        </div>
    );
};

export default Blog;
