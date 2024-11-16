import React from 'react';
import { IoCallOutline } from 'react-icons/io5';

const Topbar = () => {
    return (
       <div className='absolute top-0 z-10 text-white w-full border-b border-white'>
         <div className='flex justify-between mx-auto container'>
            <div >
                <h1 className=' flex items-center gap-2 px-4 py-4'><IoCallOutline></IoCallOutline>Call us: 783 367 2678</h1>
            </div>
            <div className='flex gap-3'>
                <h1 className='border-l px-4 py-4'>Free brochure</h1>
                <h1 className='border-x px-4 py-4'>Help centre</h1>
            </div>
        </div>

        
       </div>
    );
};

export default Topbar;