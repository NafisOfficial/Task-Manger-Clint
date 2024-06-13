import React from 'react';
import img1 from '../../../assets/Photos/features.jpg'
import { FaCircleCheck } from "react-icons/fa6";

const Features = () => {
    return (
        <div>
            <h1 className='md:mt-16 md:text-4xl my-5 text-xl text-center font-bold '>Our Features</h1>
            <div className='flex md:flex-row flex-col justify-center items-center'>
                <img src={img1} className='md:w-2/5 w-4/5' alt="features" />
                <div>
                    <h1 className='mb-3 font-bold text-xl'>List of the features</h1>
                    <ul className='list-none flex flex-col gap-3'>
                        <li className='flex items-center gap-2'><FaCircleCheck  className='text-green-600' /> Manage your daily task</li>
                        <li className='flex items-center gap-2'><FaCircleCheck  className='text-green-600' /> Set custom deadline</li>
                        <li className='flex items-center gap-2'><FaCircleCheck  className='text-green-600' /> Get notified</li>
                        <li className='flex items-center gap-2'><FaCircleCheck  className='text-green-600' /> Get reward point after complete a task</li>
                        <li className='flex items-center gap-2'><FaCircleCheck  className='text-green-600' /> Drag and drop task to manage.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Features;