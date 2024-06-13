import React from 'react';
import banner1 from '../../../assets/Photos/banner-char-1.jpg'
import './banner.css'
import { Link } from 'react-router-dom';
import { MdArrowOutward } from "react-icons/md";

const Banner = () => {
    return (
        <div className='grid grid-cols-2 bg-[#D1D8EA] items-center justify-center h-4/6'>
            <div className='md:m-20 m-5'>
                <h1 className='md:text-4xl text-base font-bold md:my-5 mb-2 md:leading-normal leading-4'>Did you not manage your work in time?</h1>
                <p className='md:text-base text-xs leading-3'>Here the Focus to help you to manage your daily task. It will notify you to do work timely. You can organize your working stack. Focus is the digital solution for you.</p>
                <Link to="/focus" className="btn bg-[#51DACF] md:mt-5 mt-2 border-none md:btn-md btn-sm md:px-5 px-2 text-white">Let’s Explore<MdArrowOutward className='text-lg'/></Link>
            </div>
            <img src={banner1} className='ms-auto h-5/6' alt="person" />
        </div>
    );
};

export default Banner;